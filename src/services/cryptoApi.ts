import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeader = {
	'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: ( builder ) => ({
		getCryptos: builder.query({
			query: () => createRequest('/coins')
		})
	})
})

export const { useGetCryptosQuery } = cryptoApi