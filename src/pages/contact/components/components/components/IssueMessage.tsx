import './styles/IssueMessage.css';

function IssueMessage() {
  return (
    <div
      className="issue-message"
      id="issuemessage"
    >
      <label
        htmlFor="issue-text-area"
        className="issue-text-label"
        id="issuelabel"
      >
        Describe the issue:
      </label>
      <textarea
        className="issue-text-area"
        id="issuetextarea"
        name="issue text area"
        placeholder=""
      />
    </div>
  );
}

export default IssueMessage;
