import React, { Component } from 'react';
import { Anchor } from 'antd';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import HaierManual from '../../md/haier_manual.md'

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
            <div>
                <Anchor>
                    <MarkNav
                      source={markdown}
                    />
                </Anchor>
                <ReactMarkdown 
                  source={markdown}
                  escapeHtml={false}
                  className="markdown-body"
                />
            </div>
        )
    }
}

