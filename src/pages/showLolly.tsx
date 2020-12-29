import * as React from 'react';
import Lolly from "../components/lolly";
import styles from "./showLolly.module.css";

const ShowLolly: React.FC = ({ location }: any) => {
    return (
        <div className={styles.lollyContainer}>
            <h1>LOLLY PAGE</h1>
            <div>
            <Lolly top={location.state.c1 ? location.state.c1 : 'red'} middle={location.state.c2 ? location.state.c2 : 'green'} bottom={location.state.c3 ? location.state.c3 : 'blue'} />
            </div>
            <div>
                <h1><b style={{color: location.state.c1 || ''}}>Sender: </b>{location.state.sender || 'please enter sender name'}</h1>
                <p style={{fontSize: '27px'}}><b style={{color: location.state.c2 || 'red'}}> Message: </b>{location.state.msg || 'please enter a message'}</p>
                <h1><b style={{color: location.state.c3 || ''}}>Reciever: </b>{location.state.rec || 'please enter a reciever name'}</h1>
            </div>
        </div>
    );
}

export default ShowLolly;