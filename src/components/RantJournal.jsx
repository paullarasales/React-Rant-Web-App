import React, { useState } from 'react';

function RantJournal({ addRant }) {
    const [title, setTitle] = useState('');
    const [rant, setRant] = useState('');
    const [mood, setMood] = useState('🙂');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleRantChange = (event) => {
        setRant(event.target.value);
    }

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addRant({ title, rant, mood, date: new Date().toLocaleDateString() });
        setTitle('');
        setRant('');
        setMood('🙂');
    };
    
    return (
        <div>
            <h2>Rant Journal</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title (optional)"
                    value={title}
                    onChange={handleTitleChange}            
                />
                <textarea 
                    placeholder="What's on your mind?"
                    value={rant}
                    onChange={handleRantChange}
                    required        
                ></textarea>
                <label>
                    Mood:
                    <select value={mood} onChange={handleMoodChange}>
                        <option value="🙂">🙂 Neutral</option>
                        <option value="😊">😊 Happy</option>
                        <option value="😔">😔 Sad</option>
                        <option value="😡">😡 Angry</option>
                    </select>
                </label>
                <button type="submit">Add Rant</button>
            </form>
        </div>
    );
}       

export default RantJournal;