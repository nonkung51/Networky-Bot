module.exports.carousel = {
	type: 'flex',
	altText: `น้อง Networky สวัสดีจ้า~`,
	contents: {
		type: 'carousel',
		contents: [
			{
				type: 'bubble',
				body: {
					type: 'box',
					layout: 'vertical',
					contents: [
						{
							type: 'image',
							url:
								'https://github.com/nonkung51/Networky-Bot/blob/main/assets/I.png?raw=true',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '1:1',
							gravity: 'top',
							action: {
								type: 'message',
								label: 'action',
								text: 'ประยุทธ์',
							},
						},
					],
					paddingAll: '0px',
				},
			},
			{
				type: 'bubble',
				body: {
					type: 'box',
					layout: 'vertical',
					contents: [
						{
							type: 'image',
							url:
								'https://github.com/nonkung51/Networky-Bot/blob/main/assets/II.png?raw=true',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '1:1',
							gravity: 'top',
							action: {
								type: 'message',
								label: 'action',
								text: 'ประวิทย์',
							},
						},
					],
					paddingAll: '0px',
				},
			},
			{
				type: 'bubble',
				body: {
					type: 'box',
					layout: 'vertical',
					contents: [
						{
							type: 'image',
							url:
								'https://github.com/nonkung51/Networky-Bot/blob/main/assets/III.png?raw=true',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '1:1',
							gravity: 'top',
							action: {
								type: 'message',
								label: 'action',
								text: 'แป้ง!!',
							},
						},
					],
					paddingAll: '0px',
				},
			},
			{
				type: 'bubble',
				body: {
					type: 'box',
					layout: 'vertical',
					contents: [
						{
							type: 'image',
							url:
								'https://github.com/nonkung51/Networky-Bot/blob/main/assets/IV.png?raw=true',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '1:1',
							gravity: 'top',
							action: {
								type: 'message',
								label: 'action',
								text: 'แป้ง!!',
							},
						},
					],
					paddingAll: '0px',
				},
			},
		],
	},
};
