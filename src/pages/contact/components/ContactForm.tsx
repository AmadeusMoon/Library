import FeedbackForm from './components/FeedbackForm';
import BugReport from './components/BugReport';
import Contact from './components/Contact';
import './styles/ContactForm.css';

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
