import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  function sendMessage(e) {
    e.preventDefault();

    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    //to scrolldown when message sent
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");

    //Firebase V9+
    // await addDoc(collection(db, "rooms", channelId, "messages"), {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   user: "Abdallah Khayat",
    //   userImage:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    // });
  }

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit">SEND</Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > Button {
    display: none;
  }
`;
