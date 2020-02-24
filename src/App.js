import React from 'react';
import logo from './logo.svg';
import { mdiCheck } from '@mdi/js';
import './reset.css';
import './App.css';
import styles from './Coaches.module.css';
import CoachesList from "./components/CoachesList";
import MarkCoaches from "./components/MarkCoaches";


function App () {
  return (
    <div className={styles.coachesContainer}>
        <MarkCoaches/>
      <CoachesList/>
    </div>

  );
}


export default App;