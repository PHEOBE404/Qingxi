## 后端提供的URL总览

### 前言

本文档以表格形式给出前端和移动端访问后台数据的接口，在前言部分将先对表格中项目做一个概述。

**URL：**前端、移动端访问后台数据的URL路径

**Request Type：**前端、移动端获取后台数据时所要发送的HTTP请求的类型，RESTful风格的API请求类型一共分为四种:Get、Put、Patch、Delete

**Parameter：**在请求体的json中所要填写的字段或URL路径中的一部分

**Description：**接口的功能描述

**Role：**该url允许哪些角色访问

以User接口表格中的/user/register一行为例

![requestExample](E:\document\服务外包\多媒体\Qingxi_github\document\images\requestExample.png)

在上图中我们构造了一个put请求，请求体是json格式，其中的数据为{"uniqueName":"Alice","password":"123"},然后将该请求发送至/user/register。

![requestResultExample](E:\document\服务外包\多媒体\Qingxi_github\document\images\requestResultExample.png)

然后再查看数据库中的内容，发现的确多了一行用户名为Alice的记录(数据库中的密码是加密后的结果，因此不会显示先前的123)，说明注册成功。

### User相关接口

User是对整个系统所有用户的封装，其中各种用户分为三种权限：ROLE_USER、ROLE_VIP、ROLE_ADMIN，直接注册的用户权限为ROLE_USER，发起认证用户申请并成功通过后，可获得ROLE_VIP权限，ROLE_ADMIN权限为后台管理员所有，由后台直接提供账号密码，无法通过注册等方式获得。

|          URL          | Request Type |  Parameter  |      Description       |      Role      |
| :-------------------: | :----------: | :---------: | :--------------------: | :------------: |
|       /user/all       |     get      |             | 管理员获取所有用户信息 |   ROLE_ADMIN   |
| /user/manage/{userId} |     get      |   userId    |    获取指定用户信息    |   ROLE_ADMIN   |
|      /user/login      |     get      |    User     |        用户登陆        |     ANYONE     |
|    /user/register     |     put      |    User     |        注册用户        |     ANYONE     |
| /user/manage/{userId} |    patch     | userId,User |      修改用户信息      |   ROLE_ADMIN   |
| /user/manage{userId}  |    delete    |   userId    |      删除用户账户      |   ROLE_ADMIN   |
|    /user/{userId}     |     get      |   userId    | 获取用户信息(不带密码) | ROLE_USER、VIP |
|    /user/{userId}     |    patch     | userId,User |      修改用户信息      | ROLE_USER、VIP |



### Message(认证用户动态)相关接口

|             URL             | Request Type | Parameter |     Description      |         Role          |
| :-------------------------: | :----------: | :-------: | :------------------: | :-------------------: |
|      /message/{userId}      |     get      |  userId   | 获取某用户的所有动态 | ROLE_USER、VIP、ADMIN |
|          /message           |     put      |  Message  |      发布新动态      |    ROLE_VIP、ADMIN    |
|          /message           |    patch     |  Message  |   用户修改动态内容   |       ROLE_VIP        |
|       /message/manage       |    patch     |  Message  |  管理员修改动态内容  |      ROLE_ADMIN       |
|    /message/{messageId}     |    delete    | messageId |   用户删除自身动态   |       ROLE_VIP        |
| /message/manage/{messageId} |    delete    | messageId |    管理员删除动态    |      ROLE_ADMIN       |



### Medium(媒体素材，如完整视频，短视频，文章等)相关接口

|             URL             | Request Type |      Parameter       |           Description            |         Role          |
| :-------------------------: | :----------: | :------------------: | :------------------------------: | :-------------------: |
|           /medium           |     put      |     file,Medium      |     上传文件以及文件相关信息     |    ROLE_VIP、ADMIN    |
|   /medium/{mediumId}/pass   |    patch     |       mediumId       |           素材审核通过           |      ROLE_ADMIN       |
|   /medium/{mediumId}/fail   |    patch     |       mediumId       |          素材审核未通过          |      ROLE_ADMIN       |
| /medium/download/{mediumId} |     get      |       mediumId       |             下载素材             | ROLE_USER、VIP、ADMIN |
|    /medium/{mediumType}     |     get      |      mediumType      |    获取所有审核通过的某类素材    | ROLE_USER、VIP、ADMIN |
| /medium/{mediumType}/opera  |     get      | mediumType,operaType | 获取所有审核通过的某剧种的某素材 | ROLE_USER、VIP、ADMIN |
|      /medium/unchecked      |     get      |                      |     获取所有未审核的媒体素材     |      ROLE_ADMIN       |



### Comment(评论)相关接口

|            URL             | Request Type | Parameter |      Description       |         Role          |
| :------------------------: | :----------: | :-------: | :--------------------: | :-------------------: |
|   /comment/user/{userId}   |     get      |  userId   |   获取某用户所有评论   | ROLE_USER、VIP、ADMIN |
| /comment/medium/{mediumId} |     get      | mediumId  | 获取某媒体素材所有评论 | ROLE_USER、VIP、ADMIN |
|          /comment          |     put      |  Comment  |        发布评论        | ROLE_USER、VIP、ADMIN |
|    /comment/{commentId}    |    delete    | commentId |     管理员删除评论     | ROLE_USER、VIP、ADMIN |



### Barrage(弹幕)相关接口

|            URL             | Request Type | Parameter |      Description       |         Role          |
| :------------------------: | :----------: | :-------: | :--------------------: | :-------------------: |
|   /barrage/user/{userId}   |     get      |  userId   |   获取某用户所有弹幕   |      ROLE_ADMIN       |
| /barrage/medium/{mediumId} |     get      | mediumId  | 获取某媒体素材所有弹幕 | ROLE_USER、VIP、ADMIN |
|          /barrage          |     put      |  Barrage  |        发布弹幕        | ROLE_USER、VIP、ADMIN |
|    /barrage/{barrageId}    |    delete    | barrageId |        删除弹幕        |      ROLE_ADMIN       |



### Identical_Msg(认证信息)相关接口

|              URL               | Request Type |          Parameter          |       Description        |    Role    |
| :----------------------------: | :----------: | :-------------------------: | :----------------------: | :--------: |
| /identification/list/unchecked |     get      |                             | 列出所有未审核的认证信息 | ROLE_ADMIN |
|   /identification/check/{id}   |    patch     | identicalMsgId、checkResult |       审核认证信息       | ROLE_ADMIN |
|     /identification/apply      |     put      |        IdenticalMsg         |       用户申请认证       | ROLE_USER  |
|     /identification/apply      |    patch     |        IdenticalMsg         |     用户修改认证信息     | ROLE_USER  |
|   /identification/apply/{id}   |    delete    |       identicalMsgId        |      管理员删除认证      | ROLE_ADMIN |
|     /identification/cancel     |    delete    |       identicalMsgId        |       用户取消认证       | ROLE_USER  |
