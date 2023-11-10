<script setup>
import { ref, computed, onMounted } from "vue";

const form = ref({
	name: "",
	mobile: "",
	email: "",
	content: "",
});
const handleSubmit = () => {
	const name = "姓名: " + encodeURIComponent(form.value.name);
	const mobile = "聯繫電話: " + encodeURIComponent(form.value.mobile);
	const email = "電子信箱: " + encodeURIComponent(form.value.email);
	const content = "內容: " + encodeURIComponent(form.value.content);

	const mailtoLink = `mailto:yaj55ushydna@gmail.com?subject=新的聯繫表單提交&body=${name}%0A${mobile}%0A${email}%0A${content}`;
	console.log(mailtoLink);

	window.location.href = mailtoLink;
};
</script>

<template>
	<div class="page contact">
		<div class="contact__container">
			<h2 class="page__title">請填寫聯繫表單</h2>
			<p class="page__text">
				若你對我們有何想法或建議，歡迎連寫下方資訊供我們聯繫您
			</p>
			<!-- 
        表單程式 html5  
        表單送出 mailto
      -->
			<form @submit.prevent="handleSubmit" class="contact__form">
				<div class="contact__form__content">
					<div class="contact__form__col">
						<div class="form__item">
							<label for="" class="form__label">姓名</label>
							<input
								type="text"
								class="form__control"
								placeholder="請輸入姓名"
								v-model="form.name"
							/>
						</div>
						<div class="form__item">
							<label for="" class="form__label">聯繫電話</label>
							<input
								type="text"
								class="form__control"
								placeholder="請輸入聯繫電話"
								v-model="form.mobile"
							/>
						</div>
						<div class="form__item">
							<label for="" class="form__label">電子信箱</label>
							<input
								type="text"
								class="form__control"
								placeholder="請輸入電子信箱"
								v-model="form.email"
							/>
						</div>
					</div>
					<div class="contact__form__col">
						<div class="form__item">
							<label for="" class="form__label">內容</label>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								class="form__control"
								placeholder="請在此輸入內容"
								v-model="form.content"
							></textarea>
						</div>
					</div>
				</div>
				<div class="form__btn">
					<button type="submit" class="btn">深入了解</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style></style>
