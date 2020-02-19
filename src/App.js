import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './components/store/store'
import Header from './components/gallerycomponent/header'
import SideBar from './components/gallerycomponent/sideBar'
import MainComponent from './components/gallerycomponent/mainComponent'

// const str = 'VP6_62Jyc_f478u0pqEsyFeEFGhCv63AJrm-A3-vyCQ'
// const str1 = 'MCAreo-U6ztB0CLjsHcKHXqKHQc_fbI3XoiGLF-perE'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className='headerAndMainBodyDiv'>
            <div>
              <Header />
            </div>

            <div className='mainBoadyDivWithNavSidebar'>
              <SideBar />
              <MainComponent />
            </div>
          </div>
        </div>
      </Provider>

    );
  }

}

export default App;
