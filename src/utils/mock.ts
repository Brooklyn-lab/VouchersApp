import {Company} from '../types/company';

export const makeFakeCompanies = (): Company[] => ([
	{
		id: 12,
		title: 'Samsonite',
		logo: './img/companies/samsonite.png',
		link: 'https://shop.samsonite.com/',
		coupons: [
			{
				id: 1,
				shortText: '20% Off',
				header:
					'20% Off Site Side <br> Using code: <span class="coupon__text-strong">JOY20</span>',
				description: {
					text: '20% Off for all categories: <br> <ul class="coupon__description"><li>- Luggage</li><li>- Backpacks & bags</li><li>- Accessories</li></ul>',
				},
			},
		],
	},
	{
		id: 14,
		title: 'Forever21',
		logo: './img/companies/forever21.png',
		link: 'https://www.forever21.com/',
		coupons: [
			{
				id: 1,
				shortText: '17% Off',
				header: 'Get 17% Discount',
				description: {
					title: 'Last chance to get 17% Off',
					text: 'Almost everything',
				},
			},
		],
	},
	{
		id: 15,
		title: 'Bad Rhino',
		logo: './img/companies/badrhino.png',
		link: 'https://www.badrhino.com/',
		coupons: [
			{
				id: 1,
				shortText: 'Up to 70%',
				header: 'Up to 70% Off Selected Lines',
				description: {
					text: 'Further reductions CLEARANCE',
				},
			},
		],
	}
]);
