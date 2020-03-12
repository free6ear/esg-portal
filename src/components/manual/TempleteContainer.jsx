import React, { Component } from 'react';
import { Anchor, Layout, Col, Row } from 'antd';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import '../../css/github-markdown.scss';
const loadcase = require('../../md/loadcase.md');

export default class TempleteContainer extends Component {
    state = {
        markdown: '',
    }
    constructor(props) {
        super(props)
        this.state = {
           terms: null,
        }
    }
    
    componentWillMount() {
        fetch(loadcase)
          .then(response => {
              return response.text()
          })
          .then(text => { this.setState({ markdown: text })
        })
    }

    render() {
        const { markdown } = this.state;
    return (
        <Layout className="site-layout-background" style={{ padding: "24px", background: "#f0f0f0", height: "100%" }}>
            <Row style={{ background: "#f0f0f0" }}>
                <Col span={4}></Col>
                <Col span={12} style={{ background: "white", padding: "24px" }}>
                    <ReactMarkdown 
                        className="markdown-body"
                        source={markdown}
                        escapeHtml={false}
                        style={{ padding: "10px", maxWidth: "" }}
                        // renderers={{
                        //     code: codeBlock,
                        // }}
                    />
                </Col>
                <Col span={4} style={{ height: "100vh" }} >
                <Anchor style={{ height: "100vh" }} >
                <div className="markdownNav-title">文档目录</div>
                    <MarkdownNavbar 
                        className="article-menu"
                        source={markdown} />
                </Anchor>  
                </Col>
            </Row>
            {/* <Content style={{ padding: '24px 24px', margin: "0 300px", background: "white", minHeight: 280 }}>  
                            

            </Content> */}
        </Layout>
    )
    }
}

