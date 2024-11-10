import Image from "next/image";
import pic from "../../../public/main_photo.png";
import "../style/hero.css";

function Hero() {
    return (
        <section className="hero-section">
            <div className="image-container">
                <Image src={pic} alt="Zubair Ahmed" layout="responsive" priority />
            </div>
            <div className="text-container">
                <h1 className="heading">Hey, I am Zubair Ahmed Baloch</h1>
                <p className="para">
                    Im a frontend web developer dedicated to solving complex problems
                    with efficient solutions. Lets work together to bring creative
                    ideas to life.
                </p>
            </div>
        </section>
    );
}

export default Hero;
