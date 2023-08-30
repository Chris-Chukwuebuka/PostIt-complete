import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import "../styles/ultimate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header"
import Loading from "../components/Loading";
const Edit = () => {
  const { storyId } = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/all/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setTag(story.tag);
    setDescription(story.description);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(
      `${baseURL}/story/${storyId}`,
      { tag, title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
              toast.success("Story  edited successfully");

      redirect("/mystories");
    } else {
              toast.error("error occurred while updating, try again");

    }
  };
  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleUpdate}>
          <div className=" d-flex justify-content-center mt-3  Random">
            <label htmlFor="title"></label>

            <input
              className=" w-75 p-2 h-25"
              type="text"
              placeholder="Title:"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <label htmlFor="tag"></label>

            <select
              className="  w-75 h-50"
              name=""
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="" className="  ps-2">
                Tag:
              </option>
              <option value="nature">Nature</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="sport">Sport</option>
              <option value="technology">Technology</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <label htmlFor="description"></label>
            <textarea
              className="w-75 h-25"
              name=""
              id="description"
              cols="30"
              rows="15"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mt-5 Press">
            <button>{loading ? <Loading/>: "Publish Story"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
