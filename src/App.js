import React from 'react';
import logo from './logo.svg';
import { mdiCheck } from '@mdi/js';
import './reset.css';
import './App.css';
import styles from './Coaches.module.css';
import styles2 from './Avatar.module.css';
import Icon from '@mdi/react';

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

function App () {
  return (
    <div className={styles.coachesContainer}>
      <CoachesLoader/>
    </div>

  );
}

class CoachesLoader extends React.Component {
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
          <div className={styles.coachInfoContainer}>
            <h1
              className={styles.shaneMitchell}>{`${coach.firstName} ${coach.lastName}`}</h1>
            <h2 className={styles.coachLevel}>{`Level ${coach.level}`}</h2>
          </div>
          <CheckMark/>

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

export default App;

class Avatar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null
    };
  }

  onErrorHandler = (e) => {
    this.setState({
                    error: e.error,
                  });
  };

  render () {
    if (this.state.error) {
      return null;
    } else {
      return (
        <div className={styles2.avatarContainer}><img
          src={this.props.src || ''}
          alt={this.props.alt}/></div>
      );
    }
  }

}

class CheckMark extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(this.state);
  }

  onCheckHandler = () => {
    this.setState({
                    isChecked: !this.state.isChecked,
                  });
  };

  render () {

    return (
      <div className={[
        styles.roundCheckItem,
        this.state.isChecked
        ? styles.checkedMark
        : ''].join(' ')}
           onClick={event => {
             this.onCheckHandler();
           }
           }>
        <Icon path={mdiCheck} color="white"/>
      </div>
    )
      ;

  }

}

