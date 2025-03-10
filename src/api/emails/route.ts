
import { Resend } from 'resend';
import  Welcome from '../../emails/Welcome.tsx';


  // resend declaration with API key as parameter
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailTo  = process.env.SEND_EMAIL_TO;

  export async function POST() {
                        await resend.emails.send({
                        from: 'onboarding@resend.dev',
                        to: emailTo as string,
                        subject: 'hello EMAIL',
                        react: Welcome( "www.xata.ca" ),
                        });

}