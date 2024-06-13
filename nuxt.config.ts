// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// "runtimeConfig": {
	//   "public": {
	//     "apiCardBase": process.env.NODE_ENV === 'production' ? '/gush-energy/' : '/',
	//   }
	// },
	app: {
		baseURL: process.env.NODE_ENV === "production" ? "/" : "/",
		head: {
			viewport:
				"width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0",
			title: "湧業能源 GUSH ENERGY",
			meta: [
				{ charset: "utf-8" },
				{ name: "format-detection", content: "telephone=no" },
				{
					name: "description",
					content:
						"湧業能源成立於2020年，主力太陽能系統建置與投資開發之相關領域。致力於以太陽能光電協助企業邁向永續能源轉型，為台灣2050年淨零排碳目標盡一份心力。我們為業主提供可靠、永續的全方位光電解決方案，公司經營項目包含：光電工程EPC、電廠維運管理、電廠投資以及儲能系統規劃建置。為台灣打造乾淨永續的綠能未來。",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "湧業能源 GUSH ENERGY" },
				{ property: "og:title", content: "湧業能源 GUSH ENERGY" },
				{
					property: "og:description",
					content:
						"湧業能源成立於2020年，主力太陽能系統建置與投資開發之相關領域。致力於以太陽能光電協助企業邁向永續能源轉型，為台灣2050年淨零排碳目標盡一份心力。我們為業主提供可靠、永續的全方位光電解決方案，公司經營項目包含：光電工程EPC、電廠維運管理、電廠投資以及儲能系統規劃建置。為台灣打造乾淨永續的綠能未來。",
				},
				{ property: "og:image", content: "~/assets/img/meta.jpg" },
				{ property: "og:url", content: "https://www.gush-energy.com" },
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
		"nuxt-swiper",
	],
	devtools: { enabled: true },
});
