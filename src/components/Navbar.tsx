import React from 'react'
import { Link } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Button, Menu, Typography } from 'antd'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

const menuItems: MenuProps['items'] = [
	{
		icon: <HomeOutlined />,
		key: 'home',
		label: (
			<Link to='/'>Home</Link>
		)
	},
	{
		icon: <FundOutlined />,
		key: 'cryptocurrencies',
		label: (
			<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
		)
	},
	{
		icon: <MoneyCollectOutlined />,
		key: 'exchanges',
		label: (
			<Link to='/exchanges'>Exchanges</Link>
			)
	},
	{
		icon: <HomeOutlined />,
		key: 'news',
		label: (
			<Link to='/news'>News</Link>
			)
	}
]


const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Cryproverse</Link>
				</Typography.Title>
			</div>
			<Menu theme='dark'items={menuItems} />
		</div>
	)
}

export default Navbar