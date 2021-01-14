import { useState } from 'react';
import './App.css';

import Question from "./components/Question";

function App() {
  const [polls, setPolls] = useState(
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
    ]
  )

  return (
    <div className="container">
      {polls.map(poll => {
        return <Question key={poll.id} data={poll} setPolls={setPolls} />
      })}
    </div>
  );
}

export default App;
