const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export function withBase(path = "") {
  const normalized = path.replace(/^\/+/, "");
  return `${base}${normalized}`;
}

export function assetUrl(path: string) {
  return /^https?:\/\//.test(path) ? path : withBase(path);
}

export function externalTypeLabel(type: string) {
  const labels: Record<string, string> = {
    github: "GitHub",
    demo: "在线演示",
    paper: "论文",
    video: "视频",
    profile: "个人主页",
    email: "邮箱",
    phone: "电话",
    other: "外部链接",
  };
  return labels[type] ?? "外部链接";
}
