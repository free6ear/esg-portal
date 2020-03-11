import React, { Component } from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: '文件',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '更新日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>下载</a>
          <a>删除</a>
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

export default class SCS2018Container extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} pagination={false} style={{ width: "1000px", margin: '0 auto' }}/>   
            </div>
        )
    }
}

