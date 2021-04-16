import React from 'react';

function GRapple({name, id}) {
  return (
    <div>
      <h3>I'm {name}</h3>
      {id}
    </div>
  )
}

const list = [
  {
    "name": "GRapple",
    "id": "grpel2108"
  },
  {
    "name": "test11",
    "id": "qwer"
  }
]

function App() {
  return (
    <div>
      {list.map(e => {
        return <GRapple name={e.name} id={e.id}/>
      })}
    </div>
  );
}

export default App;
