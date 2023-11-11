<script setup>
import { ref } from "vue";
import AccordionItem from "@/components/AccordionItem.vue";

const solarEnergyData = ref([
	{
		title: "太陽能發電是否為產生噪音及造成電磁逼的危害問題？",
		content:
			"太陽光電發電系統運轉時並不會產生噪音，即使在屋頂裝置高達2萬瓦的太陽能板，他所產生的電磁波，約僅相當於一台一般家用電器（如家中電腦），遠低於環保署的環境建議，完全符合人體安全規範，使用上並無電磁波危害忍體脂疑慮",
		isOpen: true,
	},
	{
		title: "太陽能發電真的完全無污染嗎？",
		content:
			"Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2Content for section 2",
		isOpen: false,
	},
	{
		title: "太陽能板在水面上對水質會造成污染嗎？",
		content: "Content for section 3",
		isOpen: false,
	},
]);

const toggleItemHandle = (index) => {
	solarEnergyData.value[index].isOpen = !solarEnergyData.value[index].isOpen;
};

// about tab
const currentContent = ref(0);
const changeCurrentHandle = (num) => {
	currentContent.value = num;
};
</script>

<template>
	<div class="page qa">
		<div class="qa__container">
			<h2 class="page__title">常見問題</h2>
			<p class="page__text">還有更多問題嗎？可以看看我們的Q&A問答集</p>
			<div class="qa__content">
				<ul>
					<li
						@click="changeCurrentHandle(0)"
						:class="{ active: currentContent === 0 }"
					>
						太陽能系統設置
					</li>
					<li
						@click="changeCurrentHandle(1)"
						:class="{ active: currentContent === 1 }"
					>
						其他系統
					</li>
					<li
						@click="changeCurrentHandle(2)"
						:class="{ active: currentContent === 2 }"
					>
						其他系統2
					</li>
				</ul>
				<div>
					<section class="tab-content" v-show="currentContent === 0">
						這是內容一<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						quo minus esse velit eveniet perferendis inventore vero ad nisi
						ipsa. Obcaecati veniam fugit atque dolorem laborum dicta labore quia
						deserunt?
						<br />
						<div class="accordion">
							<AccordionItem
								:accordionData="solarEnergyData"
								:toggleItemHandle="toggleItemHandle"
							/>
						</div>
					</section>
					<section class="tab-content" v-show="currentContent === 1">
						22222<br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
						molestias earum accusamus reprehenderit et! Id, eaque omnis rerum
						dolor quis tempora, temporibus impedit blanditiis ducimus, quidem
						debitis cumque fugiat eius.
					</section>
					<section class="tab-content" v-show="currentContent === 2">
						33333<br />
						33333<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
						accusantium tempora reprehenderit quibusdam eius esse corrupti quia
						placeat delectus. Ipsa tempora placeat vero vel excepturi fugit
						quaerat reiciendis unde nemo?
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
