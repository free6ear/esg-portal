import React, { Component } from 'react';
import { Descriptions, Badge } from 'antd';

export default class ProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
              <Descriptions title="服务器信息" bordered>
                <Descriptions.Item label="Project">海尔数字化仿真平台</Descriptions.Item>
                <Descriptions.Item label="ip">192.168.40.87</Descriptions.Item>
                <Descriptions.Item label="root 密码">altair123</Descriptions.Item>
                <Descriptions.Item label="系统版本">Red Hat 6.8</Descriptions.Item>
                <Descriptions.Item label="运行状态" span={2}>
                  <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="配置信息" span={3}>
                  内存：16G
                  <br />
                  CPU核数：4
                  <br />
                  CPU个数：1
                </Descriptions.Item>
                <Descriptions.Item label="备份状态" span={3}>

                </Descriptions.Item>
                <Descriptions.Item label="更新记录">
                  <a href="">2020.01.02：SCS_2019.1_2019-12-24-HotFix#2</a>
                </Descriptions.Item>
              </Descriptions>
            </div>  
        )
    }
}