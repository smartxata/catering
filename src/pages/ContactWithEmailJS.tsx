import React, { useState, useEffect  } from "react";
import emailjs from "@emailjs/browser"
// TypeScript type for form values
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // State for form values
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
 
  useEffect(() => emailjs.init({publicKey: ""}), []);
  // const form = useRef();


  // State for error and success messages
  // const [status, setStatus] = useState<string>("");

   

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  
  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm( "service_wgjlcgj",  
         "template_f3jijor", e.target as HTMLFormElement, {
        publicKey: "mlGPeIL78KXorltqE",
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // Handle form submission
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   const { name, email, message } = formValues;
    
  //   // Check if all fields are filled
  //   if (!name || !email || !message) {
  //     setStatus("All fields are required!");
  //     return;
  //   }

  //   // Send email using EmailJS
  //   emailjs
  //     .sendForm(
  //       "service_wgjlcgj",  // Replace with your service ID
  //       "template_f3jijor",  // Replace with your template ID
  //       e.target as HTMLFormElement,
  //       "reno@xata.ca"       // Replace with your user ID
  //     )
  //     .then(
  //       (result) => {
  //         setStatus("Email sent successfully!");
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         setStatus("Failed to send email. Try again later.");
  //         console.error(error.text);
  //       }
  //     );
  // };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}  >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
 

