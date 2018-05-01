import * as React from 'react';
import './App.css';
import Header from './Header/Header';
import Stories from './Stories/Stories';

class App extends React.Component {

    render() {

        return (
            <div className='App'>
                <Header/>

                <Stories/>
          </div>
        );
    }
}

export default App;
