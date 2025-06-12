import { useEffect, useState } from "react"

const Home = () => {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) 
    {
      setGreeting("Good Morning")
    } 
    else if (currentHour < 17)
    {
      setGreeting("Good Afternoon")
    } 
    else
    {
      setGreeting("Good Evening")
    }
  }, [])

  return (
    <section className="home-section">
      <h1>{greeting}, I'm Dhairya 👋</h1>
      <p>Welcome to my portfolio!</p>
      <div>
        <a href="#projects">
          <button>View Projects</button>
        </a>
        <a href="#about">
          <button>About Me</button>
        </a>
      </div>
    </section>
  )
}

export default Home