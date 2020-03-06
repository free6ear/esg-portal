import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: '文件名',
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
      name: '数字化仿真平台系统上线切换策略',
      date: '2020-03-01',
    },
    {
      key: '2',
      name: '数字化仿真平台系统容灾恢复手册',
      date: '2020-03-01',
    },
    {
      key: '3',
      name: '数字化仿真平台系统应急策略',
      date: '2020-03-02',
    }
  ];

  export default class ProjectContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        )
    }
}
  