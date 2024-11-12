import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrls: [],
})
export class QuestionsComponent {
  // Método para manejar el clic en una pregunta
  toggleQuestion(event: Event) {
    const currentTarget = event.currentTarget as HTMLElement;
    const questionTitle = currentTarget.querySelector('.question-title');
    const answer = currentTarget.querySelector('.question-answer');
    const allQuestions = document.querySelectorAll('.faq-item');

    // Recolectar todas las preguntas abiertas y cerrarlas
    allQuestions.forEach((question) => {
      const otherAnswer = question.querySelector('.question-answer');
      const otherTitle = question.querySelector('.question-title');
      if (otherAnswer && otherTitle) {
        if (otherAnswer !== answer) {
          otherAnswer.classList.add('hidden');
          otherTitle.classList.remove('bg-blue-700', 'text-white');
        }
      }
    });

    // Alternar visibilidad de la respuesta actual
    if (answer && questionTitle) {
      const isHidden = answer.classList.contains('hidden');
      if (isHidden) {
        answer.classList.remove('hidden');
        questionTitle.classList.add('bg-blue-700', 'text-white');
      } else {
        answer.classList.add('hidden');
        questionTitle.classList.remove('bg-blue-700', 'text-white');
      }
    }
  }
}