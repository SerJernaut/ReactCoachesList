import React from "react";
import styles from "./CheckMark.module.css";
import Icon from "@mdi/react";
import {mdiCheck} from "@mdi/js";
import {updateMarkCoaches} from "../MarkCoaches";

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
                     updateMarkCoaches(this.props.coach);
                     this.onCheckHandler();
                 }
                 }>
                <Icon path={mdiCheck} color="white"/>
            </div>
        )
    }
}

export default CheckMark;