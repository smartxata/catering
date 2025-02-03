/** @satisfies {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';
// import {sendMail} from "$lib/components/SendEmail.js"
 import { z } from 'zod'
 
const contactSchema = z.object({
	name: z
    .string({ invalid_type_error: 'invalid name', required_error: 'invalid name' })
    .min(5, { message: 'Must be 5 or more characters long. You may try to type official name.' })
    .max(256, { message: 'name can not be more than 256 letters' }),
		email: z.string({ invalid_type_error: 'invalid email' }).email({ message: 'invalid email' }).max(320, { message: 'email can not be more than 320 letters' }),
		comment: z.string().optional()
})
 
  type Contact = z.infer<typeof contactSchema>
  type ContactErrors = z.inferFormattedError<typeof contactSchema>
 

export const prerender = false;

export const actions = {
 	login: async (event) => {
		// TODO log the user in
	},
	contactus: async ({ cookies, request }) => {
		const formDataa = Object.fromEntries(await request.formData());
		const talentData = contactSchema.safeParse(formDataa);
		console.log(talentData);
		if (!talentData.success) {
			// Loop through the errors array and create a custom errors array
			const errors = talentData.error.errors.map((error) => {
			  return {
				field: error.path[0],
				message: error.message
			  };
			});
			console.log(errors);
			return fail(400, { error: true, errors });
		  }
 
		 sendMail();
		

		cookies.set('syntez', "syntez", { path: '/' });

		return { success: true };
	},
		
};
 