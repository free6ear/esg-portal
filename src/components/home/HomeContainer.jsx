import React, { Component } from 'react'
import { Card, Col, Row } from 'antd' ;
import { BugOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeParams: props.match.params,
            // isenter:false
        }
    }

    render() {
        const isenter = this.state.isenter       
        return (
            <div className="site-card-wrapper" >
                <Row justify="left" gutter={[36, 48]} style={{ margin: "0px 150px" }}>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="haier.png"
                            />
                            }
                            actions={[
                                <a href="https://www.tracup.com/cloud/#/project/a87b8a723b17122aaa9fc6da96952746/issues/1/">
                                    <BugOutlined key="tracup" />
                                </a>,
                                <a href="/#/project/server">
                                    <EllipsisOutlined key="ellipsis" />
                                </a>
                            ]}
                        >
                            <a href="http://192.168.40.87:8086/hwe">
                                <Meta
                                title="海尔集团&nbsp;-&nbsp;数字化仿真平台"
                                description="集成流程管理、仿真数据管理与材料库等模块，具备任务看板等特色功能，打通PLM，与TCUA协同作业"
                                style={{ height: "100px" }} 
                                />
                            </a>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable   
                            cover={
                            <img
                                alt="example"
                                src="southeast-motor.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="东南汽车&nbsp;-&nbsp;虚拟化车辆性能平台"
                            description="项目计划与状态实时展示，精确统计人员工作负荷，实现全文检索，文档在线预览，数据对比，HW工具集成"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="shangfei.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="中国商飞&nbsp;-&nbsp;知识管理平台"
                            description="定制化知识库管理，集成高性能计算与数据文件解析，实现数据审批功能，支持三员管理安全策略"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="dfh.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="东方红&nbsp;-&nbsp;小卫星协同仿真平台"
                            description="集成流程管理、仿真数据管理与材料库等模块，打通PLM，协同作业"
                            style={{ height: "100px" }}/>
                        </Card>
                    </Col>
                {/* </Row> */}
                {/* <Row span={24}  > */}
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="508.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="泛亚&nbsp;-&nbsp;CAE仿真管理平台"
                            description="集成业务流程管理，分析任务管理，虚拟评审看板，支持快速协同建模及整车装配，无缝嵌入泛亚集团内部系统"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="508.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="508&nbsp;-&nbsp;小卫星协同仿真平台"
                            description="支持多学科软件在线打开各类型文件，结果数据轻量化展示"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="508.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="奇瑞&nbsp;-&nbsp;CAE仿真平台数据管理系统"
                            description="支持报告多级审批与基于迭代数据的更新分析，整车建模"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={
                            <img
                                alt="example"
                                src="508.png"
                            />
                            }
                            actions={[
                            <BugOutlined key="tracup" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            title="Altair&nbsp;-&nbsp;仿真云平台"
                            description="原生SCS系统，功能齐全，具备流程管理、仿真数据管理、计算管理与材料库等模块"
                            style={{ height: "100px" }} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

