import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd' ;
import { QuestionCircleOutlined, BookOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

import HomeContainer from './components/home/HomeContainer.jsx';
import SCS2019Container from './components/scs/SCS2019Container.jsx';
import SCS2018Container from './components/scs/SCS2018Container.jsx';
import TempleteContainer from './components/manual/TempleteContainer.jsx';
import LoadcaseContainer from './components/manual/LoadcaseContainer.jsx';
import ClassificationContainer from './components/manual/ClassificationContainer.jsx';
import FAQContainer from './components/faq/FAQContainer.jsx';
import ProjectContainer from './components/project/ProjectContainer.jsx';
import './css/index.css';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content } = Layout;

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return <HashRouter>
            <Layout style={{ height: "100vh " }}>
                <Header className="header" style={{ width: '100%' }}>
                    {/* <Link to="/home"> */}
                        <a href="/#/home"><div className="logo" /></a>
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
                                项目
                            </Link>
                        </Menu.Item> 
                        <SubMenu
                          title={
                              <span className="submenu-title-wrapper">
                                  <SettingOutlined />
                                  安装文档
                              </span>
                          }
                        >
                            <Menu.Item key="scs:2019"><Link to="/scs/2019">SCS2019</Link></Menu.Item>
                            <Menu.Item key="scs:2018"><Link to="/scs/2018">SCS2018</Link></Menu.Item>
                        </SubMenu> 
                        <SubMenu
                          title={
                              <span className="submenu-title-wrapper">
                                <BookOutlined />
                                制作教程
                              </span>
                          }
                        >
                            <Menu.Item key="templete"> <Link to="/manual/templete">流程模板</Link></Menu.Item> 
                            <Menu.Item key="loadcase"><Link to="/manual/loadcase">Loadcase</Link></Menu.Item>
                            <Menu.Item key="classification"><Link to="/manual/classificatin">Classification</Link></Menu.Item>
                        </SubMenu>   
                        <Menu.Item key="faq">
                            <Link to="/faq">
                                <QuestionCircleOutlined />
                                FAQ
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content
                    className="site-layout" >
                    <Route path="/home" component={HomeContainer} ></Route>   
                    <Route path="/project" component={ProjectContainer}></Route>      
                    <Route path="/scs/2019" component={SCS2019Container}></Route>  
                    <Route path="/scs/2018" component={SCS2018Container}></Route>    
                    <Route path="/manual/loadcase" component={LoadcaseContainer}></Route>
                    <Route path="/manual/templete" component={TempleteContainer}></Route>
                    <Route path="/manual/classification" component={ClassificationContainer}></Route>
                    <Route path="/faq" component={FAQContainer}></Route>             
                </Content>
            </Layout>
        </HashRouter>
}
}