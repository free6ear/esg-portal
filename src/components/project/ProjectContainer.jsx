import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { CloudServerOutlined, FolderOpenOutlined, FileWordOutlined } from '@ant-design/icons';

import ProjecrDocsOnline from './ProjectDocsOnline.jsx';
import ProjectServer from './ProjectServer.jsx';

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

export default class ProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Layout style={{ height: "100%" }}>
                <Sider width={240} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['server']}
                    defaultOpenKeys={['docs']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="server">
                            <Link to="/project/server">
                                <CloudServerOutlined />服务器信息
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="docs"
                            title={
                            <span>
                                <FolderOpenOutlined />
                                项目文档
                            </span>
                            }
                        >
                            <Menu.Item key="pre-sale">
                                <Link to="/project/docs/pre-sale">  
                                    <FileWordOutlined />售前阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="demand-survey">
                                <Link to="/project/docs/demand-survey">
                                    <FileWordOutlined />需求调研
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Link to="/project/docs/design">
                                    <FileWordOutlined />设计阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="dev">
                                <Link to="/project/docs/dev">
                                    <FileWordOutlined />开发阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="test">
                                <Link to="/project/docs/test">
                                    <FileWordOutlined />测试阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="on-line">
                                <Link to="/project/docs/on-line">
                                    <FileWordOutlined />上线阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="operation">
                                <Link to="/project/docs/operation">
                                    <FileWordOutlined />运维阶段
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="9">
                                <Link to="other">
                                    <FileWordOutlined />其他
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            <Layout style={{ padding: '0 24px 24px' }}> 
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>海尔集团&nbsp;-&nbsp;数字化仿真平台</Breadcrumb.Item>
                    <Breadcrumb.Item>项目文档</Breadcrumb.Item>
                    <Breadcrumb.Item>上线阶段</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  className="site-layout-background"
                  style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      background: "white"
                  }}
                >
                    <Route path="/project/server" component={ProjectServer}></Route>
                    <Route path="/project/docs/on-line" component={ProjecrDocsOnline}></Route>
                </Content>
            </Layout>
            </Layout>
        )
    }
}