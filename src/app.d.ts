// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	declare namespace App {
		// interface Locals {}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*.svelte' {
	interface ComponentOptions {
		target: HTMLElement;
		anchor?: HTMLElement | null;
		props?: any;
		hydrate?: boolean;
		intro?: boolean;
	}

	interface Component {
		new (options: ComponentOptions): any;
		// client-side methods
		$set(props: any): void;
		$on(event: string, callback: (event: CustomEvent) => void): void;
		$destroy(): void;

		// server-side methods
		render(props?: any): {
			html: string;
			css: {code: string; map: string | null};
			head?: string;
		};
	}

	const component: Component;
	export {SvelteComponent as default};
}
