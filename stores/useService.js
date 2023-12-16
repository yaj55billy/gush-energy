import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", () => {
	const services = ref([
		{
			id: "service_1",
			title: "申設流程",
			content:
				"申設流程：湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
			iconPath: "index_service_icon1.png",
		},
		{
			id: "service_2",
			title: "光電工程EPC",
			content:
				"光電工程EPC：湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
			iconPath: "index_service_icon2.png",
		},
		{
			id: "service_3",
			title: "施工維運",
			content:
				"施工維運：湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
			iconPath: "index_service_icon3.png",
		},
		{
			id: "service_4",
			title: "電廠投資",
			content:
				"電廠投資：湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
			iconPath: "index_service_icon4.png",
		},
		{
			id: "service_5",
			title: "儲能系統",
			content:
				"儲能系統：湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。",
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
