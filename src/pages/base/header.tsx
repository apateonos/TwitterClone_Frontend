import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <div>main Logo</div>
      <nav>
        <Link to = '/' >Home</Link>
        <Link to = '/profile' >Profile</Link>
      </nav>
      <div>
        <button>settings</button>
      </div>
    </header>
  )
}