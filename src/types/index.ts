export type Role = 'USER' | 'ADMIN';
export type Plan = 'FREE' | 'PRO';
export type ProjectType = 'BUSINESS' | 'STORY' | 'IDEA' | 'OTHER';
export type AIModel = 'gemini' | 'gemma' | 'qwen';

export interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: Plan;
  status: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  userId: string;
  type: ProjectType;
  title: string;
  description: string | null;
  status: string;
  data: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Roadmap {
  id: string;
  projectId: string;
  title: string;
  steps: RoadmapStep[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RoadmapStep {
  id: string;
  number: number;
  title: string;
  description: string;
  tasks: Task[];
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string | null;
  model: AIModel;
  createdAt: Date;
  updatedAt: Date;
  messages?: Message[];
}