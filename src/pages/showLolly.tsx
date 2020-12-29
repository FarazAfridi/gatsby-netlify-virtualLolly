import { PageProps } from 'gatsby';
import * as React from 'react';
import Lolly from "../components/lolly";
import styles from "./showLolly.module.css";

interface Props {
    c1: string
    c2: string
    c3: string
    sender: string
    rec: string
    msg: string
}

const ShowLolly: React.FC<PageProps<null, null, Props>> = ({ location }) => {
    let lolly
    if(location.state.c1){
        lolly = {
            c1: location.state.c1,
            c2: location.state.c2,
            c3: location.state.c3
        }
    }
    return (
        <div className={styles.lollyContainer}>
            <h1>LOLLY PAGE</h1>
            <div>
            <Lolly top={lolly.c1} middle={lolly.c2} bottom={lolly.c3} />
            </div>
            <div>
                <h1><b style={{color: lolly.c1}}>Sender: </b>{location.state.sender || 'please enter sender name'}</h1>
                <p style={{fontSize: '27px'}}><b style={{color: location.state.c2 || 'red'}}> Message: </b>{location.state.msg || 'please enter a message'}</p>
                <h1><b style={{color: lolly.c2}}>Reciever: </b>{location.state.rec || 'please enter a reciever name'}</h1>
            </div>
        </div>
    );
}

export default ShowLolly;