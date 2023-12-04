/* Import */
import { useState } from "react";
import "./styles.css";

/* ContactForm component */
const ContactForm = () => {
  // Init states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formValidation, setformValidation] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Add validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        errorMessage = /^\S+@\S+\.\S+$/.test(value) ? '' : 'Invalid email address';
        break;
      case 'message':
        errorMessage = value.trim() === '' ? 'Message is required' : '';
        break;
      default:
        break;
    }

    setformValidation({ ...formValidation, [name]: errorMessage });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isFormInvalid()) {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const isFormInvalid = () => {
    return (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.message.trim() === '' ||
      Object.values(formValidation).some((error) => error !== '')
    );
  };

  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <div className="field-group">
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{formValidation.name}</span>
        </label>
      </div>
      <div className="field-group">
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{formValidation.email}</span>
        </label>
      </div>
      <div className="field-group">
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <span className="error">{formValidation.message}</span>
        </label>
      </div>
      <div className="actions">
        <button type="submit" disabled={isFormInvalid()}>Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
