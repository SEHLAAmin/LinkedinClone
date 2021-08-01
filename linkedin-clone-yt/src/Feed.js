import React, {useState , useEffect} from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post";
import { db } from "./firebase";



function Feed() {

const [input , setInput] = useState('')

const onChangeHandler = event => {
  setInput(event.target.value);
};


const [posts, setPosts] = useState([])

console.log(input);


useEffect(()=> {
db.collection("posts").onSnapshot( snapshot => (
  setPosts(snapshot.docs.map(doc => 
    (
      {
        id : doc.id , 
        data : doc.data(),
      }
    )))
))
}, [])



const sendPost = e => {
  e.preventdefault();
  db.collection('posts').add({
    name : 'Amin',
    description : 'test',
    message : input
  })
}
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={onChangeHandler}    type="text" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon = {ImageIcon}  title="Photo" color="#70B5F9"/>
            <InputOption Icon = {SubscriptionsIcon}  title="Video" color="#E7A33E"/>
            <InputOption Icon = {EventNoteIcon}  title="Event" color="#C0CBCD"/>
            <InputOption Icon = {CalendarViewDayIcon}  title="Whrite article" color="#7FC15E"/>


        </div>
      </div>
     { posts.map((post)=> 
     <Post />
     )}
         <Post  name ='Sehla' description='test' message ='waow this work ' /> 

    </div>
  );
}

export default Feed;
