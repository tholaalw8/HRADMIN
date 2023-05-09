import React from 'react';
import { FC, useState } from 'react';
import { Menu, MenuProps, Button,  Layout} from 'antd';
import type { ItemType, MenuItemType, SubMenuType,  } from "antd/es/menu/hooks/useItems";
import 'antd/dist/reset.css';
import '../App.css';
import {MenuFoldOutlined,
  MenuUnfoldOutlined, HomeOutlined, BarChartOutlined, SettingOutlined, ImportOutlined, UserOutlined,
DashboardOutlined, TeamOutlined, RocketOutlined, IconProvider, SendOutlined, EnterOutlined} from '@ant-design/icons'



const { Header, Sider, Content} = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Dashboard','/dashboard',<DashboardOutlined/>),
  getItem('Check In/Out', '/checkout', <SendOutlined/>),
  getItem('Consumables', '/consumables', <RocketOutlined/>),
  getItem('People', '/people', <TeamOutlined />),
  getItem('Import','/import',<ImportOutlined/>),
  getItem('Settings', '/settings', <SettingOutlined/>, [
    getItem('Categories', '/category'),
    getItem('Departments', '/department'),
    getItem('Locations', '/location'),
    getItem('Adjustments','/adjustments',null,[
      getItem('Positive', '/adjpostive'),
      getItem('Negative','/adjnegative')
    ])
  ]),
  getItem('Reports','/reports',<BarChartOutlined/>, [
    getItem('Activity Report', '/activityReport')
  ])
]


type AppMenuProps = {
    onClick?: any;
}

function AppMenu(props: AppMenuProps) {
 
 
  
const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e )
  }
  return (

    
    <div style={{height: '100vh', backgroundColor: "#001529" }}>
     
      <Button  onClick={toggleCollapsed} style={{marginBottom:16}} >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}
      </Button>

      <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu 
        onClick={props.onClick}
        defaultSelectedKeys={[window.location.pathname]}
        defaultOpenKeys={['one']}
        mode='inline'
        theme='dark'
        items= {items}
        />
      </Sider>
      
      </div>
     
            
            
    </div>
  );
}

export default AppMenu;
