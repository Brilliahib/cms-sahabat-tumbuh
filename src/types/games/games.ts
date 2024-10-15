export interface Games {
  id: number;
  title: string;
  type_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface DetailGames {
  title: string;
  type: number;
  questions: QuestionGames[];
}

export interface QuestionGames {
  question_id: number;
  question_text: string;
  question_image: File;
  choices: ChoicesGames[];
}

export interface ChoicesGames {
  choice_id: number;
  choice_text: string;
  choice_image: File;
  is_correct: Boolean;
}

export interface GamesType {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
