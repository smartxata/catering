import nodemailer from 'nodemailer';
// import  {renderMail}  from 'svelte-mail';
// import Mail from '$lib/components/Mail.svelte';
// import { SvelteComponent } from 'svelte';

   
const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 0,
    secure: false,
    auth: {
        user: 'unknown',
        pass: 'unknown'
    }
});  


const options = {
    from: 'unknown',
    to: 'unknown',
    subject: 'hello Catering',
    html: "emailHtml"
};

transporter.sendMail(options);

//  export  async function sendMail() {
//   const { html, text } = await renderMail(Mail, { data: { user: 'World' } });
  
//     /*
//       `html` contains the rendered html string:
//       "<strong style="color: red">Hello, World</strong>"
  
//       `text` contains the rendered plain text message:
//       "Hello, World"
//     */
  
//       transporter.sendMail(options);  
//   }
  
//   sendMail()
//     .catch(console.error);
 