<script setup>
const props = defineProps({
	accordionData: {
		type: Object,
	},
	toggleItemHandle: {
		type: Function,
	},
});

const startTransition = (el) => {
	el.style.height = el.scrollHeight + "px";
};

const endTransition = (el) => {
	el.style.height = "";
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
			<span class="accordion__header__arrow" :class="{ active: item.isOpen }">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
				>
					<path
						d="M22 12L15 19L8 12"
						stroke="white"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
		</div>
		<Transition
			name="accordion-item"
			@enter="startTransition"
			@after-enter="endTransition"
			@before-leave="startTransition"
			@after-leave="endTransition"
		>
			<div class="accordion__body" v-show="item.isOpen">
				<p>{{ item.content }}</p>
				<p v-if="item.paragraph2">{{ item.paragraph2 }}</p>
				<p v-if="item.paragraph3">{{ item.paragraph3 }}</p>
			</div>
		</Transition>
	</section>
</template>

<style scoped lang="sass">
.accordion-item-enter-active, .accordion-item-leave-active
  will-change: height
  transition: height 0.4s ease-in-out

.accordion-item-enter-from, .accordion-item-leave-to
  height: 0 !important
</style>
