<script>
export default {};
</script>

<template>
	<header class="header">
		<!-- overlay -->
		<div class="header__content">
			<NuxtLink to="/" class="header__logo">
				<img src="~/assets/img/logo.png" alt="湧業能源" />
			</NuxtLink>
			<nav class="nav">
				<div class="nav__toggle">
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
					<span class="nav__toggle__line"></span>
				</div>
				<div class="nav__menu">
					<NuxtLink to="/" class="nav__menu__link">首頁</NuxtLink>
					<NuxtLink to="/about" class="nav__menu__link">關於湧業</NuxtLink>
					<NuxtLink to="/service" class="nav__menu__link">服務項目</NuxtLink>
					<NuxtLink to="/case" class="nav__menu__link">實績案例</NuxtLink>
					<NuxtLink to="/contact" class="nav__menu__link">聯絡我們</NuxtLink>
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
