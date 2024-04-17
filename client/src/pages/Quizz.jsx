import { useState } from "react";
import QuizzProgressBar from "../components/QuizzProgressBar";
import quizz from "./quizz.json";
import background from "../assets/images/headerCactus.jpg";
import "../styles/Quizz.css";

function Quizz() {
  // this state is used to keep track of the question index, and also to display the intro page if it's null
  const [questionIndex, setQuestionIndex] = useState(null);
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
        {questionIndex === null ? (
          // This is the intro of the quizz
          <>
            <h1>
              Find your <strong>dream plant</strong> !
            </h1>
            <h3>
              Take a 1-minute assessment to tell us about yourself and enable us
              to identify the ideal house plant that matches your preferences
            </h3>
            <button type="button" onClick={() => setQuestionIndex(() => 0)}>
              Start the quizz
            </button>
          </>
        ) : (
          // this is the part with the regular quizz
          <>
            <QuizzProgressBar quizz={quizz} questionIndex={questionIndex} />
            <h2>{quizz[questionIndex].question}</h2>

            <ul
              className={`layout-${quizz[questionIndex].answears.length} buttons-container`}
            >
              {quizz[questionIndex].answears.map((answear, index) => (
                <li key={answear}>
                  <button
                    type="button"
                    onClick={() => handleQuizzButton(index)}
                  >
                    {answear}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </section>
  );
}

export default Quizz;
