import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll have routing setup

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Subtitle and Data Visualization Project</h1>
        <p>Your one-stop solution for analyzing and visualizing subtitle data.</p>
      </header>

      <main style={styles.main}>
        <section style={styles.intro}>
          <h2>Welcome!</h2>
          <p>
            This project allows you to explore and visualize subtitle data in various formats. 
            Dive deep into the analysis of subtitles and see how data can be represented through charts and graphs.
          </p>
        </section>

        <section style={styles.buttons}>
          <Link to="/subtitle-analysis">
            <button style={styles.button}>Subtitle Analysis</button>
          </Link>
          <Link to="/stats">
            <button style={styles.button}>Data Visualization</button>
          </Link>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Subtitle and Data Visualization Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
  intro: {
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
  }
};

export default Home;
