#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function getFiles(dirPath) {
  let absoluteDirPath = path.resolve(dirPath);
  // Ignore certain directories
  let baseName = path.basename(absoluteDirPath);
  if (
    baseName === 'node_modules' ||
    baseName === 'script.mjs' ||
    baseName === '.git' ||
    baseName === '.vscode'
  ) {
    return [];
  }
  let entries = fs.readdirSync(absoluteDirPath, { withFileTypes: true });
  let filePaths = entries.map((entry) =>
    path.join(absoluteDirPath, entry.name)
  );
  let dirPaths = filePaths.filter((path) => fs.statSync(path).isDirectory());
  let fileNames = filePaths.filter((path) => !fs.statSync(path).isDirectory());
  for (const dir of dirPaths) {
    fileNames = fileNames.concat(getFiles(dir));
  }
  return fileNames;
}

// Get a list of all files in the directory
const files = getFiles('.');

files.forEach((file) => {
  // Ignore certain files and file types
  if (
    file.includes('node_modules') ||
    file.includes('package.json') ||
    file.includes('package-lock.json') ||
    file.includes('tsconfig.json') ||
    file.includes('vite.config.ts') ||
    file.endsWith('.d.ts')
  ) {
    return;
  }
  // Only process .ts, .tsx, and .scss files
  if (
    !file.endsWith('.ts') &&
    !file.endsWith('.tsx') &&
    !file.endsWith('.scss')
  ) {
    return;
  }

  // Check if the file exists before trying to read it
  if (!fs.existsSync(file)) {
    console.log(`Skipping non-existent file: ${file}`);
    return;
  }

  // Read the file
  let content = fs.readFileSync(file, 'utf8');
  console.log(`Read file: ${file}`);

  // Check if the file has a shebang line at the top
  if (content.startsWith('#!/usr/bin/env node')) {
    // If it does, remove it for now
    content = content.replace('#!/usr/bin/env node\n', '');
  }

  // Split the content into lines
  const lines = content.split('\n');

  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    console.log(`Modifying .ts or .tsx file: ${file}`);
    // Check each line of the .ts file for the import lines
    const importLines = lines.filter((line) => line.startsWith('import'));
    // When they are found reorder them
    importLines.sort((a, b) => b.length - a.length);
    // Separate the other lines of code
    const otherLines = lines.filter((line) => !line.startsWith('import'));
    // And finally return the new file with the changed order in imports
    const newContent = [...importLines, ...otherLines].join('\n');
    fs.writeFileSync(file, newContent, 'utf8');
  } else if (file.endsWith('.scss')) {
    console.log(`Modifying .scss file: ${file}`);
    // Check each line of the .scss file
    let insideRuleSet = false;
    // If true ruleSetLines.push
    let ruleSetLines = [];
    // If false otherLines.push
    let otherLines = [];
    let openingLine = '';
    let closingLine = '';
    lines.forEach((line) => {
      if (line.includes('{')) {
        insideRuleSet = true;
        openingLine = line;
      } else if (line.includes('}')) {
        insideRuleSet = false;
        closingLine = line;
        ruleSetLines.sort((a, b) => b.length - a.length);
        otherLines.push(openingLine, ...ruleSetLines, closingLine);
        ruleSetLines = [];
      } else if (insideRuleSet) {
        ruleSetLines.push(line);
      } else {
        otherLines.push(line);
      }
    });
    const newContent = otherLines.join('\n');
    fs.writeFileSync(file, newContent, 'utf8');
  }
});
