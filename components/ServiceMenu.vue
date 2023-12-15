<script setup>
const route = useRoute();
console.log(route.name);
if (route.name === "index") {
	console.log("首頁");
}
if (route.name === "service") {
	console.log("服務項目");
}
</script>

<template>
	<ul class="service__list">
		<li class="service__item">
			<div class="service__itempic">
				<img src="~/assets/img/index_service_icon1.png" alt="申設流程" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">申設流程</h3>
			</div>
			<NuxtLink to="/service" class="service__itemlink"></NuxtLink>
		</li>
		<li class="service__item">
			<div class="service__itempic">
				<img src="~/assets/img/index_service_icon2.png" alt="光電工程EPC" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">光電工程EPC</h3>
			</div>
			<NuxtLink to="/service" class="service__itemlink"></NuxtLink>
		</li>
		<li class="service__item">
			<div class="service__itempic">
				<img src="~/assets/img/index_service_icon3.png" alt="施工維運" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">施工維運</h3>
			</div>
			<NuxtLink to="/service" class="service__itemlink"></NuxtLink>
		</li>
		<li class="service__item">
			<div class="service__itempic">
				<img src="~/assets/img/index_service_icon4.png" alt="電廠投資" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">電廠投資</h3>
			</div>
			<NuxtLink to="/service" class="service__itemlink"></NuxtLink>
		</li>
		<li class="service__item">
			<div class="service__itempic">
				<img src="~/assets/img/index_service_icon5.png" alt="儲能系統" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">儲能系統</h3>
			</div>
			<NuxtLink to="/service" class="service__itemlink"></NuxtLink>
		</li>
	</ul>
</template>

<style></style>
