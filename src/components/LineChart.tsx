import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { CryptoHistory } from "../helper/typeList";


const { Title } = Typography

type Props = {
	coinHistory: any,
	currentPrice: string,
	coinName: string
}

const LineChart = ({coinHistory, currentPrice, coinName}: Props) => {

	if (!coinHistory) return <div>Loading...</div>

	const history = coinHistory.data as CryptoHistory
	return (
		<>
			<Row className="chart-header">
				<Title level={2} className='chart-title'>{coinName} Price Chart</Title>
				<Col className="price-container">
					<Title level={5} className='price-change'>{history.change}%</Title>
					<Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
				</Col>
			</Row>
		</>
	)
}

export default LineChart