# Mood & Rant Tracker

A React-based web application for tracking daily moods and personal reflections. This project allows users to log their moods and write more detailed journal entries or "rants" about their day. Perfect for anyone who wants to maintain a digital diary for self-expression and self-reflection.

## Features

### Mood Tracker
- **Quick Mood Entry**: Users can quickly log a mood (e.g., 😊, 😢, etc.) and a short reflection to capture the day's feeling.
- **Mood History**: Entries are displayed in a list format with the newest moods at the top, allowing users to easily browse through past moods.

### Rant Journal
- **Detailed Reflections**: The Rant Journal section enables users to write longer entries, adding more detail and context to their reflections.
- **Mood Selection for Entries**: Users can tag each rant entry with a mood (e.g., 😊 Happy, 😔 Sad, 😡 Angry) to capture the tone of the entry.
- **Entry Date**: Each entry is automatically timestamped with the date it was created.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A basic understanding of React is helpful but not required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/paullarasales/mood-rant-tracker.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd mood-rant-tracker
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the development server**
   ```bash
   npm start
   ```
   This command will start the React app locally on [http://localhost:3000](http://localhost:3000).

### Usage

1. **Mood Tracker**
   - Use the main form to select a mood and add a quick reflection about your day.
   - Submit the form to add the mood to your history, which will display in the list below.

2. **Rant Journal**
   - Enter a title (optional) and write a detailed rant or reflection about your day.
   - Select a mood that best represents your entry's tone.
   - Submit the form to add the rant to the list of entries, displayed in chronological order.

## Project Structure

- **`App.js`**: Main component that holds the application state and renders the Mood Tracker and Rant Journal.
- **`MoodForm.js`**: Form component for adding quick mood entries.
- **`MoodList.js`**: Displays the list of mood entries.
- **`RantJournal.js`**: Form component for adding detailed rants with optional title and mood selection.

## Example

1. **Mood Tracker**: Log your daily mood quickly.
   - Select a mood: 😊, 😢, 😡, etc.
   - Add a short reflection, and it will appear in your mood history.

2. **Rant Journal**: Write detailed reflections.
   - Enter a title, write a detailed entry, and tag it with a mood.
   - Entries appear below with the newest at the top.

## Future Ideas

- **Filtering by Mood**: Add a filter to display entries by specific moods.
- **Encouraging Messages**: Display supportive messages based on the user’s mood.

## License

This project is licensed under the MIT License.

---

### Happy Mood Tracking! 😊

--- 
