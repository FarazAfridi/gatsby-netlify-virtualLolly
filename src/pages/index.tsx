import React, { useState, useRef } from "react";
import Lolly from "./../components/lolly";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const GET_ALL = gql`
  {
    getVCard {
      c1
      c2
      c3
      rec
      sender
      msg
    }
  }
`;

const ADD_VCARD = gql`
  mutation addVCard(
    $c1: String!
    $c2: String!
    $c3: String!
    $rec: String!
    $sender: String!
    $msg: String!
  ) {
    addVCard(c1: $c1, c2: $c2, c3: $c3, rec: $rec, sender: $sender, msg: $msg) {
      link
    }
  }
`;

const Home = () => {
  const [c1, setC1] = useState("#d52358");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#deaa43");

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const [addVCard] = useMutation(ADD_VCARD);
  const { loading, data, error } = useQuery(GET_ALL);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(data);

  const handleSubmit = () => {
    console.log(sender);
    console.log(receiver);
    console.log(message);

    addVCard({
      variables: {
        c1,
        c2,
        c3,
        rec: receiver,
        sender: sender,
        msg: message,
      },
    });
  };
  return (
    <div className={styles.container}>
      <h2>Create Lolly</h2>
      <div className={styles.main_container}>
        <div>
          <Lolly top={c1} middle={c2} bottom={c3} />
          <input
            type="color"
            value={c1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setC1(e.currentTarget.value);
            }}
          ></input>
          <input
            type="color"
            value={c2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setC2(e.currentTarget.value);
            }}
          ></input>
          <input
            type="color"
            value={c3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setC3(e.currentTarget.value);
            }}
          ></input>
        </div>
        <div className={styles.form_container}>
          <input
            value={receiver}
            type="text"
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="To"
          ></input>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
          <input
            value={sender}
            type="text"
            onChange={(e) => setSender(e.target.value)}
            placeholder="From"
          ></input>
          <div className={styles.btn}>
          <Link
          style={{textDecoration:"none"}}
            to="/showLolly"
            state={{
              c1: c1,
              c2: c2,
              c3: c3,
              rec: receiver,
              sender: sender,
              msg: message,
            }}
            onClick={handleSubmit}
          >
            Send
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
