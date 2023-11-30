/* Imports */
import Header from "../Header";
import ContactForm from "../ContactForm";

/* Contact page component */
const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>Contact page</h1>
                    <ContactForm />
                </div>
            </main>
        </>
    )
}

export default Contact;
