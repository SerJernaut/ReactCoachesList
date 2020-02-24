import React from "react";
import styles from "../../Coaches.module.css";
import Avatar from "../Avatar";
import CheckMark from "../CheckMark";
import CoachTextInfo from "../CoachTextInfo";
const coaches = [
    {
        id: 1,
        firstName: 'Brian',
        lastName: 'McCauley',
        level: 1,
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
    },
    {
        id: 2,
        firstName: 'Chad',
        lastName: 'Hayes',
        level: 2,
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

    },
    {
        id: 3,
        firstName: 'Jeff',
        lastName: 'Buck',
        level: 2,
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

    },
    {
        id: 4,
        firstName: 'Kenny',
        lastName: 'Griffin',
        level: 3,
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

    },
    {
        id: 5,
        firstName: 'Tom',
        lastName: 'Glover',
        level: 3,
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
    }
];

class CoachesList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            coaches: coaches,
            error: null
        };
    }

    renderCoaches = () => {
        const { coaches } = this.state;
        return coaches.map((coach) => {
            return (

                <div id={coach.id} key={coach.id} className={styles.coachContainer}>
                    <Avatar src={coach.profilePicture}/>
                    <CoachTextInfo coach={coach}/>
                    <CheckMark coach={coach}/>
                </div>
            );
        });
    };

    render () {
        const { error } = this.state;
        if (error) {
            return <div>Error</div>;
        } else {
            return (
                this.renderCoaches()
            );

        }

    }
}

export default CoachesList;