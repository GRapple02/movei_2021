import React from 'react';
import PropTypes from 'prop-types';

function GRapple({name, id}) {
  return (
    <div>
      <h3>I'm {name}</h3>
      {id}
    </div>
  )
}

GRapple.ProrTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

const list = [
  {
    "key": 1,
    "name": "GRapple",
    "id": "grpel2108"
  },
  {
    "key": 2,
    "name": "test11",
    "id": "qwer"
  }
]

function App() {
  return (
    <div>
      {list.map(e => {
        return <GRapple key={e.key} name={e.name} id={e.id}/>
      })}
    </div>
  );
}

export default App;
