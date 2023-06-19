import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Tensae Aschalew's Portfolio</h1>
      </header>
      <section className="hero">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Ethiopian Traditional Beverage Website</h3>
            <p>A website that showcases different Ethiopian traditional beverages and their history.</p>
          </div>
          <div className="project-card">
            <h3>Hospital Management System</h3>
            <p>A system that helps hospitals manage patient data, appointments, and medical records.</p>
          </div>
          <div className="project-card">
            <h3>Chatbot in React Native</h3>
            <p>A chatbot built using React Native that can answer questions related to a specific topic.</p>
          </div>
          <div className="project-card">
            <h3>Quiz Management System</h3>
            <p>A system that allows teachers to create and manage quizzes for their students.</p>
          </div>
          <div className="project-card">
            <h3>Online Shopping System</h3>
            <p>An e-commerce website that allows users to browse and purchase products online.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;