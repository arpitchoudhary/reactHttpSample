import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList'
import TableList from './components/TableList'
import PostRequest from './components/PostRequest';

function App() {
  return (
    <div className="App">
      {/* <PostList></PostList> */}
      {/* <TableList></TableList> */}
      <PostRequest></PostRequest>
    </div>
  );
}

export default App;
