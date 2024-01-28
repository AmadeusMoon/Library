import './styles/ContactForm.css';
import FeedbackForm from './components/FeedbackForm';
import BugReport from './components/BugReport';
import Contact from './components/Contact';

function ContactForm({ formType }: { formType: string }) {
  return formType === 'Feedback' ? (
    <FeedbackForm />
  ) : formType === 'Bug Report' ? (
    <BugReport />
  ) : formType === 'Contact' ? (
    <Contact />
  ) : null;
}
export default ContactForm;
