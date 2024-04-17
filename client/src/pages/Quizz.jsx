import { useState } from "react";
import QuizzProgressBar from "../components/QuizzProgressBar";
import quizz from "./quizz.json";
import background from "../assets/images/headerCactus.jpg";
import "../styles/Quizz.css";

function Quizz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answears, setAnswears] = useState([]);

  function handleQuizzButton(index) {
    setQuestionIndex(() => questionIndex + 1);
    setAnswears(() => {
      const updatedAnswears = [...answears];
      updatedAnswears.push(index);
      return updatedAnswears;
    });
  }

  return (
    <section className="full-page-container">
      <figure className="decorative-image">
        <img src={background} alt="decorative" />
      </figure>
      <section className="questions-container">
        <QuizzProgressBar quizz={quizz} questionIndex={questionIndex} />
        <h2>{quizz[questionIndex].question}</h2>

        <ul
          className={`layout-${quizz[questionIndex].answears.length} buttons-container`}
        >
          {quizz[questionIndex].answears.map((answear, index) => (
            <li key={answear}>
              <button type="button" onClick={() => handleQuizzButton(index)}>
                {answear}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Quizz;
