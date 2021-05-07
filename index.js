const express = require('express');
const bodyParser = require('body-parser');

const reply = require('./reply');
const push = require('./push');

const { carousel } = require('./carousel');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
	let replyToken = req.body.events[0].replyToken;
	let userId = req.body.events[0].source.userId;
	let event = req.body.events[0];

	if (event.type == 'message') {
		switch (event.message.text) {
			case 'เริ่มต้น':
				await push(userId, {
					type: 'text',
					text:
						'นี่คือสิ่งที่เกิดขึ้นเมื่อคุณป้อนเว็บไซต์ลงบน Searchbar',
				});
				await push(userId, carousel);
				break;
			case 'DNS คืออะไร?':
				await push(userId, {
					type: 'text',
					text:
						'ลองดูคลิปนี้ดูสิ https://youtu.be/9Gmv0dqxITs :-D',
				});
				await push(userId, {
					type: 'text',
					text:
						'หรือจะลองอ่านบทความนี้ดูก็ได้นะ https://tomkabtokom.medium.com/dns-server-4efc7648a842',
				});
				break;
			case 'TCP คืออะไร?':
				await push(userId, {
					type: 'text',
					text:
						'ลองดูคลิปนี้ดูสิ https://youtu.be/fR49RMo_IJo :-D',
				});
				await push(userId, {
					type: 'text',
					text:
						'หรือจะลองอ่านบทความนี้ดูก็ได้นะ https://www.blockdit.com/posts/6093d70e5912cc0c5a32dfff',
				});
				break;
			case 'Fragmentation คืออะไร?':
				await push(userId, {
					type: 'text',
					text:
						'ลองดูคลิปนี้ดูสิ https://youtu.be/DY0AIwgtrmo :-D',
				});
				await push(userId, {
					type: 'text',
					text:
						'หรือจะลองอ่านบทความนี้ดูก็ได้นะ https://in-spaymax.medium.com/network-layer-%E0%B9%80%E0%B9%80%E0%B8%A5%E0%B8%B0-fragmentation-333704c06861',
				});
				break;
			case 'HTTP คืออะไร?':
				await push(userId, {
					type: 'text',
					text:
						'ลองดูคลิปนี้ดูสิ https://youtu.be/AuNWaSYB4zg :-D',
				});
				await push(userId, {
					type: 'text',
					text:
						'หรือจะลองอ่านบทความนี้ดูก็ได้นะ https://nontapan.medium.com/http-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-17c63540b7ea',
				});
				break;
			case 'ARP คืออะไร?':
				await push(userId, {
					type: 'text',
					text:
						'ลองดูคลิปนี้ดูสิ https://youtu.be/m42Dtj4d9MI :-D',
				});
				await push(userId, {
					type: 'text',
					text:
						'หรือจะลองอ่านบทความนี้ดูก็ได้นะ https://nonthakon.medium.com/computer-network-arp-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-aa4fdb633a6d',
				});
				break;
			default:
				reply(replyToken, {
					type: 'text',
					text: 'น้อง Networky ไม่เข้าใจคำถามของคุณ ;-;',
					quickReply: {
						items: [
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'เริ่มต้น',
									text: 'เริ่มต้น',
								},
							},
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'DNS คืออะไร?',
									text: 'DNS คืออะไร?',
								},
							},
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'TCP คืออะไร?',
									text: 'TCP คืออะไร?',
								},
							},
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'Fragmentation คือ?',
									text: 'Fragmentation คืออะไร?',
								},
							},
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'ARP คืออะไร?',
									text: 'ARP คืออะไร?',
								},
							},
							{
								type: 'action',
								action: {
									type: 'message',
									label: 'HTTP คืออะไร?',
									text: 'HTTP คืออะไร?',
								},
							},
						],
					},
				});
		}
	} else if (event.type == 'follow') {
		await push(userId, {
			type: 'text',
			text: 'นี่คือสิ่งที่เกิดขึ้นเมื่อคุณป้อนเว็บไซต์ลงบน Searchbar',
		});
		await push(userId, carousel);
	}

	res.send(200).send({
		messages: [
			{
				type: 'text',
				text: 'ลองดูคลิปนี้ดูสิ https://youtu.be/AuNWaSYB4zg :-D',
			},
		],
	});
});

app.listen(port);
