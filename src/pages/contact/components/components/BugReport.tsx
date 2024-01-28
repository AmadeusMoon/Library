import './styles/BugReport.css';
import TOU from './components/TOU';
import ImageUpload from './components/ImageUpload';
import IssueMessage from './components/IssueMessage';
import PagesSelector from './components/PagesSelect';

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
