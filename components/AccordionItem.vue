<script setup>
const props = defineProps({
	accordionData: {
		type: Object,
	},
	toggleItemHandle: {
		type: Function,
	},
});
const beforeEnter = (el) => {
	el.style.height = "0";
};
const enter = (el) => {
	el.style.height = el.scrollHeight + "px";
};
const beforeLeave = (el) => {
	el.style.height = el.scrollHeight + "px";
};
const leave = (el) => {
	el.style.height = "0";
};
</script>

<template>
	<section
		class="accordion__item"
		v-for="(item, index) in props.accordionData"
		:key="item.title"
	>
		<div class="accordion__header" @click="props.toggleItemHandle(index)">
			<h5 class="accordion__header__text">
				{{ item.title }}
			</h5>
			<span class="accordion__header__arrow"></span>
		</div>
		<Transition
			name="slide"
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave"
		>
			<div class="accordion__body" v-show="item.isOpen">
				<p>
					{{ item.content }}
				</p>
			</div>
		</Transition>
	</section>
</template>

<style scoped lang="sass">
.slide-enter-active,.slide-leave-active
  transition: all 0.4s ease-in-out

.slide-enter-from,.slide-leave-to
  opacity: 0

.slide-enter-to,.slide-leave-from
  opacity: 1
</style>
