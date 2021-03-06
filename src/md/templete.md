# SCS平台流程模板制作与部署手册
编制日期 | 编制人 | 版本
---| --- |--- 
2018-08-31 | 尹伟成 | V1

## 文档作用
此文档主要用于指导SCS平台管理员学习如何制作企业流程模板，在已经梳理并清楚工作业务流程的前提下，根据需要独立完成模板的编写，制作与部署
## 术语描述
|序号 | 术语 | 描述|
|:--- |---| --- |
|1 | SCS | 仿真云平台
|2 | CMD | 命令提示符|
|3 | Process Manager | 企业流程管理
## 样例参考模版
[Demo.xml](/download/demo_xml)
<br/>

> 建议阅读此文档时打开Demo.xml同步对照阅读

## 编制流程模板
### 流程模板结构介绍
流程模板分为四部分
<br/>
- 第一部分，为模板文件的头两行，用于设置字符集，以及其他通用内容，一般不需要更改
- 第二部分，为流程中流程级别的属性，包括流程名，流程中角色
- 第三部分，定义任务单元的属性，包含任务的名称、输入、输出
- 第四部分，为流程任务节点及任务节点间文件流转关系定义

### 流程模板元素对照
#### Process元素
- displayName：
部署到平台中显示的流程模板名
- name:
流程模板名，需要与流程模板文件名保持一致，否则打包制作时会失败;在平台中需要唯一，不可与其他模板重名
- role:

#### tasks元素
#### workflow元素
## 生成可部署的模板文件
### 准备阶段
### 执行命令