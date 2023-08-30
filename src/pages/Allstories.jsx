import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import people from "../assets/people.png";
import { MdOutlineReadMore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../styles/ultimate.css";
import Header from "../components/Header";
import Loading from "../components/Loading";
const Allstories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  //get all stories
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/all`, {
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
  return (
    <div className="container">
      <Header t3={"LogOut"} />
      <div className="d-md-flex py-2 mx-2 wel bg-body-tertiary">
        <div className="mt-3 user">
          <h1>
            You’ve got a story, Post<span className="text-primary">it</span>.
          </h1>
          <p className="">
            Road trip with friends. Music, attractions, adventure. Fun times,
            good memories. 🚗🎶 What kind of stories do you like?
          </p>
        </div>
        <div className="peo">
          <img src={people} alt="" />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          stories.map((s) => {
            const {
              _id,
              image,
              description,
              title,
              createdAt,
              tag,
              createdBy,
              // createdBy: { username },
            } = s;
            return (
              <div key={_id} className="  text-center ms-3 my-2">
                <div className="   w-auto h-auto">
                  <div className=" pics1  m-1 w-auto h-50">
                    <img
                      src={image}
                      alt=""
                      width={"250px"}
                      height={"200px"}
                      className="px-1 py-2 "
                    />
                  </div>
                  <p
                    className={`${
                      tag == "lifestyle"
                        ? " bg-warning"
                        : tag == "sport"
                        ? "bg-danger"
                        : tag == "nature"
                        ? "bg-success"
                        : tag == "technology"
                        ? "bg-primary"
                        : "bg-dark"
                    } Tags`}
                  >
                    {tag}
                  </p>
                  <div className="Title ">
                    <p>{title}</p>
                  </div>
                  <div className="d-flex  justify-content-center Next">
                    <h6 className="text-dark">
                      <CgProfile /> By {createdBy?.username}
                    </h6>
                    <p className="ps-2">{new Date(createdAt).toDateString()}</p>
                  </div>
                  <p className="mb-3  w-auto h-auto">
                    {description.slice(0, 20)}
                  </p>

                  <Link
                    to={`/single/${_id}`}
                    className="text-decoration-none  pb-3"
                  >
                    {" "}
                    <MdOutlineReadMore />
                    Read More
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Allstories;
