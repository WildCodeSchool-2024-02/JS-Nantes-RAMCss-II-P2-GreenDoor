import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <>
      <section className="error-content">
        <h1> Error 42</h1>
        <h3>
          Sorry we can't provide you<br/>
          <strong>The Answer to The Great Question </strong>
        </h3>
         
      </section>
      <Footer />
    </>
  );
}

export default ErrorPage;
