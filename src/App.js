import './App.css';

const heroes = [
  {
    id: 1,
    name: 'Hulk',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    name: 'Spiderman',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    name: 'Superman',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]
const  App = () => {
  return (
      <div>
        <h1>Heroes</h1>
        <ul>
          {heroes.map(h => <li key= {h.id}> {h.name}</li>)}
        </ul>
      </div>
  );
}

export default App;
