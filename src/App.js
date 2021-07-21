import React, {useState} from 'react';
import './App.css';
import Hero from './components/Hero.js'
const App = () => {
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
            id: 4,
            name: 'Superman',
            date: '2019-05-30T19:20:14.298Z',
            important: true
        }
    ]
    const [eroi, setEroi] = useState(heroes)
    const [newHero, setNewHero] = useState('')
    const [showAll, setShowAll] = useState(true)

    const heroesToShow = showAll
        ? heroes
        : heroes.filter(hero => hero.important === true)
    const rows = () => eroi.map(hero =>
        <Hero
            key={hero.id}
            hero={hero}
        >
        </Hero>
    )
    const addHero = event => {
        event.preventDefault();
        const heroObject = {
            name: newHero,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: heroes.length + 1,
        }
        setEroi(heroes.concat(heroObject))
        setNewHero('')
    }
    const handleHeroChange = event => {
        console.log (event.target.value)
        setNewHero(event.target.value)

    }
    return (
        <div>
            <h1>Heroes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addHero}>
                <input
                    type='text'
                    value={newHero}
                    onChange={handleHeroChange}
                />
                <button type='submit'> Add</button>
            </form>
        </div>
    );
}

export default App;