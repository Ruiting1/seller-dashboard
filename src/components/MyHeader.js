import React from 'react'
import LogoImg from '../assets/images/logo.png'
import UserAvatar from '../assets/images/avatar.png'
import "./MyHeader.scss"
import { Avatar, Badge, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MyHeader = () => {

    const menu = (
        <Menu
            theme="dark"
        >
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    PROFILE
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    SELLER DASHBOARD
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    LOG OUT
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className="myheader">
                <div className="left-side">
                    <img className="logo" src={LogoImg} />
                    <ul className="topnav">
                        <li><a href="#">EVENTS</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href="#">CATALOGUE</a></li>
                    </ul>
                </div>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <img className="user-avatar" src={UserAvatar} />
                </Dropdown>
            </div>
        </div>
    )
}

export default MyHeader