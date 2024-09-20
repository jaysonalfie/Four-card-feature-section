import "./style.css";
import { Link } from "react-router-dom";
import Supervisor from "../assets/images/icon-supervisor.svg";
import TeamBuilder from "../assets/images/icon-team-builder.svg";
import Karma from "../assets/images/icon-karma.svg";
import Calculator from "../assets/images/icon-calculator.svg";

const CardSection = () => {
  return (
    <>
      <div className="body">
       <div className="container">
       <header>
          <h1 className="header__title">Reliable, efficient delivery</h1>
          <h1 className="header__subtitle">Powered by Technology</h1>
          <p>
            {" "}
            Our Artificial Intelligence powered tools use millions of project
            data<br/> points to ensure that your project is successful
          </p>
        </header>
       </div>

        <main className="container row">
          <div className="cards">
            <div className="card__supervisor">
              <h2>Supervisor</h2>
              <p> Monitors activity to identify project roadblocks</p>
              <div className="card__img">
                <img src={Supervisor} alt="spyglass for investigations" />
              </div>
            </div>
            <div className="card__teamBuilder">
              <h2>Team Builder</h2>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <div className="card__img">
                <img src={TeamBuilder} alt="home sructure" />
              </div>
            </div>
            <div className="card__karma">
              <h2> Karma</h2>
              <p> Regularly evaluates our talent to ensure quality</p>
              <div className="card__img">
                <img src={Karma} alt="lightbulb for creative ideas" />
              </div>
            </div>
            <div className="card__calculator">
              <h2> Calculator </h2>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <div className="card__img">
                <img src={Calculator} alt="computer monitor" />
              </div>
            </div>
          </div>

          <div className="attribution">
            Challenge by{" "}
            <Link
              to="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link to="https://github.com/jaysonalfie">Jayson Alfie</Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default CardSection;
