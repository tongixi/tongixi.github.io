---
title: 智能电子工牌
summary: 基于ESP32-S3设计智能电子工牌，实现语音采集、本地存储以及通过BLE与Wi-Fi向移动端传输数据。
date: 2025.04 - 2025.11
type: 智能硬件
role: 硬件与嵌入式软件开发
technologies: [ESP32-S3, FreeRTOS, BLE 5.0, Wi-Fi, I2S, SDIO, PCB设计]
featured: true
order: 1
accent: "#3157d5"
cover: /img/smart-electronic-badge-front.jpg
coverAlt: 智能电子工牌正面样机
links: []
gallery:
  - src: /img/smart-electronic-badge-front.jpg
    alt: 智能电子工牌正面样机
    caption: 智能电子工牌正面外观与电源按键。
  - src: /img/smart-electronic-badge-rear.jpg
    alt: 智能电子工牌背面样机
    caption: 智能电子工牌背面结构与样机装配效果。
---

## 项目概述

围绕语音采集、数据存储和移动端传输需求，完成智能电子工牌从硬件方案、PCB设计、样机装配到嵌入式软件开发与调试的完整实现。

## 主要工作

- 根据产品功能完成主控选型，采用ESP32-S3作为核心MCU，设计电源管理、锂电池充放电、USB-UART调试、音频采集和无线通信等外围电路。
- 针对主控、无线通信和音频采集模块完成供电设计与稳定性测试。
- 设计I2S数字麦克风接口，实现语音数据采集；设计SDIO接口，实现本地数据存储。
- 使用立创EDA完成原理图和PCB Layout，包括元器件布局、电源网络规划与信号走线，并跟进PCB打样和样机装配。
- 使用示波器完成电源电压与关键节点测试，验证样机硬件稳定性。
- 基于FreeRTOS实现任务调度、外设驱动、BLE/Wi-Fi通信和数据传输。

## 能力体现

覆盖硬件方案设计、PCB开发、嵌入式软件、无线通信和样机调试的全流程智能硬件研发经验。
