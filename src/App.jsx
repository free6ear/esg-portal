import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd' ;
import { QuestionCircleOutlined, BookOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

import HomeContainer from './components/home/HomeContainer.jsx';
import SCSContainer from './components/scs/SCSContainer.jsx';
import ManualContainer from './components/manual/ManualContainer.jsx';
import FAQContainer from './components/faq/FAQContainer.jsx';
import ProjectContainer from './components/project/ProjectContainer.jsx';
import app from './css/app.css';

const { Header, Content } = Layout;

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount() {
        console.log(window.location.hash.split('/')[1]);
    }

    render() {
        return <HashRouter>
            <Layout style={{ height: "100vh " }}>
                <Header className="header">
                    {/* <Link to="/home"> */}
                        <div className="logo" />
                    {/* </Link> */}
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={window.location.hash.split('/')[1]}
                      style={{ lineHeight: '64px', float: "right" }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">
                                <HomeOutlined />
                                首页
                            </Link>
                        </Menu.Item>    
                        <Menu.Item key="scs">
                            <Link to="/scs">
                                <SettingOutlined />
                                安装文档
                            </Link>
                        </Menu.Item>    
                        <Menu.Item key="manual">
                            <Link to="/manual">
                                <BookOutlined />
                                制作教程    
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="faq">
                            <Link to="/faq">
                                <QuestionCircleOutlined />
                                FAQ
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content
                    className="site-layout-background"
                >
                    <Route path="/home" component={HomeContainer}></Route>   
                    <Route path="/project" component={ProjectContainer}></Route>      
                    <Route path="/scs" component={SCSContainer}></Route>      
                    <Route path="/manual" component={ManualContainer}></Route>
                    <Route path="/faq" component={FAQContainer}></Route>             
                </Content>
            </Layout>
        </HashRouter>
}
}