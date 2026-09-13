export type DevStackTheme =
  | "react"
  | "nextjs"
  | "nodejs"
  | "express"
  | "mongodb"
  | "postgresql"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "sass"
  | "docker"
  | "kubernetes"
  | "git"
  | "github"
  | "vscode";

export interface IdevStacksType {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
  theme: DevStackTheme;
}
