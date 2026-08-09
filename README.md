# 极简个人简历主页

一个使用 Astro 和 Markdown 构建的纯静态个人主页，可直接部署到 GitHub Pages。项目包含项目搜索与筛选、项目详情页、深色模式、教育经历、学术成果、获奖、近期动态、PDF 简历下载、联系方式和响应式布局。

## 本地运行

需要 Node.js 24 或更高版本。

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 修改个人内容

所有主要内容都在 `src/content/` 中：

| 路径 | 内容 |
| --- | --- |
| `profile/profile.md` | 姓名、简介、联系方式、PDF 简历设置 |
| `projects/*.md` | 项目卡片和项目详情 |
| `academics/*.md` | 论文、专利、著作和会议报告 |
| `education/*.md` | 教育经历 |
| `awards/*.md` | 获奖经历 |
| `skills/skills.md` | 技能分类 |
| `news/*.md` | 可选的近期动态 |

当前已经填入冯楠的个人资料。发布前建议再次核对电话、邮箱、教育时间、实习状态和项目时间；如需展示 GitHub，在 `profile/profile.md` 中填写真实地址并将对应链接的 `enabled` 改为 `true`。

### 添加项目

复制 `src/content/projects/` 中的任意 Markdown 文件，修改顶部字段和正文即可。文件名会成为详情页地址，例如：

```text
src/content/projects/my-project.md
→ /projects/my-project/
```

外部链接支持 GitHub、在线演示、论文、视频和其他主页。将 `enabled` 设置为 `false` 可以暂时隐藏链接。

### 添加项目图片

将图片放入 `public/images/projects/`，然后在项目 Markdown 顶部配置封面和图集：

```yaml
cover: /images/projects/badge/cover.jpg
coverAlt: 智能电子工牌PCB与样机
gallery:
  - src: /images/projects/badge/schematic.jpg
    alt: 智能电子工牌原理图
    caption: 电源、音频采集与无线通信电路
  - src: /images/projects/badge/pcb.jpg
    alt: 智能电子工牌PCB
    caption: PCB Layout与打样结果
```

没有设置 `cover` 时会继续显示当前的几何封面。详情页正文中也可以使用标准 Markdown 图片语法插入说明图。

### 新闻栏目

在 `src/content/news/` 添加 Markdown 文件即可显示动态。首页最多显示最近四条。

如果暂时不需要新闻栏目，在 `profile/profile.md` 中设置：

```yaml
showNews: false
```

### PDF 简历

网站下载按钮读取：

```text
public/resume.pdf
```

项目附带根据当前内容生成的两页 PDF 简历。如后续更新经历，可直接用新版文件覆盖它，并同步更新 `profile/profile.md` 中的 `resume.updated`。

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库并上传本项目。
2. 确保默认分支名为 `main`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
5. 推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建和发布。

工作流会自动识别普通项目仓库的子路径，例如 `https://username.github.io/repository/`。如果仓库名是 `username.github.io`，则发布在根路径。

## 隐私提醒

GitHub Pages 和仓库中的内容通常会公开。不要提交身份证件、详细住址、私人手机号、未脱敏证书或其他敏感信息。
