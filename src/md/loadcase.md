##  文档作用
此文档主要用于指导SCS平台管理员学习如何制作企业Load case模板，根据需要独立完成模板的编写，制作与部署
## 术语描述
序号 | 术语 | 描述
--- | --- | ---
1   | SCS | 仿真云平台
2   | Simulation Manager | 企业仿真管理

## 样例参考模板
[UDMCLOSUREProject.xml](http://www.google.com/)

> 建议阅读此文档时打开UDMCLOSUREProject.xml同步对照阅读

## 编制模板
### 模板结构介绍
<img src='./md_images/loadcase_01.png'>
<br /><br />
<img src='./md_images/loadcase_02.png'>
<br/><br/>
<img src='./md_images/loadcase_03.png'>

## 更新或添加新的文件
### 更新
<img src='./md_images/loadcase_04.png'>
<br /><br />
然后退出重新登录
<br/>
该更新可以更新metadata是否显示，是否可编辑，默认值等；
<br/>
> 【说明】：  该更新对有些情况不适用，例如：删除文件中某个metadata属性，或者某个metadata类型的改变；是不可以更新的；具体以实际更新为准

### 添加
把新添加的文件放到服务器上scs安装目录下…/home/services/hsm/config/cdefs/CustomEntity
重启服务

### 对于loadcase和kpt对应的文件
<img src='./md_images/loadcase_05.png'>
<br/><br/>
<img src='./md_images/loadcase_06.png'>
<br /><br />
把新添加的文件放到服务器上scs安装目录下…/home/services/hsm/config/cdefs/CustomEntity
<br/>
重启服务

