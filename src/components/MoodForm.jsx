import React, { useState } from 'react';

function MoodForm({ addEntry }) {
    const [mood, setMood] = useState('');
    const [reflection, setReflection] = useState('');

    const handleChangeMood = (event) => {
        setMood(event.target.value);
    }

    const handleReflectionChange = (event) => {
        setReflection(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addEntry({ mood, reflection, data: new Date().toLocaleDateString() });
        setMood('');
        setReflection('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Hi baby?? How are you feeling today?</h3>
            <select value={mood} onChange={handleChangeMood} required>
                <option value="">Select Mood</option>
                <option value="😊">Happy</option>
                <option value="😢">Sad</option>
                <option value="😡">Angry</option>
                <option value="😌">Relaxed</option>
            </select>
            <textarea 
                placeholder="Rant about your day..."
                value={reflection}
                onChange={handleReflectionChange}
                required         
            />
            <button type="submit">Add Entry</button>
        </form>
    );
}  

export default MoodForm;