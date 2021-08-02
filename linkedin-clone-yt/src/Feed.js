import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase'



function Feed() {

    const [input, setInput] = useState('')

    const onChangeHandler = event => {
        setInput(event.target.value);
    };


    const [posts, setPosts] = useState([])

    console.log(input);


    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
    }, [])

    const sendPost = (e) => {

        e.preventDefault();
        db.collection("posts").add({
            name: "amien",
            description: "test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        })
    }


    return ( <
        div className = "feed" >
        <
        div className = "feed_inputContainer" >
        <
        div className = "feed_input" >
        <
        CreateIcon / >
        <
        form action = "" >
        <
        input value = { input }
        onChange = { onChangeHandler }
        type = "text" / >
        <
        button onClick = { sendPost }
        type = "submit" > send < /button> <
        /form> <
        /div> <
        div className = "feed_inputOptions" >
        <
        InputOption Icon = { ImageIcon }
        title = "Photo"
        color = "#70B5F9" / >
        <
        InputOption Icon = { SubscriptionsIcon }
        title = "Video"
        color = "#E7A33E" / >
        <
        InputOption Icon = { EventNoteIcon }
        title = "Event"
        color = "#C0CBCD" / >
        <
        InputOption Icon = { CalendarViewDayIcon }
        title = "Whrite article"
        color = "#7FC15E" / >


        <
        /div> <
        /div> {
            posts.map(({ id, data: { name, message, descritpion, photoUrl } }) =>
                <
                Post key = { id }
                name = { name }
                description = { descritpion }
                message = { message }
                photoUrl = { photoUrl }
                />
            )
        }

        <
        /div>
    );
}

export default Feed;