import React from 'react';

function Score({player, score}) {
    return (
        <div class="score-box" id={player + "-score"}>
            <p class="badge center-horiz">{player}</p>
            <p class="score center-horiz">{score}</p>
        </div>
    )
}

export default Score;