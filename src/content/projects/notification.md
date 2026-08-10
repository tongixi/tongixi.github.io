---
title: 简单通知
summary: 基于 Kotlin 和 TCP 协议开发的 Android 独立通知助手，通过巴法云 TCP 协议订阅 Topic，实现数据变化时的系统通知推送与本地历史管理。
date: 2026.07 - 2026.08
type: 软件系统
role: Android 独立开发
technologies: [Kotlin, TCP, SQLite, Android]
featured: true
order: 7
accent: "#3157d5"
cover: /img/easy-notification-cover.jpg
coverAlt: 简单通知应用界面
links:
  - name: GitHub 项目
    url: https://github.com/tongixi/EasyNotification
  - name: 下载 APK
    url: https://github.com/tongixi/EasyNotification/blob/main/app/build/outputs/apk/debug/app-debug.apk
gallery:
  - src: /img/easy-notification-main.jpg
    alt: 简单通知主界面
    caption: 主监控页面，配置服务器、Topic 和读取间隔。
  - src: /img/easy-notification-history.jpg
    alt: 简单通知历史记录
    caption: 通知历史页面，支持单条删除和清空。
---

## 项目概述

开发一款不依赖第三方推送服务的 Android 独立通知应用。通过 TCP 协议订阅巴法云 Topic，在数据变化时触发系统标准通知，并支持本地历史记录管理，为物联网设备状态监控提供轻量级提醒方案。

## 主要工作

- 设计并实现基于前台服务的 TCP 长连接管理，包含订阅、轮询、心跳保活和指数退避重连机制。
- 实现多 UID/Topic 基准值隔离存储，确保切换账号后不会误判数据变化。
- 开发 SQLite 本地历史数据库，支持通知记录的增删查改和单条撤销恢复。
- 解析 msg 字段中的 JSON 结构化通知（标题 + 正文），兼容纯文本回退。
- 适配 Android 8.0~15 通知系统，使用独立 Channel 和唯一 Tag/ID，确保每次变化独立显示且不被覆盖。
- 实现 Material 3 风格界面，包含监控控制、历史列表和关于页面。
- 集成系统权限引导（通知权限、电池优化白名单），提升后台运行可靠性。
- 协议层与服务器地址解耦，未来可替换为自建服务端。

## 能力体现

覆盖 Android 前台服务、TCP 长连接、SQLite 数据持久化、Material Design 界面开发和系统通知管理的完整客户端研发能力。
