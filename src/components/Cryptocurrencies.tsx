import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptos } from '../helper/typeList'

const Cryptocurrencies = () => {

	const { data: cryptosList, isFetching } = useGetCryptosQuery('')
	const [cryptos, setCryptos] = useState<Cryptos[] | undefined | null>(cryptosList?.data?.coins)


	console.log(cryptos)

	return (
		<>
			<Row gutter={[32, 32]} className='crypto-card-container'>
				{cryptos?.map(coin => (
					<Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
						<Link to={`/crypto/${coin.uuid}`}>
							<Card 
								title={`${coin.rank}. ${coin.name}`}
								extra={<img className='crypto-image' src={coin.iconUrl} alt='' />}
								hoverable
							>
								<p>Price: {millify(parseInt(coin.price, 10))}</p>
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