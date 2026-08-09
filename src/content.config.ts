import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const externalLink = z.object({
  label: z.string(),
  url: z.string(),
  type: z.enum(["github", "demo", "paper", "video", "profile", "email", "phone", "other"]).default("other"),
  enabled: z.boolean().default(true),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    initials: z.string().max(4),
    headline: z.string(),
    summary: z.string(),
    location: z.string(),
    age: z.number(),
    party: z.string(),
    target: z.string(),
    current: z.string(),
    focusAreas: z.array(z.string()),
    email: z.string().email(),
    showNews: z.boolean().default(true),
    resume: z.object({
      enabled: z.boolean().default(true),
      file: z.string(),
      label: z.string().default("下载 PDF 简历"),
      updated: z.string().optional(),
    }),
    contacts: z.array(externalLink).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    type: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#3157d5"),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    links: z.array(externalLink).default([]),
  }),
});

const academics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/academics" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["论文", "专利", "软件著作权", "大学生创新创业训练计划", "著作", "会议报告", "其他"]),
    date: z.string(),
    venue: z.string(),
    authors: z.array(z.string()).default([]),
    status: z.string().optional(),
    summary: z.string(),
    order: z.number().default(99),
    links: z.array(externalLink).default([]),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/awards" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    level: z.string().optional(),
    description: z.string().optional(),
    order: z.number().default(99),
    link: externalLink.optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    major: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string().optional(),
    gpa: z.string().optional(),
    order: z.number().default(99),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string().optional(),
    technologies: z.array(z.string()),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    categories: z.array(z.object({
      name: z.string(),
      items: z.array(z.string()),
    })),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.enum(["项目", "学术", "获奖", "经历", "其他"]),
    link: z.string().optional(),
  }),
});

export const collections = {
  profile,
  projects,
  academics,
  awards,
  education,
  experience,
  skills,
  news,
};
