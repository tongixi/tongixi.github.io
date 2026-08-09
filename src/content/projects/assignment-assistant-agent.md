---
title: 作业提交辅助 Agent
summary: 面向助教工作的邮件作业处理系统，自动完成邮件抓取、附件解析、OCR、大模型推理、回复和作业归档。
date: 2024.10 - 2025.02
type: AI Agent / 软件系统
role: 独立设计与开发
technologies: [Python, FastAPI, Linux, LangChain, OCR, llama.cpp, Prompt Engineering]
featured: true
order: 2
accent: "#8057c8"
cover: /img/assignment-assistant-agent.jpg
coverAlt: 作业提交辅助Agent邮件自动检查界面
links: []
gallery:
  - src: /img/assignment-assistant-agent.jpg
    alt: 作业提交辅助Agent邮件自动检查界面
    caption: 系统自动连接邮箱、检索作业邮件并检查附件命名。
---

## 项目背景

针对助教工作中作业邮件命名混乱、附件格式多样、人工归档和批改工作量大等问题，独立设计并实现作业提交辅助Agent系统。

## 系统设计

构建邮件处理、附件解析与大模型推理的自动化决策流程：系统自动抓取作业邮件并提取附件，对图片、PDF和文档等非结构化内容调用OCR与文档解析工具，再将结构化结果交给本地大模型或DeepSeek API分析，根据结果生成邮件回复并完成作业归档。

## 主要工作

- 基于FastAPI构建轻量级Web服务，实现邮件抓取、附件提取和处理任务编排。
- 针对纯文本大模型无法直接处理图片、PDF等附件的问题，将OCR和文档解析模块封装为Agent外部工具。
- 使用LangChain组织工具调用与推理流程，并通过Prompt Engineering约束作业识别、异常处理和回复策略。
- 支持本地llama.cpp模型与DeepSeek API两种推理方式，兼顾校园内网部署与云端能力。
- 将系统部署在CentOS校园内网环境，并通过宝塔面板完成服务管理与运行维护。
- 实现处理结果回复、作业命名规范化和自动归档，降低助教重复操作成本。

## 项目成果

获得计算机软件著作权，登记号：2026SR0588929。
