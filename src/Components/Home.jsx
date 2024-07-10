import { Link } from "react-router-dom";
import Header from './Navbar';
import main from "../Assets/imgs/main.png";
import Loader from "./Loader";
import Connection from "./Connection";
export default function Home({ products }) {
  <Connection />
  document.title = "Home";
  return (
    <>
      <Header />
      <section className="container my-5 mx-auto text-center w-60 w-sm-100 w-md-100 px-sm-0">
        <img src={main} className="my-5" alt="" />
        <p className="display-4 fw-bold text-center mb-5 px-1">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="text-center fs-5 ff-sf w-75 mx-auto">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <span className="line w-md-100"></span>
      </section>
      <section className="article col-md-6 col-sm-12 mx-auto  ">
        <h2 className="display-5 fw-bold text-center my-5">All articles</h2>
        <div className="row">
          {
            products.length === 0 ? (
            <Loader />
          ) : (
            products.map((data) => (
                <Link to={`/blog/${data.id}`}
                key={data.id}
                className="card col-md-6 col-sm-12  mx-3 mx-auto border-0 text-decoration-none">
                <div className="img3">
                    <img src={data.image}
                      className="card-img-top"
                      alt="img-blog" 
                      />
                </div>
                <div className="card-body ">
                <p className="card-text">{data.title}</p>
                </div>
                </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};