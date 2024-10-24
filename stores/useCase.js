import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", () => {
	const caseData = ref([
		{
			sectionId: "case1",
			buildType: "屋頂平鋪型",
			city: "高雄市岡山區",
			place: "特登工廠",
			capacity: "244.08KW",
			indexImagePath: "index_case_pic1.jpg",
			caseImagePath: ["case1_1.jpg", "case1_2.jpg", "case1_3.jpg"],
			content1: "每年發電量 329,630 度",
			content2: "每年減碳量 165 噸",
			content3: "相當於每年種 16,482 棵樹",
		},
		{
			sectionId: "case2",
			buildType: "屋頂平鋪型",
			city: "高雄市岡山區",
			place: "工廠",
			capacity: "393.12KW",
			indexImagePath: "index_case_pic2.jpg",
			caseImagePath: ["case2_1.jpg", "case2_2.jpg", "case2_3.jpg"],
			content1: "每年發電量 530,909 度",
			content2: "每年減碳量 265 噸",
			content3: "相當於每年種 26,545 棵樹",
		},
		{
			sectionId: "case3",
			buildType: "屋頂平鋪型",
			city: "台南市官田區",
			place: "工廠",
			capacity: "487.92KW",
			indexImagePath: "index_case_pic3.jpg",
			caseImagePath: ["case3_1.jpg", "case3_2.jpg"],
			content1: "每年發電量 634,029 度",
			content2: "每年減碳量 317 噸",
			content3: "相當於每年種 31,701 棵樹",
		},
	]);

	return {
		caseData,
	};
});
