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
    title: 'Update Date',
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
    name: 'SCS2019安装部署手册',
    date: '2020-03-02',
  },
  {
    key: '2',
    name: 'SCS2018&2017安装部署手册',
    date: '2020-03-01',
  },
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
        <Menu.Item key="1"><SettingOutlined />安装文档</Menu.Item>
        <Menu.Item key="2"><SettingOutlined />制作教程</Menu.Item>
        <Menu.Item key="3"><QuestionCircleOutlined />FAQ</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Layout style={{ padding: '0 0 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            height: "100vh",
          }}
        >
          
          <Table columns={columns} dataSource={data} pagination={false} style={{ width: "1000px", margin: '0 auto' }}/>

        </Content>
      </Layout>
    </Layout>
  </Layout>, document.getElementById('root'))