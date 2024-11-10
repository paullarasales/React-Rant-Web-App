import React, { useState } from 'react';
import MoodForm from './components/MoodForm';
import MoodList from './components/MoodList';
import Prompt from './components/Prompt';
import RantJournal from './components/RantJournal';
import './App.css';

function App() {
    const [entries, setEntries] = useState([]);
    const [rants, setRants] = useState([]);

    const addEntry = (entry) => {
        setEntries([entry, ...entries]);
    };

    const addRant = (rant) => {
        setRants([rant, ...rants]);
    }

    return (
        <div className="App">
            <h1>Mood & Rant Tracker</h1>
            <MoodForm addEntry={addEntry} />
            <MoodList entries={entries} />
            <Prompt />
            <RantJournal addRant={addRant} />
            <div>
                <h2>All Rants</h2>
                {rants.map((rant, index) => (
                    <div key={index}>
                        <h3>{rant.title || "Untitled"}</h3>
                        <p>{rant.rant}</p>
                        <p>Mood: {rant.mood}</p>
                        <p>Date: {rant.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;