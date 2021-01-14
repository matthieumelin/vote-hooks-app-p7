import React, { useState } from 'react'

import Votes from "./Votes";

function Question({data, setPolls}) {
    const [countAnswerVisible, setCountAnswerVisible] = useState(false);
    const [userAnswer, setUserAnswer] = useState(1);

    const handleVote = (event) => {
        event.preventDefault();

        setCountAnswerVisible(true);
    }

    const handleAnswer = (event) => {
        setUserAnswer(event.target.value);
    }

    return (
        <div className="card mb-3">
            <div className="card-header bg-primary text-white border-primary">
                {data.title}
            </div>
            <div className="card-body">
                <form>
                    {data.answers.map(answer => {
                        const answerId = "q" + data.id + "a" + answer.id;
                        return <div key={answer.id} className="form-check">
                            <input type="radio" name={"q" + data.id} id={answerId} value={answer.id} className="form-check-input"
                            onChange={handleAnswer} />
                            <label htmlFor={answerId} className="form-check-label">{answer.name} {countAnswerVisible ? answer.votes : null}</label>
                        </div>
                    })}
                </form>
            </div>
            <div className="card-footer bg-transparent">
                <button className="btn btn-primary" onClick={handleVote}>Voter</button>
                <Votes />
            </div>
        </div>
    )
}

export default Question;