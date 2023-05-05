import "./home.scss";
import Typed from "react-typed";
import { Mail, Facetime, GitHub, Twitter, SnowFlake } from "iconoir-react";
import hero from "@/assets/img/a.svg";
const ICONS = [Mail, Facetime, GitHub, Twitter];
export default function Home() {
  return (
    <section className="home" id="Home">
      <div className="home-left">
        <h2 className="slideBottom">你好，欢迎光临</h2>
        <Typed
          className="typed"
          strings={["你可以发现更多未来..."]}
          typeSpeed={240}
          loop
          backSpeed={180}
        />
        <p className="text slideRight">
          I'm a computer engineering student at Politecnico di Torino. I'm a
          passionate programmer and I love to create new things.
        </p>
        <ul className="home-left__icons slideLeft">
          {ICONS.map((Icon, i) => (
            <li key={i}>
              <a href="#">
                <Icon strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
        <button className="btn slideTop">
          <a href="#Contact">联系我们...</a>
        </button>
      </div>
      <div className="home-right">
        <img src={hero} alt="hero" />
        {[0, 1, 2, 3, 6, 4, 5].map((value) => (
          <SnowFlake
            className="snowflake"
            kernelMatrix={value}
            color="#CCCCCC"
            width={32}
            height={32}
            key={value}
          ></SnowFlake>
        ))}
      </div>
    </section>
  );
}
