import React from 'react';

function Prompt() {
    const prompts = [
        "Remember, every day is a fresh start",
        "You've got this baby!",
        "Take a deep breath, and be kind to yourself."
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    return (
        <div>
            <h4>Daily Motivation</h4>
            <p>{randomPrompt}</p>
        </div>
    )
}

export default Prompt;