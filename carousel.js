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
								'https://www.khaosodenglish.com/wp-content/uploads/2019/06/AP19157246924854.jpg',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '2:3',
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
								'https://static.bangkokpost.com/media/content/20181227/c1_1601718.jpg',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '2:3',
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
								'https://www.brighttv.co.th/wp-content/uploads/2020/02/Tammanus-Drug-trafficking.jpg.webp',
							size: 'full',
							aspectMode: 'cover',
							aspectRatio: '2:3',
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
