import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visiblity:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" value="science" id="science" />
          <label htmlFor="science">Science</label>
          <input type="radio" value="technology" id="technology" />
          <label htmlFor="technology">Technology</label>
          <input type="radio" value="cinema" id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" value="design" id="design" />
          <label htmlFor="design">Design</label>
          <input type="radio" value="food" id="food" />
          <label htmlFor="food">Food</label>
        </div>
      </div>
      White
    </div>
  );
};

export default Write;
