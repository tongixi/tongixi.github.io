---
title: 面向自动驾驶的多模态感知算法研究
summary: 研究图像与LiDAR点云的BEV空间特征融合，同时自主设计SXM2转PCIe硬件并搭建双GPU训练平台。
date: 2024.12 - 2025.12
type: 算法与硬件平台
role: 算法研究与硬件设计
technologies: [Python, PyTorch, Transformer, BEVFusion, PCIe, STM32, PCB设计, CUDA]
featured: true
order: 3
accent: "#0e8a72"
cover: /img/autonomous-driving-visualization.jpg
coverAlt: 自动驾驶多模态感知可视化界面
links: []
gallery:
  - src: /img/autonomous-driving-visualization.jpg
    alt: 自动驾驶多模态感知可视化界面
    caption: 自动驾驶场景中的车辆、道路与感知目标可视化。
  - src: /img/autonomous-driving-bev-detection.jpg
    alt: BEV空间目标检测结果
    caption: BEV空间中的多类别目标检测框与位置分布结果。
  - src: /img/nvidia-v100-module.jpg
    alt: NVIDIA V100 GPU模块与PCIe转接硬件
    caption: 用于双GPU训练平台的NVIDIA V100模块及转接硬件。
---

## 项目概述

针对自动驾驶多模态感知中的图像与LiDAR点云融合问题，开展BEV空间特征融合算法研究。为解决实验室训练算力不足的问题，自主设计SXM2转PCIe转接板并搭建双GPU计算环境。

## 感知算法

- 基于Transformer设计跨模态特征融合模块，实现图像与LiDAR点云在BEV空间中的特征对齐。
- 融合历史帧信息，提升复杂场景下的感知稳定性。
- 完成训练环境配置、模型训练和实验结果分析。

## GPU计算平台

- 针对NVIDIA SXM2 GPU接口设计SXM2转PCIe转接板，完成高速信号连接、电源管理和PCB Layout。
- 完成GPU供电和辅助控制电路设计，并进行电源模块选型。
- 基于STM32设计智能散热控制模块，实现风扇PWM调速、主机状态监控与控制参数下发。
- 完成硬件装配和系统联调，搭建双NVIDIA V100计算平台，验证长时间训练稳定性。

## 能力体现

将深度学习算法研究、高速硬件设计、嵌入式控制和计算平台搭建结合在同一项目中。
