import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Button, Menu, Typography } from 'antd'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

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
		icon: <BulbOutlined />,
		key: 'news',
		label: (
			<Link to='/news'>News</Link>
			)
	}
]


const Navbar = () => {

	const [activeMenu, setActionMenu] = useState(true)
	const [screenSize, setScreenSize] = useState<null | number>(null)

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if(!screenSize || screenSize < 1285){
			setActionMenu(false)
		} else {
			setActionMenu(true)
		}
	}, [screenSize])

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Crypto Helper</Link>
				</Typography.Title>
				<Button className='menu-control-container' onClick={() => setActionMenu(prev => !prev)}>
					<MenuOutlined />
				</Button>
			</div>
			{ activeMenu && 
				<Menu theme='dark'items={menuItems} />
			}
		</div>
	)
}

export default Navbar