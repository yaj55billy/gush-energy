<script setup>
const aboutFeaturesActive = ref(0);
const changeActive = (num) => {
	aboutFeaturesActive.value = num;
};
</script>

<template>
	<div class="page about">
		<PageKv
			title="關於我們"
			text="還有更多問題嗎？可以看看我們的Q&A問答集"
			picPath="qa_kv.jpg"
		/>
		<section class="about__vision">
			<div class="about__vision__container"></div>
		</section>
		<section class="about__features">
			<div class="about__features__container">
				<div class="about__features__content">
					<ul class="about__features__head">
						<li
							class="about__features__headitem"
							@click="changeActive(0)"
							@mouseenter="changeActive(0)"
						>
							<span>1</span>
							<span>經驗豐富</span>
						</li>
						<li
							class="about__features__headitem"
							@click="changeActive(1)"
							@mouseenter="changeActive(1)"
						>
							<span>2</span>
							<span>資源整合</span>
						</li>
						<li
							class="about__features__headitem"
							@click="changeActive(2)"
							@mouseenter="changeActive(2)"
						>
							<span>3</span>
							<span>深耕地方</span>
						</li>
						<li
							class="about__features__headitem"
							@click="changeActive(3)"
							@mouseenter="changeActive(3)"
						>
							<span>4</span>
							<span>專業採購</span>
						</li>
					</ul>
					<div class="about__features__body">
						<div v-show="aboutFeaturesActive === 0">
							<h4>內容一</h4>
							<p>
								11111<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur commodi laudantium dolorem aliquam quasi illum
								voluptates, ipsum saepe! Ducimus sed minima similique obcaecati
								placeat voluptatem cumque neque quo eveniet est?
							</p>
						</div>
						<div v-show="aboutFeaturesActive === 1">
							<h4>內容二</h4>
							<p>
								22222<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur commodi laudantium dolorem aliquam quasi illum
								voluptates, ipsum saepe! Ducimus sed minima similique obcaecati
								placeat voluptatem cumque neque quo eveniet est?
							</p>
						</div>
						<div v-show="aboutFeaturesActive === 2">
							<h4>內容三</h4>
							<p>
								33333<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur commodi laudantium dolorem aliquam quasi illum
								voluptates, ipsum saepe! Ducimus sed minima similique obcaecati
								placeat voluptatem cumque neque quo eveniet est?
							</p>
						</div>
						<div v-show="aboutFeaturesActive === 3">
							<h4>內容四</h4>
							<p>
								44444<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur commodi laudantium dolorem aliquam quasi illum
								voluptates, ipsum saepe! Ducimus sed minima similique obcaecati
								placeat voluptatem cumque neque quo eveniet est?
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="about__cooperate">
			<div class="about__cooperate__container"></div>
		</section>
	</div>
	<!-- <div
		style="min-height: 2000px; padding-top: 200px; background-color: aquamarine"
	>
		<h3>1</h3>
		<h3>2</h3>
		<h3>3</h3>
		<h3>4</h3>
	</div> -->
</template>

<style scoped>
h3 {
	/* font-size: 2em;
	color: #445870;
	-webkit-text-stroke: 2px #ddd;
	text-stroke: 2px #ddd; */
	font-size: 40px;
	text-shadow: 0 0 2px black;
	color: aquamarine;
}
</style>
