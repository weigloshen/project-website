import "./about.scss";
import about from "./about.png";
export default function About() {
  return (
    <section className="about" id="About">
      <div className="about-left slideLeft">
        <img src={about} alt="computed" />
      </div>
      <div className="about-right slideRight">
        <div className="about-right__content">
          <h2>
            为什么要尽早学<span>编程</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium illo expedita dolorum saepe corrupti ipsam
            exercitationem maxime numquam, optio laborum delectus fugiat totam
            velit laboriosam nostrum nesciunt, voluptatem quisquam? Eos. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo
            expedita dolorum saepe corrupti ipsam exercitationem maxime numquam,
            optio laborum delectus fugiat totam velit laboriosam nostrum
          </p>
        </div>
      </div>
    </section>
  );
}
