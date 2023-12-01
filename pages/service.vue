<script setup>
import { useAssetHandle } from "@/composables/useAssetHandle.js";

const { useAsset } = useAssetHandle();
</script>

<template>
	<div class="page service">
		<PageKv
			title="服務項目"
			text="湧業為您提供專業的光電整合服務，伴您與綠能未來同行"
			picPath="qa_kv.jpg"
		/>
		<section class="service__info">
			<div class="service__info__container">
				<!-- <h2 class="page__title"></h2> -->
				<ul class="service__info__list">
					<li class="service__info__item">
						<div class="service__info__pic">
							<!-- <img src="~/assets/img" alt="" /> -->
						</div>
						<!-- 架構需再觀望 -->
						<h4 class="service__info__itemtitle">案件申請</h4>
						<p class="service__info__itemtext">
							建置光電系統各階段都需取得相關主管機關的核可，包括台電、縣市政府、能源局等。湧業協助評估設置可行性並完成申設流程，確保光電系統順利併聯，客戶順利取得電費收入
						</p>
					</li>
					<li class="service__info__item">
						<div class="service__info__pic">
							<!-- <img src="~/assets/img" alt="" /> -->
						</div>
						<h4 class="service__info__itemtitle">光電工程EPC</h4>
						<p class="service__info__itemtext">
							湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。
						</p>
					</li>
					<li class="service__info__item">
						<div class="service__info__pic">
							<!-- <img src="~/assets/img" alt="" /> -->
						</div>
						<h4 class="service__info__itemtitle">案場維運</h4>
						<p class="service__info__itemtext">
							專人遠端監控，即時排除異常。定期維運保養，例行檢查設備、量測數值、清潔設備、清洗模組，確保發電系統持續高效運行。
						</p>
					</li>
					<li class="service__info__item">
						<div class="service__info__pic">
							<!-- <img src="~/assets/img" alt="" /> -->
						</div>
						<h4 class="service__info__itemtitle">電廠投資</h4>
						<p class="service__info__itemtext">
							我們致力於發掘和支持具有潛力的太陽能項目，投資未來的綠色能源，共創綠電收益。
						</p>
					</li>
					<li class="service__info__item">
						<div class="service__info__pic">
							<!-- <img src="~/assets/img" alt="" /> -->
						</div>
						<h4 class="service__info__itemtitle">儲能系統</h4>
						<p class="service__info__itemtext">
							因應光電會隨環境變化的間歇特性
							儲能系統可扮演緩衝要角，不僅能有效調節電能，為台電提供精準的調度支持，也有助於降低建築物用電契約容量，減少電費及超約費用支出，為您的建築物提供可靠、高效的能源支持。
						</p>
					</li>
				</ul>
			</div>
		</section>
		<section class="service__epc">
			<div class="service__epc__container">
				<div class="service__epc__info">
					<h2 class="page__title service__epc__title">光電工程EPC</h2>
					<p class="service__epc__text">
						湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。
					</p>
				</div>
			</div>
		</section>

		<section class="service__apply">
			<div class="service__apply__container">
				<h2 class="page__title">申請流程</h2>
				<div class="service__apply__content">
					<svg
						class="service__apply__line"
						xmlns="http://www.w3.org/2000/svg"
						width="479"
						height="472"
						viewBox="0 0 479 472"
						fill="none"
					>
						<path
							opacity="0.35"
							d="M40.5002 25C56.6669 63 107.4 103.1 237 57.5001C399 0.500061 360 -20.9999 463 31.0001C566 83.0001 89.0002 100 28.5002 223.5C-31.9998 347 375 219 282.5 240C190 261 546.5 213.5 466.5 250.5C386.5 287.5 -82.9998 413 14.0002 455.5C111 498 226 441 251 441C276 441 414 470 459 441"
							stroke="white"
							stroke-dasharray="2 2"
						/>
					</svg>
					<ul class="service__apply__list">
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon1.png" alt="" />
								</div>
								<span class="service__apply__num">1</span>
							</div>
							<h5 class="service__apply__head">現地勘查</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">2</span>
							</div>
							<h5 class="service__apply__head">設計規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">3</span>
							</div>
							<h5 class="service__apply__head">簽約</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">4</span>
							</div>
							<h5 class="service__apply__head">施工規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">5</span>
							</div>
							<h5 class="service__apply__head">工程施工</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">6</span>
							</div>
							<h5 class="service__apply__head">併聯掛錶</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">7</span>
							</div>
							<h5 class="service__apply__head">O&M</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">8</span>
							</div>
							<h5 class="service__apply__head">驗收</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<!-- <img src="~/assets/img" alt=""> -->
								</div>
								<span class="service__apply__num">9</span>
							</div>
							<h5 class="service__apply__head">保固維運</h5>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="service__work">
			<div class="service__work__container">
				<h2 class="page__title service__work__title">施工維運</h2>
				<p class="service__work__text">
					選用一級廠設備及材料，支架設計經結構技師出具結構計算書及簽證，確保安全性。透過優化器精準監測每片模組發電狀況。監控系統提供即時數據分析，自動彙整各式報告，專職維運人員監看案場，即時發現問題，解決問題。
				</p>
				<div class="service__work__video">
					<video width="320" height="240">
						<source src="service_work.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	</div>
</template>

<style></style>
