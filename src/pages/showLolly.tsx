import * as React from 'react';
import Lolly from "../components/lolly";
import styles from "./showLolly.module.css";

const ShowLolly: React.FC = ({ location }: any) => {
    return (
        <div className={styles.lollyContainer}>
            <h1>LOLLY PAGE</h1>
            <div>
            <Lolly top={location.state.c1} middle={location.state.c2} bottom={location.state.c3} />
            </div>
            <div>
                <h1><b style={{color: location.state.c1}}>Sender: </b>{location.state.sender}</h1>
                <p style={{fontSize: '27px'}}><b style={{color: location.state.c2}}> Message: </b>{location.state.msg}</p>
                <h1><b style={{color: location.state.c3}}>Reciever: </b>{location.state.rec}</h1>
            </div>
        </div>
    );
}

export default ShowLolly;