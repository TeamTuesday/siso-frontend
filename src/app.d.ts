// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			Auth: {
				Tref: HTMLInputElement | null,
				TEmail: string,
				TPassword: string,
				TConfirmPassword: string,
				Iinput: {
					value: string,
					ref: Tref,
				}
			},
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};