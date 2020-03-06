import React from 'react';
import ReactDOM from 'react-dom';

// import esg_logo from './css/app.css';
import { Layout, Menu, Breadcrumb, Card, Avatar } from 'antd';
import { QuestionCircleOutlined, BookOutlined, BugOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, MailOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

ReactDOM.render(
    <Layout>
    <Header className="header">
      <div className="esg_logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px', float: "right" }}
      >
        <SubMenu
          title={
              <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  安装文档
              </span>
          }
        >
            <Menu.Item key="setting:1">2019</Menu.Item>
            <Menu.Item key="setting:2">2018&2017</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
              <span className="submenu-title-wrapper">
                  <BookOutlined />
                  制作教程
              </span>
          }
        >
            <Menu.Item key="setting:3">流程模板</Menu.Item>
            <Menu.Item key="setting:4">loadcase</Menu.Item>
            <Menu.Item key="setting:5">classification</Menu.Item>
        </SubMenu>
        <Menu.Item key="6"><QuestionCircleOutlined />FAQ</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      {/* <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                服务器信息
              </span>
            }
          >
            <Menu.Item key="1">原生SCS</Menu.Item>
            <Menu.Item key="2">海尔</Menu.Item>
            <Menu.Item key="3">东南</Menu.Item>
            <Menu.Item key="4">泛亚</Menu.Item>
            <Menu.Item key="5">商飞北研</Menu.Item>
            <Menu.Item key="6">508</Menu.Item>
            <Menu.Item key="7">奇瑞</Menu.Item>
            <Menu.Item key="8">PBS</Menu.Item>
            <Menu.Item key="9">其他</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <LaptopOutlined />
                项目文档
              </span>
            }
          >
            <Menu.Item key="5">海尔</Menu.Item>
            <Menu.Item key="6">东南</Menu.Item>
            <Menu.Item key="7">泛亚</Menu.Item>
            <Menu.Item key="8">商飞北研</Menu.Item>
            <Menu.Item key="8">508</Menu.Item>
            <Menu.Item key="8">奇瑞</Menu.Item>
            <Menu.Item key="8">徐工</Menu.Item>
           
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider> */}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            height: "100%"
          }}
        >
            <div style={{ margin: "25px 120px" }}>
                <div style={{ display:"flex", "justify-content": "space-between", width: "100%" }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="haier.png"
                        />
                        }
                        actions={[
                        <BugOutlined key="tracup" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        title="海尔集团&nbsp;-&nbsp;数字化仿真平台"
                        description="集成流程管理、仿真数据管理与材料库等模块，具备任务看板等特色功能，打通PLM，与TCUA协同作业"
                        style={{ height: "100px" }} />
                    </Card>
                    <Card
                        style={{ width: 300 }}
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
                    <Card
                        style={{ width: 300 }}
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
                    <Card
                        style={{ width: 300 }}
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
                </div>
                <br />
                <div style={{ display:"flex", "justify-content": "space-between", width: "100%", marginTop: "50px" }}>
                    <Card
                        style={{ width: 300 }}
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
                  <Card
                        style={{ width: 300 }}
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
                    <Card
                        style={{ width: 300 }}
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
                    <Card
                        style={{ width: 300 }}
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
                </div>
            </div>  
        </Content>
      </Layout>
    </Layout>
  </Layout>, document.getElementById('root'))