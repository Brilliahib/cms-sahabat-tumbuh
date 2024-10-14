export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export interface RankUser {
  id: number;
  name: string;
  total_score: number;
  rank: number;
}
