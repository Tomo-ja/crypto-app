import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptNewsHeader = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Key': '55fad04f9emshbb7c08cab5ae3e9p193d63jsn4aa01c0e6567',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: cryptNewsHeader})


export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: ( builder ) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
		})
	})
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi