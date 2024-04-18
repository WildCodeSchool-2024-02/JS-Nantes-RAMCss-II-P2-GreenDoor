import { useParams } from "react-router-dom";
// import plants from "../plants.json";

function Results() {
  const { answers } = useParams();

  return (
    <h1>Hello from results, these are the answers to the quizz: {answers}</h1>
  );
}

export default Results;
