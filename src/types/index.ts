export interface User {
  id: string;
  email: string;
}

export interface HistoryEntry {
  id: string;
  input: string;
  cron?: string;
  explanation: string;
  createdAt: string;
}

export interface CronGenerateResponse {
  cron: string;
  explanation: string;
}

export interface CronExplainResponse {
  explanation: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}