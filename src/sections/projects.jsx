import { useRef, useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa';
import ev_img from '../assets/ev_app_img.png';
import portfolio_img from '../assets/portfolio_img.jpg';
import qr_img from '../assets/qr_app_img.png';
import quiz_img from '../assets/quiz_website_img.jpg';
import weather_img from '../assets/weather_website_img.jpg';
import yt_img from '../assets/yt_website_img.jpg';

export default function Portfolio() {
  const scrollRef = useRef(null)
  const [leftDisabled, setLeftDisabled] = useState(true)
  const [rightDisabled, setRightDisabled] = useState(false)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 300
    if (container) {
      const scrollLeft =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setLeftDisabled(container.scrollLeft <= 0);
      setRightDisabled(
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
      )
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
    }
    return () => {
      if (container) container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const projects = [
    {
      title: 'Portfolio Website',
      tools: 'html,css,react',
      desc: 'Personal portfolio website built with react. Showcases my skills, projects, resume, and social links in a modern layout.',
      image: portfolio_img,
      link: 'https://github.com/Dhairya-77/portfolio-website',
    },
    {
      title: 'VTUBE - YouTube Clone',
      tools: 'html, tailwind css, php, mysql',
      desc: 'A YouTube-like video-sharing platform where users can upload, like, dislike, save, and watch videos.',
      image: yt_img,
      link: 'https://github.com/Dhairya-77/yt-clone',
    },
    {
      title: 'Quiz Web Application',
      tools: 'angularjs, nodejs, expressjs, mongodb',
      desc: 'A website in which Users can create and share quizzes, and others can take them. The results are stored and displayed to the user.',
      image: quiz_img,
      link: 'https://github.com/Dhairya-77/quiz-web-application',
    },
    {
      title: 'QR Scanner & Generator',
      tools: 'flutter, dart',
      desc: 'A mobile/web app that scans QR codes using the camera and automatically copies the data to the clipboard and also supports custom QR code generation.',
      image: qr_img,
      link: 'https://github.com/Dhairya-77/qr-scanner-and-generator',
    },
    {
      title: 'Weather Forcasting Website',
      tools: 'python, django',
      desc: 'A web app that fetches real-time weather data by city, state, or country using the OpenWeatherMap API.',
      image: weather_img,
      link: 'https://github.com/Pratik11-git/weather-website',
    },
    {
      title: 'Plug&Charge Zone - Android App',
      tools: 'kotlin, firebase, stripe',
      desc: 'An Android app that helps users find nearby EV charging stations, book slots in advance, and pay securely through a Stripe-integrated wallet system.',
      image: ev_img,
      link: 'https://github.com/Dhairya-77/ev-charging-station-app',
    },
  ];

  return (
    <section className="projects-section">
        <h2>My Projects</h2>

        <div className="projects-slider">
            <button className={`arrow ${leftDisabled ? 'disabled' : ''}`} onClick={() => scroll('left')} disabled={leftDisabled}>
            &#9664;
            </button>

            <div className="project-cards" ref={scrollRef}>
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>Tools And Technology: {project.tools}</p>
                  <p>{project.desc}</p>
                  <a href={project.link} target="_blank" > <FaGithub/> → </a>
                </div>
            ))}
            </div>

        <button className={`arrow ${rightDisabled ? 'disabled' : ''}`} onClick={() => scroll('right')} disabled={rightDisabled}>
          &#9654;
        </button>
      </div>
    </section>
  );
}