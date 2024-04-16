import background from "../assets/images/headerCactus.jpg";
import "../styles/Quizz.css";

function Quizz() {
  return (
    <section className="full-page-container">
      <figure>
        <img src={background} alt="decorative" />
      </figure>
      <section className="right-container">
        <p>Question</p>
        <ul className="box">
          <li className="box 1">
            <p>box 1</p>
          </li>
          <li className="box2">
            <p>box 2</p>
          </li>
          <li className="box3">
            <p>box 3</p>
          </li>
          <li className="box4">
            <p>box 4</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Quizz;
