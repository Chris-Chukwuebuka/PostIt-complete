import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/mystories.css";
import Loading from "../components/Loading";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Mystories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/story`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    console.log(stories);
  };
  useEffect(() => {
    getStories();
  }, []);

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`${baseURL}/story/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.success) {
      window.location.reload();
    }
  };
  return (
    <div className="container">
      <Header t3={"Log Out"}/>
      <div className="mx-4 my-4">
        <div className="d-flex wri">
          <h1>My stories</h1>
          <button>
            <Link className=" text-decoration-none wrr" to="/create">
              Write Story
            </Link>
          </button>
        </div>
        <div className="d-flex gap-3 adp">
          <h2 className="al">All</h2>
          <h2 className="df">Drafts</h2>
          <h2 className="pu">Published</h2>
        </div>
        <hr className="mb-4" />
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              {stories.map((s) => {
                const {
                  _id,

                  description,
                  title,
                } = s;
                return (
                  <div key={_id} className="my-5 tded">
                    <div className="d-md-flex justify-content-between">
                      <p className="titt w-100">{title} </p>
                      <div className="d-flex gap-3 edde">
                        <Link to={`/edit/${_id}`}>
                          <button>
                            {" "}
                            <BiEdit /> Edit Story
                          </button>
                        </Link>
                        <button
                          className="del"
                          onClick={() => handleDelete(_id)}
                        >
                          Delete
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                    <p className="desc">{description.slice(0, 50)} </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mystories;
