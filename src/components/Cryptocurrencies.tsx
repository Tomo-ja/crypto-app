import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Crypto } from '../helper/typeList'
import Loader from './Loader'

type Props = {
	simplified: boolean
}

const Cryptocurrencies = ({simplified}: Props) => {

	const count = simplified ? 10 : 100
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

	const [cryptos, setCryptos] = useState<Crypto[]>([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {

		const filteredData = cryptosList?.data?.coins.filter((coin: Crypto) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
		setCryptos(filteredData)

	}, [cryptosList, searchTerm])

	if (isFetching) return <Loader />

	return (
		<>
			{!simplified && 
				<div className='search-crypto'>
					<Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.currentTarget.value)}/>
				</div>
			}

			<Row gutter={[32, 32]} className='crypto-card-container'>
				{cryptos?.map(coin => (
					<Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
						<Link to={`/crypto/${coin.uuid}`}>
							<Card 
								title={`${coin.rank}. ${coin.name}`}
								extra={<img className='crypto-image' src={coin.iconUrl} alt='' />}
								hoverable
							>
								<p>Price: ${millify(parseInt(coin.price, 10))}</p>
								<p>Market Cap: {millify(parseInt(coin.marketCap, 10))}</p>
								<p>Daily Change: {millify(parseInt(coin.change, 10))}%</p>

							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	)
}


export default Cryptocurrencies