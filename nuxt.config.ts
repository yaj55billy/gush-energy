// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// "runtimeConfig": {
	//   "public": {
	//     "apiCardBase": process.env.NODE_ENV === 'production' ? '/gush-energy/' : '/',
	//   }
	// },
	app: {
		baseURL: process.env.NODE_ENV === "production" ? "/gush-energy/" : "/",
		// buildAssetsDir: '/static/',
		head: {
			viewport:
				"width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
			title: "",
			meta: [
				{ charset: "utf-8" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "description", content: "" },
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "" },
				{ property: "og:title", content: "" },
				{ property: "og:description", content: "" },
				{ property: "og:image", content: "" },
				{ property: "og:url", content: "" },
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&display=swap",
				},
			],
		},
	},
	css: ["@/assets/styles/main.sass"],
	imports: {
		dirs: ["stores"],
	},
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"],
			},
		],
	],

	devtools: { enabled: true },
});
