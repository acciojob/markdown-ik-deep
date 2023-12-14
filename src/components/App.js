// import { marked } from 'marked';
import React, { useState, useEffect } from 'react';
// import marked from 'marked';
// import './App.css'; // Import your CSS file for styling

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation like fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <h2>Markdown Editor</h2>
        <textarea
          placeholder="Write your markdown here..."
          value={markdown}
          onChange={handleMarkdownChange}
        ></textarea>
      </div>
      <div className="preview">
        <h1><b>Heading</b></h1>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div><strong>{markdown}</strong></div>
        )}
      </div>
    </div>
  );
};

export default App;
