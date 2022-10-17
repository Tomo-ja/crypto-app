export type GlobalStats = {
	total: number,
	total24hVolume: string,
	totalCoins: number,
	totalExchanges: number,
	totalMarketCap: string,
	totalMarkets: number
}

export type Crypto = {
	'24hVolume': string,
	btcPrice: string,
	change: string,
	coinrankingUrl: string,
	color: string,
	iconUrl: string,
	listedAt: number,
	lowVolume: boolean
	marketCap: string,
	name: string,
	price: string,
	rank: number
	sparkline: string[]
	symbol: string,
	tier: number
	uuid: string
}

export type CryptoDetail = {
	'24hVolume': string,
	allTimeHigh: {
		price: string, 
		timestamp: number
	},
	btcPrice: string,
	change: string,
	coinrankingUrl: string,
	color: string,
	description: string,
	fullyDilutedMarketCap: string,
	iconUrl: string,
	links: {
		name: string,
		type: string,
		url: string,
	}[],
	listedAt: number 
	lowVolume: boolean
	marketCap: string,
	name: string,
	numberOfExchanges: number,
	numberOfMarkets: number
	price: string
	priceAt: number
	rank: number
	sparkline: string[],
	supply: {
		confirmed: boolean,
		supplyAt: number,
		max: string,
		total: string,
		circulating: string
	},
	symbol: string,
	tags: string[],
	tier: number,
	uuid: string,
	websiteUrl: string
}

export type CryptoHistory = {
	change: string,
	history: {
		price: string,
		timestamp: number
	}[]
}

export type NewsFetch = {
	value: NewsData[],
	readLink: string,
	sort: object[],
}

export type NewsData = {
	category: string,
	datePublished: string,
	description: string,
	image?: {
		thumbnail?: {
			contentUrl: string
		}
	},
	name: string,
	provider: {
		name: string,
		image?: {
			thumbnail?: {
				contentUrl: string
			}
		}
	}[],
	url: string,
	_type: string
}