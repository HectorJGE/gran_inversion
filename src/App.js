import './App.css';
import React from 'react';
import PersonCard from './components/personCard';

class App extends React.Component {
  render() {
    return (
              <div className='margin'>
                <h1>Personas</h1>
                <PersonCard firstName="Jane" lastName="Doe" edad={45} cabello={"Black"} />
                <PersonCard lastName="Smith" firstName="John" edad={88} cabello="Brown" />
                <PersonCard lastName="Fillmore" firstName="Millard" edad={50} cabello="Brown" />
                <PersonCard lastName="Smith" firstName="Maria" edad={62} cabello="Brown" />
              </div>
    )
  }
}

export default App;