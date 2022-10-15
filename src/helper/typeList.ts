export type GlobalStats = {
	total: number,
	total24hVolume: string,
	totalCoins: number,
	totalExchanges: number,
	totalMarketCap: string,
	totalMarkets: number
}

export type Cryptos = {
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