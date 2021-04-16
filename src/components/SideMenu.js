import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserAddOutlined, BookOutlined } from '@ant-design/icons';

class SideMenu extends Component {

  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{marginTop: '60px'}}>
            <Menu.Item key="1">
              <Link to='/'>
                <UserAddOutlined style={{ color: '#fff' }} />
                <span className="nav-text">Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
             <Link to='/repo'>
                <BookOutlined style={{ color: '#fff' }} />
                <span className="nav-text">All Repositories</span>
              </Link>
            </Menu.Item>
          </Menu>
    );
  }

}

export default SideMenu;