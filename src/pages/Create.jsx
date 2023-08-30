import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer"
import '../styles/create.css';
import { redirect, useNavigate } from "react-router-dom";

const Create = () => {
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const redirect = useNavigate();
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    formdata.append("description", description);
    formdata.append("image", image);
    const {data} = await axios.post(`${baseURL}/story`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },{title, tag,description,image}
    );

if (data.success) {
  redirect("/allstories")
} else {
  
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="cre my-3 mx-4">
        <h1>Create Story</h1>
        <form encType="multipart/form-data" onSubmit={handleCreate}>
          <div className="title">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="tag">
            <label htmlFor="tag">Tag</label>
            <select
              name=""
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="">Select Tags</option>
              <option value="nature">Nature</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="sport">Sport</option>
              <option value="technology">Technology</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="image">
            <label htmlFor="image">Upload Image</label>
            <input
              accept="image/*"
              type="file"
              placeholder="selce image"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="write">
            <label htmlFor="description"></label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your story......."
            ></textarea>
          </div>

          <button type="submit">
            {loading ? "creating..." : "Publish Story"}
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Create;
