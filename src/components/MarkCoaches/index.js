import React from "react";
import styles from './MarkCoaches.module.css';

export function updateMarkCoaches(coach) {
    if (this.state.coaches.includes(coach)) {
        this.setState({
            coaches: this.state.coaches.filter(el => el !== coach)
        });
        return;
    }
    this.setState({coaches: [...this.state.coaches, coach]});
}

class MarkCoaches extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            coaches: []
        };
        updateMarkCoaches= updateMarkCoaches.bind(this);
    }

    renderCoaches = () => {
        const [...coaches] = this.state.coaches;
        if (coaches) {
            return coaches.map((coach) => {
                return (
                    <div key={coach.id} className={styles.markedCoaches}>{coach.firstName + " " + coach.lastName +","}</div>
                );
            })
        }

    };

    render() {
        return (
            <div className={styles.markedCoachesContainer}>
                <div className={styles.toElement}>To:</div>
                {this.renderCoaches()}
            </div>
        )
    }

}

export default MarkCoaches;