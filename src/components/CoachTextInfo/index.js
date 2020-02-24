import React from "react";
import styles from '../CoachesList/CoachesList.module.css'

function CoachTextInfo (props) {
    const {firstName, lastName, level} = props.coach;
    return <div className={styles.coachInfoContainer}>
        <h1
            className={styles.shaneMitchell}>{`${firstName} ${lastName}`}</h1>
        <h2 className={styles.coachLevel}>{`Level ${level}`}</h2>
    </div>
}

export default CoachTextInfo;