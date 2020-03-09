import React, { Component } from 'react';
import { Anchor, Layout } from 'antd';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import ClassificationMD from '../../md/classification.md'

const { Link } = Anchor;
const { Header, Content, Sider } = Layout;

export default class ClassificationContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terms: null,
            articleDetail: '',
        }
    }
    
    componentWillMount() {
        fetch(ClassificationMD).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }

    render() {
    const {markdown} = this.state;
    return (
        <Content >
        <Layout className="site-layout-background" style={{ padding: '24px 50px' }}>
            {/* <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                >
                <div className="navigation">
                    <MarkdownNavbar source={this.state.terms} />
                </div>
                </Menu>
            </Sider> */}
            {/* <Anchor>
                <div className="MarkdownNav-title">文章目录</div>
                <MarkdownNavbar>
                  source={this.state.terms}
                  headingYopOffset={80}
                  </MarkdownNavbar>
            </Anchor> */}
            <Content style={{ padding: '0 24px', minHeight: 280 }}>                    
                <ReactMarkdown 
                    source={this.state.terms}
                    escapeHtml={false}
                />
            </Content>
        </Layout>
    </Content>
    )
    }
}

