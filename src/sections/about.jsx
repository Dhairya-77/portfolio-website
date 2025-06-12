
const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>

      <div className="about-content">

        <p>
            I am Dhairya Bhoya, an aspiring software developer currently pursuing my 
            Master of Computer Applications (MCA) from Charotar University of Science and Technology.
            I graduated with a B.Sc. in Information Technology with a 9.45 CGPA. I am passionate about mobile and web app development, 
            with experience in building Android apps using Kotlin and Flutter, as well as full-stack web apps using the MEAN stack.
        </p>

        <p>
            I love exploring new technologies, contributing to open-source projects, and solving real-world problems through code.
        </p>

      </div>

      <div className="about-buttons">
        <a href="https://drive.google.com/file/d/1ZGFsuc24f0nN5sYrw8HjZMnKpsZf2XsY/view?usp=drivesdk" target="_blank" >
          <button> 📄 Resume </button>
        </a>
        <a href="https://www.linkedin.com/in/dhairya-bhoya-232623241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <button> 🔗 LinkedIn </button>
        </a>
      </div>

    </section>
  );
};

export default About;
