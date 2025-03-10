
export default function Contact(){
  return (
    <main>
      <button onClick={async () => {
        await fetch('/api/emails', {method: "POST"})
      }} >
        Send Email
      </button>
    </main>
  )
}



// import React, { useState, useEffect, useRef } from "react";

// interface ContactEmailProps {
//   name: string,
//   email: string,
//   message: string
// } 

// const Contact: React.FC = () => {
  
//   const [formData, setFormData] = useState<ContactEmailProps>({
//     name: "",
//     email: "",
//     message: "",
//   });
//   // const [isSending, setIsSending] = useState<boolean>(false);

//   const handleChange = (    e: any  ) => {
//     const { name, value } = e.target;
//     setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     //confirm email and message field are not empty
//     if (!formData.email || !formData.message) {
//       // showToast.info("Email and message are required fields");
//       console.log("Email and message are required fields");
//       return;
//     }

//     try {
//       // setIsSending(true);
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         }),
//       });

//       // handle success
//       if (response.ok) {
//         // showToast.success("Email Sent Successfully!");
//         console.log("Email Sent Successfully!");

//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         })
//       } else {
//         // showToast.error("There was a problem sending email. Pls try again!");
//         console.log("There was a problem sending email. Pls try again!");
//       }
//     } catch (error) {
//       console.log("Error sending email:", error);
//       // showToast.error("There was a problem sending email. Pls try again!");
//       console.log("There was a problem sending email. Pls try again!");
//     } finally {
//       // setIsSending(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form
//             onSubmit={handleSubmit}
//             className="border-none p-0"
//             data-aos="fade-down"
//           >
//             <input
//               name="email"
//               type="email"
//               placeholder="your-email@mail.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
//               required
//             />
//             <textarea
//               name="message"
//               cols={30}
//               rows={5}
//               placeholder="...type your message"
//               value={formData.message}
//               onChange={handleChange}
//               className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-primary hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded"
//             >
//               Send
//               Message
//             </button>
//           </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default Contact;
 

