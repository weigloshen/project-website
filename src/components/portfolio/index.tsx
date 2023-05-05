import "./portfolio.scss";
import { SendMail, TikTok, Phone } from "iconoir-react";
import cn from "@/assets/png100px/cn.png";
import jp from "@/assets/png100px/jp.png";
import sa from "@/assets/png100px/sa.png";
export default function Portfolio() {
  return (
    <section className="portfolio" id="Portfolio">
      <h2 className="slideTop">
        我们有着优秀的 <span>教师</span>
      </h2>
      <nav className="portfolio-teachers">
        {new Array(6).fill(null).map((_, index) => (
          <article className="teacher fadeIn" key={index}>
            <header className="teacher-card">
              <i></i>
              <img
                src="https://randomuser.me/api/portraits/med/men/51.jpg"
                alt="person"
              />
            </header>
            <div className="teacher-content">
              <h1>Tamás Kuti</h1>
              <p>
                Senior Frontend Developer <span>at Compado</span>
              </p>
              <ul>
                <li>
                  <SendMail />
                  <a href="#">ts@example.com</a>
                </li>
                <li>
                  <TikTok />
                  <a href="#">example.name</a>
                </li>
                <li>
                  <Phone />
                  <a href="#">0 1716456122</a>
                </li>
              </ul>
              <p className="languages">
                <strong>Spoken languages:</strong>
                <nav className="imgs">
                  <a href="#" data-msg="中文">
                    <img src={cn} alt="中文" />
                  </a>
                  <a href="#" data-msg="日文">
                    <img src={jp} alt="日文" />
                  </a>
                  <a href="#" data-msg="不知道啥文">
                    <img src={sa} alt="不知道啥文" />
                  </a>
                </nav>
              </p>
            </div>
          </article>
        ))}
      </nav>
    </section>
  );
}
