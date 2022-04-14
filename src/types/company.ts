export type Company = {
	id: number,
	title: string,
	logo: string,
	link: string,
	coupons?: [
		{
			id: number,
			shortText: string,
			header: string,
			description: {
				title?: string,
				text: string
			},
			details?: string[]
		}
	]
}
