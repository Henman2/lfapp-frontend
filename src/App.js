import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    );
  }
}

export default App;
