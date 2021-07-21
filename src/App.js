import React, {useState,useEffect} from 'react'
import './App.css'
import Hero from './components/Hero.js'
import axios from 'axios'
const App = () => {
    const [heroes, setHeroes] = useState([])
    const [newHero, setNewHero] = useState('')
    const [showAll, setShowAll] = useState(true)
    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/heroes')
            .then(response => {
                console.log('promise fulfilled')
                setHeroes(response.data)
            })
    }, [])
    console.log('render', heroes.length, 'notes')

    const heroesToShow = showAll
        ? heroes
        : heroes.filter(hero => hero.important === true)
    const rows = () => heroes.map(hero =>
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
        setHeroes(heroes.concat(heroObject))
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
                    placeholder='Add Hero...'
                    value={newHero}
                    onChange={handleHeroChange}
                />
                <button type='submit'> Add</button>
            </form>
        </div>
    );
}

export default App