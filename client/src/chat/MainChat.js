import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import ChatNav from './ChatNav'



class MainChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: []
    };
  }

  componentDidMount() {
 
    const username = window.prompt('Username: ', 'Barry White');
    this.setState({ username });
   
    var pusher = new Pusher('eaa5420a1b2b42547009', {
      cluster: 'us2',
      forceTLS: true
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.setState({ chats: [...this.state.chats, data], test: '' });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = { 
        username: this.state.username,
        message: this.state.text
      }; console.log(payload)
      axios.post('http://localhost:5000/message', payload);
      this.setState({ text: ''})
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() { console.log(this.state)
    return (
      <div  className='grid'>
   
        <div className='ask_form_card'>
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
        </div>

        <div className='display_chat_text'>
          <section className='display_chat_text_header'>
          <h1>what do you think of poop?</h1>
          </section><br></br><br></br>
        
        <ChatList chats={this.state.chats} />
        </div>

        <div className='chat_nav'>
          <ChatNav />
        </div>
      
      </div>
    );
  }
}

export default MainChat;


















