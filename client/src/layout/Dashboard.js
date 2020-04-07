import React, { Component } from 'react';

import First from './First.js'
import MainChat from '../chat/MainChat'


class Dashboard extends Component {
  render() {
    return (
      <div>
 
        {/* main page container */}
        <section className='showcase'>
          <First/>
        </section>

        <section>
        <MainChat />
        </section>

      </div>
    );
  }
}

export default Dashboard;