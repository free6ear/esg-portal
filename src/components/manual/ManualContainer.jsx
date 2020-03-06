import React, { Component } from 'react';
import { Anchor, Row, Col, Layout, Menu } from 'antd';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import HaierManual from '../../md/haier_manual.md'

const { Header, Content, Sider } = Layout;

export default class ManualContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: '',
        }
    }

    componentWillMount() {
        fetch(HaierManual)
            .then(res => res.text())
            .then(text => this.setState({markdown: text}));
    }

    render() {
    const {markdown} = this.state;
    return (
        <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                >
                <div className="navigation">
                    <MarkdownNavbar source={markdown} />
                </div>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>                    
                <ReactMarkdown 
                    source={markdown}
                    escapeHtml={false}
                    className="markdown-body"
                />
            </Content>
        </Layout>
    </Content>
    )
    }
}

