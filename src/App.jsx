import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const getjoke = async () => {
    try {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <section className='section flex flex-col gap-10 justify-center items-center'>
        <div className='flex flex-row gap-5'>
        <button className='btn btn-primary text-3xl' onClick={getjoke}>😂 Generate Joke</button>
        {/* <button className='btn btn-secondary text-xl dark' >Dark Mode</button> */}
        </div>
        <div className="card text-center rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold">Random Jokes</h1>
          <p className="text-[400px]">{joke?.setup}</p>
          <p className="text-9xl font-semibold punchline">{joke?.punchline}</p>
        </div>
      </section>
      
    </>

  );
}

export default App
