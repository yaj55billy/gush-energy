import { ref, computed } from "vue";

export function useIndexKv() {
	const kvData = ref([
		{
			id: "kv1",
			path: "kv.jpg",
		},
		{
			id: "kv2",
			path: "kv_temp1.jpg",
		},
		{
			id: "kv3",
			path: "kv_temp2.jpg",
		},
	]);
	const kvDataActive = ref(0);
	const nowKvData = computed(() => kvData.value[kvDataActive.value]);
	const nowKvPath = computed(() => nowKvData.value.path);
	let kvTimer = null;
	const changeKvDataActive = (index) => {
		kvDataActive.value = (index + kvData.value.length) % kvData.value.length;
		startKvTimer();
	};
	const kvTimerHandler = () => {
		changeKvDataActive(kvDataActive.value + 1);
		startKvTimer();
	};
	const startKvTimer = () => {
		clearTimeout(kvTimer);
		kvTimer = setTimeout(kvTimerHandler, 5000);
	};

	return {
		kvData,
		kvDataActive,
		nowKvData,
		nowKvPath,
		kvTimer,
		changeKvDataActive,
		kvTimerHandler,
		startKvTimer,
	};
}
