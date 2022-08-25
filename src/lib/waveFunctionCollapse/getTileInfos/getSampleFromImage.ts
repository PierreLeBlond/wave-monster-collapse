export default async function getSampleFromImage(imageUrl: string) {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = imageUrl;

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			canvas.width = img.width;
			canvas.height = img.height;

			ctx.drawImage(img, 0, 0);

			const rgba = ctx.getImageData(0, 0, img.width, img.height).data;

			const paletteMap: { [key: string]: number } = {};

			const sample = Array.from(Array(img.width), () => Array(img.height));

			const palette = [];

			for (let i = 0; i < img.width * img.height; i++) {
				const colorString = `rgb(${rgba[4 * i]}, ${rgba[4 * i + 1]}, ${rgba[4 * i + 2]})`;

				let paletteIndex = paletteMap[colorString];

				if (paletteIndex == undefined) {
					paletteIndex = palette.length;
					palette.push(colorString);
					paletteMap[colorString] = paletteIndex;
				}

				sample[i % img.width][Math.floor(i / img.width)] = paletteIndex;
			}

			const withBorders = false;
			if (withBorders) {
				const sampleWidth = img.width + 2;
				const sampleHeight = img.height + 2;

				const sampleWithBorder = Array.from(Array(sampleWidth), () => Array(sampleHeight));

				const borderIndex = palette.length;
				palette.push('rgb(0, 0, 0)');

				for (let i = 0; i < sampleWidth; i++) {
					sampleWithBorder[i][0] = borderIndex;
					sampleWithBorder[i][sampleHeight - 1] = borderIndex;
				}

				for (let i = 0; i < sampleHeight; i++) {
					sampleWithBorder[0][i] = borderIndex;
					sampleWithBorder[sampleHeight - 1][i] = borderIndex;
				}

				for (let i = 0; i < img.width; i++) {
					for (let j = 0; j < img.height; j++) {
						sampleWithBorder[i + 1][j + 1] = sample[i][j];
					}
				}
			}

			resolve({ sample, palette });
		};
	});
}
