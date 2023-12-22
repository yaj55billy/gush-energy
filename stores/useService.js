import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", () => {
	const services = ref([
		{
			id: "service_1",
			title: "案件申請",
			content:
				"建置光電系統各階段都需取得相關主管機關的核可，包括台電、縣市政府、能源局等。湧業協助評估設置可行性並完成申設流程，確保光電系統順利併聯，客戶順利取得電費收入",
			iconPath: "index_service_icon1.png",
		},
		{
			id: "service_2",
			title: "光電工程EPC",
			content:
				"湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
			iconPath: "index_service_icon2.png",
		},
		{
			id: "service_3",
			title: "案場維運",
			content:
				"專人遠端監控，即時排除異常。定期維運保養，例行檢查設備、量測數值、清潔設備、清洗模組，確保發電系統持續高效運行。",
			iconPath: "index_service_icon3.png",
		},
		{
			id: "service_4",
			title: "電廠投資",
			content:
				"我們致力於發掘和支持具有潛力的太陽能項目，投資未來的綠色能源，共創綠電收益。",
			iconPath: "index_service_icon4.png",
		},
		{
			id: "service_5",
			title: "儲能系統",
			content:
				"因應光電會隨環境變化的間歇特性 儲能系統可扮演緩衝要角，不僅能有效調節電能，為台電提供精準的調度支持，也有助於降低建築物用電契約容量，減少電費及超約費用支出，為您的建築物提供可靠、高效的能源支持。",
			iconPath: "index_service_icon5.png",
		},
	]);

	const activeServiceIndex = ref(0);
	const activeService = computed(
		() => services.value[activeServiceIndex.value]
	);

	const activeServiceChange = (index) => {
		activeServiceIndex.value = index;
	};

	return {
		services,
		activeServiceIndex,
		activeService,
		activeServiceChange,
	};
});
