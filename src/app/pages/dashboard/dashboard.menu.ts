export const MENU_CONFIG = {
	'iconWidth': 100,
	'menu': [
		{
			"id": "BaseSetting",
			"title": "基本设置",
			"image": "/assets/icons/flatjoy-circle-deviantart/Settings.png",
			"url": "http://www.baidu.com",
			"submenu": [
				{ "id": "system", "title": "系统设置", "image": "/assets/icons/flatjoy-circle-deviantart/Apple.png", "url": "http://www.baidu.com" },
				{ "id": "company", "title": "企业设置", "image": "/assets/icons/flatjoy-circle-deviantart/House.png", "url": "http://www.baidu.com" }
			],
			"dock": [],
			"tools": []
		},
		{
			"id": "Sale",
			"title": "销售",
			"image": "/assets/icons/flatjoy-circle-deviantart/Sale.png",
			"url": "",
			"submenu": [],
			"dock": [
				{ "id": "ticket", "title": "售票", "image": "/assets/icons/flatjoy-circle-deviantart/Ticket.png", "url": "http://localhost:3000/#/pages/sales/ticket" },
				{ "id": "refund", "title": "退票", "image": "/assets/icons/flatjoy-circle-deviantart/Ticket_alt.png", "url": "http://www.baidu.com" }
			],
			"tools": []
		},
		{
			"id": "CardManage",
			"title": "卡证办理",
			"image": "/assets/icons/flatjoy-circle-deviantart/Money.png",
			"url": "",
			"submenu": [],
			"dock": [
				{ "id": "register", "title": "办卡", "image": "/assets/icons/flatjoy-circle-deviantart/Credit Card.png", "url": "http://localhost:3000/#/pages/card" },
			],
			"tools": []
		}
	]
};
