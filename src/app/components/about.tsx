import "../style/about.css";

function About() {
    return (
        <>

        <h1 className="about-heading">ABOUT ME</h1>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae magni ducimus eum sit veniam dignissimos fuga quod quam quidem.
                </p>
        <section className="about-section">
            <div className="about-left">
                
                <div className="left-content">
                    <h2>Get to know me!</h2>
                    <p>
                        Im <b>Zubair Ahmed Baloch</b>, a <b>frontend web developer</b> who loves creating clean, responsive, and user-friendly websites. I work with tools like <b>Next.js, Tailwind CSS, and TypeScript</b> to bring ideas to life on the web. Im always learning new things and enjoy keeping up with the latest trends in web development to build better, more engaging experiences.
                    </p>
                    <p>
                        Im a bit of a digital product junky. Over the years, Ive used hundreds of web and mobile apps in different industries and verticals. Feel free to contact me here.
                    </p>
                    <button className="contact-button">Contact</button>
                </div>
            </div>

            <div className="about-right">
                <h2 className="skills-heading">Skills</h2>
                <div className="skills-container">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">Bootstrap</div>
                    <div className="skill">Tailwind</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">TypeScript</div>
                    <div className="skill">React</div>
                    <div className="skill">Next.js</div>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;
