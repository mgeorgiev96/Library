import React from 'react';
import './css/style.css'
import Search from './Search'
import { BookProvider } from './Context';
import Books from './Books';
import Header from './Header';
import Loader from './Loader';


function App() {
  return (
    <BookProvider>
      <Loader/>
      <div className='page_container'>
      <Header/>
      <Search/>
      <Books/>
      </div>
    </BookProvider>
  );
}

export default App;
