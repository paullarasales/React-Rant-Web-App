import React from 'react';

function MoodList({ entries }) {
    return (
        <div>
            <h3>Your past entries</h3>
            <ul>
                { entries.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.date}</strong> - {entry.mood}
                        <p>{entry.reflection}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MoodList;