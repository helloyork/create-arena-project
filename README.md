# 神岛Arena项目脚手架
[![npm version](https://badge.fury.io/js/create-arena-project.svg)](https://www.npmjs.com/package/create-arena-project)

## 构建脚手架
### 版本
webpack>v5

nodejs>18
### 方式一：npm 安装
```sh
npx create-arena-project myArenaProject
```
### 方式二：vscode插件 安装
#### ArenaPro插件安装方式：暂无
1.选择一个空文件夹，打开工作区。

【已登录可忽略】2.Shift+Ctrl+P调出命令，输入 ArenaPro，找到【登陆神岛账号/Login BOX3 Account】并点击，输入神岛账户Token

3.Shift+Ctrl+P调出命令，输入 ArenaPro，找到【新建Arena项目/Create new Arena Project】并点击，将自动构建脚手架。



## 文件树
```
├── dao3.config.json    /*Arena项目配置*/
├── package.json
├── .gitignore
├── /server/            /*服务端*/
│  ├── App.ts           /*服务端入口*/
│  └── GameAPI.d.ts     /*服务端代码提示*/
└── /client/            /*客户端*/
   ├── clientApp.ts     /*客户端入口*/
   └── ClientAPI.d.ts   /*客户端代码提示*/
```

##  项目配置说明

###   完整配置
```json
{
    "ArenaPro": {
        "file": {
            "typescript": {
                "temp": "./temp",
                "server": "./server",
                "client": "./client",
                "strict": true
            },
            "userAgent": "",
            "development": false
        },
        "map": {
            "id": "",
            "editHash": "",
            "playHash": ""
        }
    }
}
```
###   说明
| 属性  | 必填  | 类型  |默认值  | 说明  |
| ------------ | ------------ |------------ |------------ |------------ |
| file.typescript.temp  |  √ | string |./temp | 用于存放编译后的文件文件夹 |
| file.typescript.server  |  √ |string | ./server | Arena**服务端**项目文件夹目录 |
| file.typescript.client  |  √ | string |./client | Arena**客户端**项目文件夹目录 |
| file.typescript.strict  |   | boolean | true | 是否开启TypeScript类型严格模式，默认为开启 |
| file.userAgent  | √   | string | "" | 账户Token对应的用户代理 |
| file.development  |    | boolean | false | 是否切换为开发环境打包，默认为生产环境 |
| map.id  |  √   | string | "" | 当前Arena项目对应的**扩展地图ID** |
| map.editHash  |  √   | string | "" | 当前Arena项目对应的扩展地图**创作端Hash** |
| map.playHash  |  √   | string | "" | 当前Arena项目对应的扩展地图**游玩端Hash** |

## 插件&包贡献者
Nomen

冷鱼闲风

Amc

## 鸣谢
- [神奇代码岛](https://dao3.fun/)
- [神岛实验室](https://box3lab.com/)




