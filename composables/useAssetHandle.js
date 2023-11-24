export function useAssetHandle() {
	const useAsset = (path) => {
    const assetsImg = import.meta.glob("~/assets/img/\*", {
			eager: true,
			import: "default",
		});
		return assetsImg["/assets/img/" + path];
	};
	return {
		useAsset,
	};
}
