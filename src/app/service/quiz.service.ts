import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Observable } from 'rxjs';

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questionsUrl = 'assets/Quiz/quiz.csv';

  constructor(private http: HttpClient) {}

  loadQuestions(): Observable<QuizQuestion[]> {
    return this.http.get(this.questionsUrl, { responseType: 'text' })
      .pipe(
        map(data => Papa.parse(data, { header: false }).data as string[][]),
        map(results => results.map(line => ({
          question: line[0],
          options: [line[1], line[2], line[3]], // Assuming the first option is always the correct one
          answer: line[1]
        }))),
        map(questions => this.shuffleArray(questions)) // Randomize questions order
      );
  }

  // Fisher-Yates shuffle algorithm
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
