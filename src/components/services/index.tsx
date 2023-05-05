import "./services.scss";
import Scratch from "./Scratch.png";
import Swift from "./Swift Playgrounds.png";
import Blockly from "./Blockly.png";
const CARD = [
  {
    name: "Scratch",
    path: Scratch,
  },
  {
    name: "Swift Playgrounds",
    path: Swift,
  },
  {
    name: "Blockly",
    path: Blockly,
  },
];
export default function Services() {
  return (
    <section className="services" id="Services">
      <h2 className="slideBottom">
        我们最推荐的<span>课程</span>
      </h2>
      <nav>
        {CARD.map((item) => (
          <figure className="card fadeIn" key={item.name}>
            <img src={item.path} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              obcaecati ex dolor totam repellendus at aspernatur eveniet magni
              libero sapiente harum cupiditate quidem culpa perferendis sint
              temporibus reiciendis, quaerat expedita.
            </p>
            <button className="btn">
              <a href="#Contact">了解我们</a>
            </button>
          </figure>
        ))}
      </nav>
    </section>
  );
}
