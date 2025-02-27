import React, { useEffect } from 'react';
import './App.css';
import BackgroundMusicPlayer from './components/BackgroundMusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faJs, faHtml5, faCss3Alt, faReact, faNodeJs, faJava, faAndroid, faAws, faMicrosoft, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


function App() {
  

  return (
    <>
  <BackgroundMusicPlayer />
  <div id="preloader" style={{ display: "none" }} />
  <noscript>Allow Javascript</noscript>
  <header>
    <div className="navbar" id="navbar">
      <div className="logo" tabIndex={0} aria-label="vinod jangid logo">
        <div className="logo-top">
          <img src="obi_wan.png" alt="animation-head" />
        </div>
      </div>
      <div className="navbar-tabs" id="navbar-tabs">
        <ul className="navbar-tabs-ul">
          <li
            className="home aos-init aos-animate activeThistab"
            data-aos="fade-down"
            data-aos-delay={100}
          >
            <a href="#home" tabIndex={0} aria-label="Home menu button">
              # Home
            </a>
          </li>
          <li
            className="about aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay={300}
          >
            <a href="#about" aria-label="about menu button">
              def AboutMe():
            </a>
          </li>
          <li
            className="skills aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay={500}
          >
            <a href="#skills" aria-label="skills menu button">
              Skills:
            </a>
          </li>
          <li
            className="projects aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay={700}
          >
            <a href="#projects" aria-label="projects menu button">
              for project in Projects:
            </a>
          </li>
        </ul>
      </div>
      {/* navbar tabs ends */}
    </div>
  </header>
  {/* header ends here */}
  <main>
    {/* hamburger */}
    <div
      className="hamburger aos-init aos-animate"
      id="hamburger"
      data-aos="fade"
    >
      <div className="hamburgerbase">
        <button
          id="hamburger-button"
          tabIndex={0}
          aria-label="Menu Button"
        >
          <span className="burger-bar" id="burger-bar1" />
          <span className="burger-bar" id="burger-bar2" />
          <span className="burger-bar" id="burger-bar3" />
        </button>
      </div>
    </div>
    {/* hamburger */}
    <div className="mobiletogglemenu" id="mobiletogglemenu">
      <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
        <li
          id="home-mobile-tab"
          className="mobile-navbar-tabs-li home activeThismobiletab"
        >
          <a href="#home" tabIndex={0} aria-label="Home menu button">
            # Home
          </a>
        </li>
        <li
          id="aboutme-mobile-tab"
          className="mobile-navbar-tabs-li about"
        >
          <a href="#about" tabIndex={0} aria-label="about menu button">
            def Aboutme():
          </a>
        </li>
        <li
          id="skills-mobile-tab"
          className="mobile-navbar-tabs-li skills"
        >
          <a href="#skills" tabIndex={0} aria-label="skills menu button">
            Skills:
          </a>
        </li>
        <li
          id="projects-mobile-tab"
          className="mobile-navbar-tabs-li projects"
        >
          <a href="#projects" tabIndex={0} aria-label="projects menu button">
            for project in Project:
          </a>
        </li>
      </ul>
    </div>
    {/* mobile toggle menu ends */}
    <section className="landing-page-container" id="home">
      <div className="blob" />
      <div className="text-content">
        <article
          id="hello-friend"
          data-aos="fade-up"
          data-aos-delay={0}
          className="aos-init aos-animate"
        >
          <p className="jello">h</p>
          <p className="jello">e</p>
          <p className="jello">l</p>
          <p className="jello">l</p>
          <p className="jello">o</p>
          <p className="jello">(</p>
          <p className="jello">)</p>
          <p className="jello">:</p>
          &nbsp;
          <p className="jello">I</p>
          <p className="jello">'</p>
          <p className="jello">m</p>
        </article>
        <article
          id="name"
          data-aos="fade-up"
          data-aos-delay={200}
          className="aos-init aos-animate"
        >
          <p className="jello">Vladimir Bojanic</p>
          &nbsp;
        </article>
        <article
          id="work"
          data-aos="fade-up"
          data-aos-delay={400}
          className="aos-init aos-animate"
        >
          <div>
          <p className="jello">A</p>
          <p className="jello">_</p>
          <p className="jello">d</p>
          <p className="jello">e</p>
          <p className="jello">v</p>
          <p className="jello">e</p>
          <p className="jello">l</p>
          <p className="jello">o</p>
          <p className="jello">p</p>
          <p className="jello">e</p>
          <p className="jello">r</p>
          </div>  
          <div>
          <p className="jello">s</p>
          <p className="jello">e</p>
          <p className="jello">e</p>
          <p className="jello">k</p>
          <p className="jello">i</p>
          <p className="jello">n</p>
          <p className="jello">g</p>
          </div>
              <div>
                <p className="jello">p</p>
                <p className="jello">e</p>
                <p className="jello">r</p>
                <p className="jello">s</p>
                <p className="jello">o</p>
                <p className="jello">n</p>
                <p className="jello">a</p>
                <p className="jello">l</p>
              </div>
              <div>
                <p className="jello">d</p>
                <p className="jello">e</p>
                <p className="jello">v</p>
                <p className="jello">e</p>
                <p className="jello">l</p>
                <p className="jello">o</p>
                <p className="jello">p</p>
                <p className="jello">m</p>
                <p className="jello">e</p>
                <p className="jello">n</p>
                <p className="jello">t</p>
              </div>
        </article>
        <p
          id="info-para"
          data-aos="fade-up"
          data-aos-delay={600}
          className="aos-init aos-animate"
        >
          With a versatile skill set across various technologies, I thrive in dynamic IT environments. 
          My focus is on delivering innovative solutions, continuously adapting to new challenges, 
          and leveraging cutting-edge tools to drive efficiency and enhance user experiences.
        </p>
        <div
          className="contact-btn-div aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          <a href="mailto:vladimir98bojanic@gmail.com" tabIndex={-1}>
            <button className="letsTalkBtn">
              <p className="letsTalkBtn-text">Let's Talk!</p>
              <span className="letsTalkBtn-BG" />
            </button>
          </a>
        </div>
        {/* contact-btn-div */}
      </div>
    </section>
    {/* landing page ends here */}
    <section
      className="about-section-container aos-init aos-animate"
      id="about"
      data-aos="fade-up"
    >
      <div className="about-section">
        <div className="section-heading">
          <h2
            className="section-heading-article"
            tabIndex={0}
            aria-label="About me heading"
          >
            def AboutMe():
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="info-dp-section">
          <div className="about-info">
            <p tabIndex={0}>
              Hello, I’m Vladimir – a <a href='https://merki.ca/blog/what-is-a-wildcard-person' target='blank'>Wildcard</a> developer specializing in Web technologies, 
              with expertise in Python, SQL, Django, Java, Swing, Android, React, Web3,
              Docker and other technologies. I aspire to be a great full-stack/wildcard developer.
            </p>
            <br />
            <p tabIndex={0}>
              I aspire to advance my career in the IT industry by constantly striving to learn new technologies and tools.
              Quality is my top priority, and I am committed to delivering high-quality solutions that meet the needs of my clients.
              Although I can be flexible and adapt to new environments, I aim to bring the best under time contraints.
            </p>
            <br />
            <p tabIndex={0}>
              I am seeking opportunities where I can leverage my skills and advance my career opportunities.
              Driven by a passion for overcoming challenges, I aim to make
              significant contributions to projects that inspire innovation.
            </p>
            {/* Resume button */}
                <a href="/Profile.pdf" download className="resume-btn" id="resume-btn">
                  <div className="sign">
                    <svg viewBox="0 0 640 512">
                      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                    </svg>
                  </div>
                  <div className="text">Resume</div>
                </a>
          </div>
          <div className="dp aos-init" data-aos="fade-up">
            <img
              src="Portfolio_cut.png"
              alt="Vladimir Bojanic"
              tabIndex={0}
              aria-label="Profile"
            />
          </div>
        </div>
      </div>
    </section>
    {/* about section ends  */}
        <section className="skills-section-container" id="skills">
          <div className="skills-section">
            <div className="section-heading aos-init" data-aos="fade-up">
              <h2
                className="section-heading-article"
                tabIndex={0}
                aria-label="skills heading"
              >
                Skills:
              </h2>
              <p className="sectionHeadingP" />
            </div>
            <div className="skill-icons">
              <div className="skill-item">
                <FontAwesomeIcon icon={faDocker} size="10x" beat />
                <p className="skill-text">Docker</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faPython} size="10x" beat />
                <p className="skill-text">Python</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faJs} size="10x" beat />
                <p className="skill-text">JavaScript</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faHtml5} size="10x" beat />
                <p className="skill-text">HTML5</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faCss3Alt} size="10x" beat />
                <p className="skill-text">CSS3</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faDatabase} size="10x" beat />
                <p className="skill-text">SQL</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faReact} size="10x" beat />
                <p className="skill-text">React</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faNodeJs} size="10x" beat />
                <p className="skill-text">Node.js</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faJava} size="10x" beat />
                <p className="skill-text">Java</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faAndroid} size="10x" beat />
                <p className="skill-text">Android</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faAws} size="10x" beat />
                <p className="skill-text">AWS</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faMicrosoft} size="10x" beat />
                <p className="skill-text">Azure</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={faGithub} size="10x" beat />
                <p className="skill-text">Git</p>
              </div>
            </div>
          </div>
        </section>
    {/* skills section ends */}
    {/* <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading aos-init" data-aos="fade-up">
          <h2
            className="section-heading-article"
            tabIndex={0}
            aria-label="My projects starts from here"
          >
            for project in Projects:
          </h2>
          <p className="sectionHeadingP" />
        </div>
      </div>
    </section> */}
    
  </main>
  {/* main ends here */}
  <footer id="footer">
      <article target="#home" aria-label="Back to top">←BACK TO TOP</article>
    <div className="footer-background">
      <div className="footer-blob" />
    </div>
    <div className="footer-foreground">
      <div className="footercontainer">
        <div className="two-words">
          <article
            tabIndex={0}
            aria-label="Live your life without regrets"
          >
            "Live your life without regrets"
          </article>
        </div>
        <div className="social-media-container">
          <div className="getintouch-heading">
            <article>GetinTouch():</article>
          </div>
          <div className="logos">
            <a
              href="https://www.linkedin.com/in/vladimir-b-36617b129"
              target="blank"
              aria-label="My Linkedin"
            >
              <svg className="SocialHandle" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a
              href="https://github.com/Shogun321?tab=repositories"
              target="blank"
              aria-label="My github"
            >
              <svg viewBox="0 0 496 512" className="SocialHandle">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              href="mailto:vladimir98bojanic@gmail.com"
              target="blank"
              aria-label="My G mail"
            >
              <svg id="GmailLogo" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <article>
            Created by Vladimir Bojanic
            <i className="far fa-copyright" /> 2024
          </article>
        </div>
      </div>
    </div>
  </footer>
  {/* footer ends here */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      background: "rgba(0, 0, 0, 0)",
      textAlign: "center",
      zIndex: 9999999,
      cursor: "pointer"
    }}
  >
    <div
      id="bmc-close-btn"
      style={{
        position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        visibility: "hidden",
        borderRadius: 100,
        width: 40,
        height: 40,
        top: 16,
        right: 16,
        zIndex: 9999999
      }}
    >
      <svg
        style={{ width: 16, height: 16 }}
        width={16}
        height={16}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.45156 27.6516L0.351562 25.5516L11.9016 14.0016L0.351562 2.45156L2.45156 0.351562L14.0016 11.9016L25.5516 0.351562L27.6516 2.45156L16.1016 14.0016L27.6516 25.5516L25.5516 27.6516L14.0016 16.1016L2.45156 27.6516Z"
          fill="#666"
        />
      </svg>
    </div>
    
  </div>
  
  
</>

  );
}

export default App;
