export enum ActivityType {
  FLIGHT = 'FLIGHT',
  TRAIN = 'TRAIN',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  REST = 'REST',
  TRANSIT = 'TRANSIT'
}

export interface ScheduleItem {
  time: string;
  description: string;
  note?: string; // Additional helpful context
  type: ActivityType;
}

export interface DayPlan {
  date: string; // e.g., "1/13 (二)"
  dayNumber: number; // e.g., 1
  title: string; // e.g., "啟程：飛往歐亞交界"
  accommodation?: string;
  schedule: ScheduleItem[];
  highlight?: string; // A one-line summary of the day's vibe
}

export interface CitySectionData {
  city: string;
  country: string;
  description: string;
  days: DayPlan[];
  imagePrompt: string; // For placeholder images
}

export interface TipData {
  id: string;
  title: string;
  content: string;
  icon: 'luggage' | 'camera' | 'ticket' | 'shoes';
}