import Image from "next/image";
import "../style/project.css";
import gif from "../../../public/4ae5fa23980269.5c8a6f3890828.gif"
import gig from "../../../public/Website-Development-2.gif"
import gif3 from "../../../public/betterme-web.gif"
import Link from "next/link";


function Projects () {
    return (
        <>
            {/* <Menuu /> */}
            <section id="work">
                <h1 className="work-heading">Our Work</h1>
                <div className="work-intro">
                    <h3 className="work-heading2">MY WORK</h3>
                    <h1 className="recent-work-heading">RECENT WORK</h1>
                </div>

                {/* Project 1 */}
                <div className="project-container">
                    <div className="project-image">
                        <Link href="https://e-commerce-website-ten-opal.vercel.app">
                            <Image src={gig} alt="gif-img" className="project-img"/>
                        </Link>
                    </div>
                    <div className="project-details">
                        <h2 className="project-heading1">E-COMMERCE WEBSITE</h2>
                        <p className="project-description">This project is a modern e-commerce website UI designed using Next.js and Tailwind CSS.</p>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-container">
                    <div className="project-image">
                        <Link href="https://taiwind-css-website.vercel.app">
                            <Image src={gif} alt="gif-img" className="project-img"/>
                        </Link>
                    </div>
                    <div className="project-details">
                        <h2 className="project-heading2">GLINT WEBSITE</h2>
                        <p className="project-description">A responsive and modern website built with Next.js and Tailwind CSS. This project showcases a sleek frontend design with optimized performance and smooth user interactions.</p>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-container">
                    <div className="project-image">
                        <Link href="https://frontend-project-three-black.vercel.app">
                            <Image src={gif3} alt="gif-img" className="project-img rounded"/>
                        </Link>
                    </div>
                    <div className="project-details">
                        <h2 className="project-heading3">SINGLE-PAGE WEBSITE</h2>
                        <p className="project-description">A responsive and modern website built with Next.js and Tailwind CSS. This project showcases a sleek frontend design with optimized performance and smooth user interactions.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
