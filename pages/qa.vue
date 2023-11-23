<script setup>
import { ref } from "vue";
import AccordionItem from "@/components/AccordionItem.vue";
import PageKv from "@/components/PageKv.vue";

const solarEnergyData = ref([
	{
		title: "建置太陽能發電系統有什麼好處？",
		content:
			"設置太陽能發電系統具有多重好處，包括降低室內溫度、利用閒置空間獲取實質收入、減少碳足跡、提高企業形象等。",
		paragraph2:
			"躉售投資： 若與台電簽約20年，您將擁有持續穩定的年收益，通常可達8~12%的獲利，這是一個具有長期投資價值的選擇。",
		paragraph3:
			"自發自用： 太陽能系統提高了能源供應的可靠性，確保您在停電或緊急情況下仍能供應電力。同時，透過使用太陽能，您有助於減少碳排放，落實具體的減碳行動。",
		isOpen: true,
	},
	{
		title: "台灣地震、颱風多，建置太陽能系統真的安全嗎？",
		content:
			"我們在每個案場的設計階段都經過結構技師簽證、計算評估，以確認系統的結構和設備的安全性，這有助於保護系統不受損害，確保運行的安全性。",
		isOpen: false,
	},
	{
		title: "廢棄的太陽能板如何處理？",
		content:
			"太陽能板本身並不具有毒性，其原材料包括玻璃、矽砂、金屬及少量的塑膠，不會造成土地或水質汙染。我們將依循「廢棄物清理法」，根據合法流程進行廢太陽能板回收清除處理，確保符合環保標準。",
		isOpen: false,
	},
	{
		title: "太陽能系統的發電效率是否會隨時間而下降？",
		content:
			"是的，但根據目前太陽能板的製造技術來看，即便太陽能板使用了20年，在正常維運管理下，其發電效率還是能維持在80%以上。",
		isOpen: false,
	},
	{
		title: "太陽能系統的建置需要多長時間？",
		content:
			"建置時間會因案場規模而異，大案場通常需要數個月完成，而小案場可能僅需數周。我們將根據具體項目的需求提供預估的建置時間。",
		isOpen: false,
	},
	{
		title: "是否提供太陽能系統的保固？",
		content:
			"大多數太陽能發電模組產品的保固是20年以上，而直流轉交流的變流器產品保固期則為5年左右。",
		isOpen: false,
	},
	{
		title: "太陽能發電系統如何有助於減少碳足跡？",
		content:
			"太陽能發電系統於使用時完全無汙染、無噪音，對生態環境的影響極小。雖然太陽能板在製造過程中，會產生工業廢水及廢氣，若工廠依法做好污染防治，就可將對環境的影響降到最低。並且，相較於傳統的燃煤火力發電，太陽能發電可減少90%以上的空氣汙染及碳排。",
		isOpen: false,
	},
]);

const toggleItemHandle = (index) => {
	solarEnergyData.value[index].isOpen = !solarEnergyData.value[index].isOpen;
};

// tab
const qaCurrentContent = ref(1);
const changeQaCurrentHandle = (num) => {
	qaCurrentContent.value = num;
};
</script>

<template>
	<div class="page qa">
		<PageKv
			title="常見問題"
			text="還有更多問題嗎？可以看看我們的Q&A問答集"
			picPath="qa_kv.jpg"
		/>
		<div class="qa__container">
			<div class="qa__content">
				<ul class="qa__content__head">
					<li
						@click="changeQaCurrentHandle(1)"
						:class="{ active: qaCurrentContent === 1 }"
						class="qa__content__headitem"
					>
						太陽能系統設置
					</li>
					<li
						@click="changeQaCurrentHandle(2)"
						:class="{ active: qaCurrentContent === 2 }"
						class="qa__content__headitem"
					>
						其他系統
					</li>
					<li
						@click="changeQaCurrentHandle(3)"
						:class="{ active: qaCurrentContent === 3 }"
						class="qa__content__headitem"
					>
						其他系統
					</li>
					<li
						@click="changeQaCurrentHandle(4)"
						:class="{ active: qaCurrentContent === 4 }"
						class="qa__content__headitem"
					>
						其他系統
					</li>
				</ul>
				<div class="qa__content__body">
					<section
						class="qa__content__bodysection"
						v-show="qaCurrentContent === 1"
					>
						<div class="accordion">
							<AccordionItem
								:accordionData="solarEnergyData"
								:toggleItemHandle="toggleItemHandle"
							/>
						</div>
					</section>
					<section
						class="qa__content__bodysection"
						v-show="qaCurrentContent === 2"
					>
						<div style="margin-top: 30px">
							<h2 class="page__title">內容2</h2>
							<p class="page__text">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Inventore velit veniam minus, iste nihil quas quibusdam, dicta
								nisi omnis saepe sequi minima. Facilis, earum modi voluptate
								quas reprehenderit non laboriosam!
							</p>
						</div>
					</section>
					<section
						class="qa__content__bodysection"
						v-show="qaCurrentContent === 3"
					>
						<div style="margin-top: 30px">
							<h2 class="page__title">內容3</h2>
							<p class="page__text">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Inventore velit veniam minus, iste nihil quas quibusdam, dicta
								nisi omnis saepe sequi minima. Facilis, earum modi voluptate
								quas reprehenderit non laboriosam!
							</p>
						</div>
					</section>
					<section
						class="qa__content__bodysection"
						v-show="qaCurrentContent === 4"
					>
						<div style="margin-top: 30px">
							<h2 class="page__title">內容4</h2>
							<p class="page__text">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Inventore velit veniam minus, iste nihil quas quibusdam, dicta
								nisi omnis saepe sequi minima. Facilis, earum modi voluptate
								quas reprehenderit non laboriosam!
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
