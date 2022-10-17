import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { CryptoHistory } from "../helper/typeList";
import 'chart.js/auto'
import moment from "moment";
import Loader from "./Loader";


const { Title } = Typography

type Props = {
	coinHistory: any,
	currentPrice: string,
	coinName: string
}

const LineChart = ({coinHistory, currentPrice, coinName}: Props) => {

	const coinPrice: string[] = []
	const coinTimestamp: any[] = []
	const ref = useRef()

	if (!coinHistory) return <Loader/>

	const history = coinHistory.data as CryptoHistory

	for (let i=0; i < history.history.length; i++) {
		coinPrice.unshift(history.history[i].price)
		const time = new Date(history.history[i].timestamp * 1000).toLocaleDateString()
		coinTimestamp.unshift(time)
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price in USD',
				data: coinPrice,
				fill: false,
				backgroundColor: '#0071bd',
				borderColor: '#0071bd'
			}
		]
	}


	return (
		<>
			<Row className="chart-header">
				<Title level={2} className='chart-title'>{coinName} Price Chart</Title>
				<Col className="price-container">
					<Title level={5} className='price-change'>{history.change}%</Title>
					<Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
				</Col>
			</Row>
			<Line ref={ref} data={data}/>
		</>
	)
}

export default LineChart