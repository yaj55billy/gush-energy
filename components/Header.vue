<script setup>
import { ref, computed, onMounted } from "vue";
const route = useRoute();
const headerActive = ref(false);

const pagePathHandle = () => {
	if (route.path === "/") {
		// console.log("首頁");
		headerActive.value = false; // 預設
		window.addEventListener("scroll", scrollHandle, true);
	} else {
		// console.log("其他頁面");
		headerActive.value = true;
		window.removeEventListener("scroll", scrollHandle, true);
	}
};

const scrollHandle = () => {
	const wsY = window.scrollY;
	if (wsY > 50) {
		headerActive.value = true;
	} else {
		headerActive.value = false;
	}
};

const isOpen = ref(false);
const navMenuToggle = () => {
	isOpen.value = !isOpen.value;
};

watch(
	() => route.path,
	(newPath, oldPath) => {
		pagePathHandle();
	}
);

onMounted(() => {
	pagePathHandle();
});

onUnmounted(() => {
	window.removeEventListener("scroll", scrollHandle, true);
});
</script>

<template>
	<header class="header" :class="{ 'scroll-active': headerActive }">
		<!-- overlay -->
		<div class="header__content">
			<NuxtLink to="/" class="header__logo">
				<img
					class="header__logo--origin"
					src="~/assets/img/logo.png"
					alt="湧業能源"
				/>
				<img
					class="header__logo--active"
					src="~/assets/img/logo_active.png"
					alt="湧業能源"
				/>
			</NuxtLink>
			<nav class="nav">
				<div
					class="nav__toggle"
					:class="{ active: isOpen }"
					@click="navMenuToggle"
				>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
				</div>
				<div
					class="nav__menu"
					:class="{ active: isOpen }"
					@click="navMenuToggle"
				>
					<ul class="nav__menu__list">
						<li class="nav__menu__item">
							<NuxtLink to="/" class="nav__menu__link">首頁</NuxtLink>
						</li>
						<li class="nav__menu__item">
							<NuxtLink to="/about" class="nav__menu__link">關於湧業</NuxtLink>
						</li>
						<li class="nav__menu__item">
							<NuxtLink to="/service" class="nav__menu__link"
								>服務項目</NuxtLink
							>
						</li>
						<li class="nav__menu__item">
							<NuxtLink to="/" class="nav__menu__link">實績案例</NuxtLink>
						</li>
						<li class="nav__menu__item">
							<NuxtLink to="/contact" class="nav__menu__link"
								>聯絡我們</NuxtLink
							>
						</li>
						<li class="nav__menu__item">
							<NuxtLink to="/qa" class="nav__menu__link">常見問題</NuxtLink>
						</li>
					</ul>
					<!-- @mouseover="mouseover" -->
					<!-- <div class="nav__submenu">
            <div class="nav__submenu__head">服務項目</div>
            <div class="nav__submenu__body">
              <NuxtLink>xxx</NuxtLink>
              <NuxtLink>xxx</NuxtLink>
            </div>
          </div> -->
				</div>
			</nav>
		</div>
	</header>
</template>

<style></style>
