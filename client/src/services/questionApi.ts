import type { Question } from '../models/Question.js';

const apiUrl = import.meta.env.VITE_API_URL;

export const getQuestions = async (): Promise<Question[]> => {
  try {
    // Use the apiUrl for the request
    const response = await fetch(`${apiUrl}/api/questions/random`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
