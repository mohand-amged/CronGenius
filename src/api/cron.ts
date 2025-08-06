import axios from 'axios';
import type { CronGenerateResponse, CronExplainResponse, HistoryEntry } from '../types';

const API_BASE_URL = 'http://localhost:5000';

// Create axios instance with common config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const generateCron = async (prompt: string): Promise<CronGenerateResponse> => {
  try {
    const response = await api.post('/api/cron/generate', { prompt });
    return response.data;
  } catch (error) {
    console.error('Error generating cron:', error);
    throw new Error('Failed to generate cron expression');
  }
};

export const explainCron = async (cron: string): Promise<CronExplainResponse> => {
  try {
    const response = await api.post('/api/cron/explain', { cron });
    return response.data;
  } catch (error) {
    console.error('Error explaining cron:', error);
    throw new Error('Failed to explain cron expression');
  }
};

export const fetchHistory = async (): Promise<HistoryEntry[]> => {
  try {
    const response = await api.get('/api/cron/history');
    return response.data;
  } catch (error) {
    console.error('Error fetching history:', error);
    throw new Error('Failed to fetch history');
  }
};

// Auth API functions
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Invalid credentials');
  }
};

export const signupUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw new Error('Failed to create account');
  }
};