import { ref, computed } from "vue";

export function useIndexAbout() {
	const aboutData = ref([
		{
			id: "about1",
			title: "湧業能源雲林光電維運案",
			description:
				"湧業能源於2023年7月承攬雲林地區著名製造業工廠13MＷ光電維運案",
			link: "/about",
			path: "index_news_pic1.jpg",
		},
		// {
		// 	id: "about2",
		// 	title: "湧業能源與企業合作2",
		// 	description:
		// 		"湧業能源與電力將會聯手合作，在未來的3年內共同打造5個發電廠，並將整合相關技術以達到2050淨零排碳的目標(2)",
		// 	link: "/about",
		// 	path: "testpic.png",
		// },
	]);
	const aboutDataActive = ref(0);
	const nowAboutData = computed(() => aboutData.value[aboutDataActive.value]);
	const nowAboutTitle = computed(() => nowAboutData.value.title);
	const nowAboutDescription = computed(() => nowAboutData.value.description);
	const nowAboutLink = computed(() => nowAboutData.value.link);
	const nowAboutPath = computed(() => nowAboutData.value.path);
	let aboutTimer = null;
	const changeAboutDataActive = (index) => {
		aboutDataActive.value =
			(index + aboutData.value.length) % aboutData.value.length;
		startAboutTimer();
	};
	const aboutTimerHandler = () => {
		changeAboutDataActive(aboutDataActive.value + 1);
	};
	const startAboutTimer = () => {
		clearTimeout(aboutTimer);
		if (aboutData.value.length > 1) {
			aboutTimer = setTimeout(aboutTimerHandler, 5000);
		}
	};
	const stopAboutTimer = () => {
		clearTimeout(aboutTimer);
	};

	return {
		aboutData,
		aboutDataActive,
		nowAboutData,
		nowAboutTitle,
		nowAboutDescription,
		nowAboutLink,
		nowAboutPath,
		aboutTimer,
		changeAboutDataActive,
		aboutTimerHandler,
		startAboutTimer,
		stopAboutTimer,
	};
}
