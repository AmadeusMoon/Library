import IssueMessage from './components/IssueMessage';
import PagesSelector from './components/PagesSelect';
import ImageUpload from './components/ImageUpload';
import TOU from './components/TOU';
import './styles/BugReport.css';

function BugReport() {
  return (
    <div
      className="bug-report"
      id="bugreport"
    >
      <PagesSelector />
      <IssueMessage />
      <ImageUpload />
      <TOU />
    </div>
  );
}

export default BugReport;
