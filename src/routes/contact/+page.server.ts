/** @satisfies {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';
import {sendMail} from "$lib/components/SendEmail.js"

export const prerender = false;

export const actions = {
 	login: async (event) => {
		// TODO log the user in
	},
	contactus: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		console.log("**********************************************************************");
		console.log("here...", data)
		console.log("**********************************************************************");

		if (!name) {
			return fail(400, { name, empty: true });
		}
		if (!email) {
			return fail(400, { email, missing: true });
		}
		
		sendMail();
		

		cookies.set('syntez', "syntez", { path: '/' });

		return { success: true };
	},
		
};
 