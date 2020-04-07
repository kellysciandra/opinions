import React from "react";


export default ({ text, username, handleTextChange }) => ( 
  <div> 
    
      <div>    
          <h2>Hello, {username}</h2>
          <input type="text" value={text} placeholder="chat here..." className='input' onChange={handleTextChange} onKeyDown={handleTextChange}/>
      </div><br></br>
  
      <div className='pending_message'>
        {text}
      </div>
    </div>
);
