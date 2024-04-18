import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuizService, QuizQuestion } from 'app/service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: QuizQuestion | null = null;
  score: number = 0;
  quizForm: FormGroup;
  quizFinished: boolean = false;
  userId: number = 3;
  totalQuestions: number = 0;

  constructor(private quizService: QuizService, private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      selectedAnswer: ['']
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('quizTaken') === 'true') {
      this.quizFinished = true;
      this.score = parseInt(localStorage.getItem('quizScore'), 10) || 0;
    } else {
      this.loadQuiz();
    }
  }

  loadQuiz(): void {
    this.quizService.loadQuestions().subscribe(
      data => {
        this.questions = data;
        this.totalQuestions = this.questions.length;  // S'assurer que ceci est bien mis à jour
        this.setCurrentQuestion();
      },
      error => {
        console.error('Error loading questions:', error);
      }
    );
  }

  setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.quizForm.controls['selectedAnswer'].reset();
  }

  submitAnswer(): void {
    const selectedAnswer = this.quizForm.get('selectedAnswer')?.value;
    if (selectedAnswer === this.currentQuestion?.answer) {
      this.score++;
    }
    this.nextQuestion();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
    } else {
      this.endQuiz();
    }
  }

  endQuiz(): void {
    this.quizFinished = true;
    let scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    scores[this.userId] = { score: this.score, total: this.totalQuestions };
    localStorage.setItem('quizScores', JSON.stringify(scores));
  }
  

  

// Ajoutez cette méthode dans votre composant QuizComponent si elle n'existe pas déjà
restartQuiz(): void {
  this.score = 0;
  this.currentQuestionIndex = 0;
  this.quizFinished = false;
  this.loadQuiz(); // Vous aurez peut-être besoin de recharger ou de réinitialiser les questions
}


}
