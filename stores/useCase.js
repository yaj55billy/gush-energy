import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", () => {
	const caseData = ref([
		{
			sectionId: "case1",
			buildType: "屋頂平鋪型",
			city: "高雄市岡山區",
			place: "特登工廠",
			capacity: "13MW",
			indexImagePath: "index_case_pic1.jpg",
			caseImagePath: ["case1.jpg", "case2.jpg"],
			content1: "每年發電量 XX 度",
			content2: "每年減碳量 XX 度",
			content3: "相當於每年種 XX 棵樹",
		},
		{
			sectionId: "case2",
			buildType: "屋頂棚架型",
			city: "高雄市岡山區",
			place: "特登工廠",
			capacity: "522.24KW",
			indexImagePath: "index_case_pic2.jpg",
			caseImagePath: ["case2.jpg", "case3.jpg"],
			content1: "每年發電量 XX 度",
			content2: "每年減碳量 XX 度",
			content3: "相當於每年種 XX 棵樹",
		},
		{
			sectionId: "case3",
			buildType: "屋頂平鋪型",
			city: "高雄市",
			place: "特登工廠",
			capacity: "244.08KW",
			indexImagePath: "index_case_pic3.jpg",
			caseImagePath: ["case3.jpg", "case1.jpg"],
			content1: "每年發電量 XX 度",
			content2: "每年減碳量 XX 度",
			content3: "相當於每年種 XX 棵樹",
		},
		{
			sectionId: "case4",
			buildType: "屋頂平鋪型",
			city: "高雄市",
			place: "特登工廠",
			capacity: "244.08KW",
			indexImagePath: "index_case_pic3.jpg",
			caseImagePath: ["case3.jpg", "case1.jpg"],
			content1: "每年發電量 200 度",
			content2: "每年減碳量 XX 度",
			content3: "相當於每年種 XX 棵樹",
		},
	]);

	return {
		caseData,
	};
});
