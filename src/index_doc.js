import React from 'react';
import ReactDOM from 'react-dom';

// import esg_logo from './css/app.css';
import { Table, Tag, Layout, Menu, Breadcrumb, Card, Avatar, Descriptions, Badge } from 'antd';
import { CloudServerOutlined, FolderOpenOutlined, FileWordOutlined, QuestionCircleOutlined, BookOutlined, BugOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, MailOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Download</a>
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '数字化仿真平台系统上线切换策略',
    date: '2020-03-01',
  },
  {
    key: '2',
    name: '数字化仿真平台系统容灾恢复手册',
    date: '2020-03-01',
  },
  {
    key: '3',
    name: '数字化仿真平台系统应急策略',
    date: '2020-03-02',
  }
];

ReactDOM.render(
    <Layout>
    <Header className="header">
      <div className="esg_logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px', float: "right" }}
      >
        <SubMenu
          title={
              <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  安装文档
              </span>
          }
        >
            <Menu.Item key="setting:1">2019</Menu.Item>
            <Menu.Item key="setting:2">2018&2017</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
              <span className="submenu-title-wrapper">
                  <BookOutlined />
                  制作教程
              </span>
          }
        >
            <Menu.Item key="setting:3">流程模板</Menu.Item>
            <Menu.Item key="setting:4">loadcase</Menu.Item>
            <Menu.Item key="setting:5">classification</Menu.Item>
        </SubMenu>
        <Menu.Item key="6"><QuestionCircleOutlined />FAQ</Menu.Item>
      </Menu>
    </Header>
    <Layout>
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['7']}
          defaultOpenKeys={['sub1', 'sub2']}
          style={{ height: '100vh', borderRight: 0 }}
        >
          <Menu.Item key="1"><CloudServerOutlined />服务器信息</Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <FolderOpenOutlined />
                项目文档
              </span>
            }
          >
            <Menu.Item key="2"><FileWordOutlined />售前阶段</Menu.Item>
            <Menu.Item key="3"><FileWordOutlined />需求调研</Menu.Item>
            <Menu.Item key="4"><FileWordOutlined />设计阶段</Menu.Item>
            <Menu.Item key="5"><FileWordOutlined />开发开发</Menu.Item>
            <Menu.Item key="6"><FileWordOutlined />测试阶段</Menu.Item>
            <Menu.Item key="7"><FileWordOutlined />上线阶段</Menu.Item>
            <Menu.Item key="8"><FileWordOutlined />运维阶段</Menu.Item>
            <Menu.Item key="9"><FileWordOutlined />其他</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 0 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            height: "100%",
            background: "white"
          }}
        >
            <div >
              <Table columns={columns} dataSource={data} />
            </div>  
        </Content>
      </Layout>
    </Layout>
  </Layout>, document.getElementById('root'))