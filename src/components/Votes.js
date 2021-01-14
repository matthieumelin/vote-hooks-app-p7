import React, { useState } from 'react'

function Votes() {
    const [votes, setVotes] = useState(0);

    return (
        <div>
            {votes}
        </div>
    )
}

export default Votes;