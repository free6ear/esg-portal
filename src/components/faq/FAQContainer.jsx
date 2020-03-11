import React, { Component } from 'react'
import { List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export default class ManualContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
  
    render() {
        return (
            <div style={{ background: "white", margin: "47px" }}>
                <List
                    style={{ padding: 24 }}
                    size="large"
                    header={<div>FAQ</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ERROR]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

