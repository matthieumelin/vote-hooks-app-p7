import React, { useState } from 'react'

function Question({ data, changeQuestion }) {
    const [countAnswerVisible, setCountAnswerVisible] = useState(false);
    const [userAnswer, setUserAnswer] = useState(1);
    const [checked, setChecked] = useState(false);
    const [voted, setVoted] = useState(false);

    const handleVote = (event) => {
        if (!voted && checked) {
            // désactiver le rafraichissement du formulaire
            event.preventDefault();

            // rendre visible le nombre de votes
            setCountAnswerVisible(true);

            // recuperaton de la liste des questions
            const newQuestion = { ...data };

            // on récupere les réponses de la question et on incremente +1 aux votes
            newQuestion.answers[userAnswer - 1].votes++;

            // on remplace la nouvelle question
            changeQuestion(newQuestion);

            // dire qu'on a voter
            setVoted(true);
        }
    }

    const handleAnswer = (event) => {
        setUserAnswer(event.target.value);
        setChecked(event.target.value);
    }

    return (
        <div className="question">
            { voted ? <div class="alert alert-success" role="alert">Votre vote à était pris en compte.</div> : null }
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
                </div>
            </div>
        </div>
    )
}

export default Question;