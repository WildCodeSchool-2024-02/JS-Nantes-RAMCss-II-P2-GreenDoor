import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizzProgressBar from "../components/QuizzProgressBar";
import quizz from "./quizz.json";
import background from "../assets/images/headerCactus.jpg";
import "../styles/Quizz.css";

function Quizz() {
  // this state is used to keep track of the question index, and also to display the intro page if it's null
  const [questionIndex, setQuestionIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  function handleQuizzButton(index) {
    setQuestionIndex(() => questionIndex + 1);
    setAnswers(() => {
      const updatedAnswers = [...answers];
      updatedAnswers.push(index);
      return updatedAnswers;
    });
  }

  // This hook is used to navigate to the results page
  useEffect(() => {
    if (answers.length >= quizz.length) {
      const condensedAnswers = answers.join("");
      // this is used to navigate to the results page
      setTimeout(() => navigate(`/results/${condensedAnswers}`), 800);
    }
  }, [answers]);

  return (
    <section className="full-page-container">
      <figure className="decorative-image">
        <img src={background} alt="decorative" />
      </figure>
      <section className="questions-container">
        {questionIndex === null || questionIndex >= quizz.length ? (
          // This is the intro of the quizz
          <>
            <h2>
              Find your <strong>dream plant</strong> !
            </h2>
            <h3>
              Take a 1-minute assessment to tell us about yourself and enable us
              to identify the ideal house plant that matches your preferences
            </h3>
            <button
              type="button"
              onClick={() => {
                setQuestionIndex(() => 0);
                setAnswers(() => []);
              }}
            >
              Start the quizz
            </button>
          </>
        ) : (
          // this is the part with the regular quizz
          <>
            <QuizzProgressBar quizz={quizz} questionIndex={questionIndex} />
            <h2>{quizz[questionIndex].question}</h2>

            <ul
              className={`layout-${quizz[questionIndex].answers.length} buttons-container`}
            >
              {quizz[questionIndex].answers.map((answer, index) => (
                <li key={answer}>
                  <button
                    type="button"
                    onClick={() => handleQuizzButton(index)}
                  >
                    {answer}
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
