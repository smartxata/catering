// import type { NextApiRequest, NextApiResponse } from 'next/server';
// import { Email } from '../Email'; 

// import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
// import * as z from "zod";

// const send = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'reno@xata.ca',
    to: 'rent@popovych.ca',
    replyTo: 'reno@xata.ca',
    subject: 'hello world',
    html: '<strong>it works!</strong>',
  });

  
//   const sendRouteSchema = z.object({
//     name: z.string().min(2),
//     emailAddress: z.string().email(),
//     // phoneNumber: z.string().min(2),
//     content: z.string().min(2),
//   });


//   const { name, emailAddress, phoneNumber, content } = await req
//   .json()
//   .then((body) => sendRouteSchema.parse(body));

//   const data = await resend.emails.send({
//     from: "from email",
//     to: ["delivery email"],
//     subject: `${name} has a message!`,
//     react: Email({ name,  content, emailAddress }),
//   });

//   await fetch("/api/send", {
//     method: "POST",
//     body: JSON.stringify({
//       name: values.name,
//       emailAddress: values.email,
//       phoneNumber: values.phone,
//       content: values.content,
//     }),
//   });

//   switch (method) {
//     case 'GET': {
//       const data = await resend.emails.send({
//         from: 'bu@resend.dev',
//         to: 'delivered@resend.dev',
//         subject: 'Waitlist',
//         react: Email({ name: 'Bu' }),
//       });

//       res.status(200).send(data);
//       break;
//     }
//     default:
//       res.setHeader('Allow', ['GET']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// };

 
 

// export default send;