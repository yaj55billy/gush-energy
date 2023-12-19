export const useCommon = () => {
	const isMobileDevice = () => {
		let mobileDevices = [
			"Android",
			"webOS",
			"iPhone",
			"iPad",
			"iPod",
			"BlackBerry",
			"Windows Phone",
		];
		for (var i = 0; i < mobileDevices.length; i++) {
			if (navigator.userAgent.match(mobileDevices[i])) {
				return true;
			}
		}
		return false;
	};

	const scrollToTarget = (targetElement) => {
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	return { isMobileDevice, scrollToTarget };
};
