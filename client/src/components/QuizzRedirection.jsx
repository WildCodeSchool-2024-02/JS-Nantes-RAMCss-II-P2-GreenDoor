import { NavLink } from "react-router-dom";

function QuizzRedirection() {
  return (
    <section className="quizz-redirection">
      <div>
        <h3>Didn’t find your dream plant ? </h3>
      </div>
      <div>
        <NavLink className="redirect" to="quizz">
          TAKE OUR QUIZZ
        </NavLink>
      </div>
    </section>
  );
}

export default QuizzRedirection;
