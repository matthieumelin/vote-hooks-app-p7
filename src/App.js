import { useState } from 'react';
import './App.css';

import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState(
    [{
      id: 1,
      title: "Question 1",
      answers: [
        { id: 1, name: "Oui", votes: 0 },
        { id: 2, name: "Non", votes: 0 },
      ]
    },
    {
      id: 2,
      title: "Question 2",
      answers: [
        { id: 1, name: "Oui", votes: 0 },
        { id: 2, name: "Non", votes: 0 },
      ]
    },
    {
      id: 3,
      title: "Question 3",
      answers: [
        { id: 1, name: "Oui", votes: 0 },
        { id: 2, name: "Non", votes: 0 },
      ]
    }
    ])

  const changeQuestion = (newQuestion) => {
    // création d'une variable constante qui va contenir toutes les questions avec ses propriétés
    const tempQuestions = [...questions];
    // findIndex renvoie le premiere index de la liste et on verifie que l'id de la question est égale a la meme que la nouvelle
    const newQuestionId = tempQuestions.findIndex(
      question => question.id === newQuestion.id);

    // remplacement de l'ancienne question par la nouvelle
    tempQuestions[newQuestionId] = newQuestion;

    // mise a jour la liste des questions
    setQuestions(tempQuestions);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Votes</h1>
      <div className="questions mt-5">
        {questions.map(question => {
          return <Question key={question.id} data={question} changeQuestion={changeQuestion} />
        })}
      </div>
    </div>
  );
}

export default App;
