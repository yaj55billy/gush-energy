import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", () => {
	const caseData = ref([
		{
			sectionId: "case1",
			buildType: "屋頂平鋪型",
			city: "雲林縣",
			place: "工廠",
			capacity: "13MW",
			indexImagePath: "index_case_pic1.jpg",
			caseImagePath: ["case1.jpg", "case2.jpg"],
			content1:
				"永鑫能源是國內以承攬大規模太陽能電站的知名系統商，也因此成功受到日本三井不動產肯定，成為「Mitsui Outlet Park 台中港」新建工程太陽能電站的唯一太陽能EPC廠商，投資興建屋頂及停車場兩區的太陽能電廠。",
			content2:
				"第二個段落...永鑫能源是國內以承攬大規模太陽能電站的知名系統商，也因此成功受到日本三井不動產肯定，成為「Mitsui Outlet Park 台中港」新建工程太陽能電站的唯一太陽能EPC廠商，投資興建屋頂及停車場兩區的太陽能電廠。",
			content3: "",
		},
		{
			sectionId: "case2",
			buildType: "屋頂棚架型",
			city: "雲林縣",
			place: "工廠",
			capacity: "522.24KW",
			indexImagePath: "index_case_pic2.jpg",
			caseImagePath: ["case2.jpg", "case3.jpg"],
			content1:
				"永鑫能源是國內以承攬大規模太陽能電站的知名系統商，也因此成功受到日本三井不動產肯定，成為「Mitsui Outlet Park 台中港」新建工程太陽能電站的唯一太陽能EPC廠商，投資興建屋頂及停車場兩區的太陽能電廠。",
			content2: "",
			content3: "",
		},
		{
			sectionId: "case3",
			buildType: "屋頂平鋪型",
			city: "高雄市",
			place: "特登工廠",
			capacity: "244.08KW",
			indexImagePath: "index_case_pic3.jpg",
			caseImagePath: ["case3.jpg", "case1.jpg"],
			content1:
				"永鑫能源是國內以承攬大規模太陽能電站的知名系統商，也因此成功受到日本三井不動產肯定，成為「Mitsui Outlet Park 台中港」新建工程太陽能電站的唯一太陽能EPC廠商，投資興建屋頂及停車場兩區的太陽能電廠。",
			content2: "",
			content3: "",
		},
		{
			sectionId: "case4",
			buildType: "屋頂平鋪型",
			city: "高雄市",
			place: "特登工廠",
			capacity: "244.08KW",
			indexImagePath: "index_case_pic3.jpg",
			caseImagePath: ["case3.jpg", "case1.jpg"],
			content1:
				"永鑫能源是國內以承攬大規模太陽能電站的知名系統商，也因此成功受到日本三井不動產肯定，成為「Mitsui Outlet Park 台中港」新建工程太陽能電站的唯一太陽能EPC廠商，投資興建屋頂及停車場兩區的太陽能電廠。",
			content2: "",
			content3: "",
		},
	]);

	return {
		caseData,
	};
});
