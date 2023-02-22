import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      descr:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
      img: "https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      descr:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
      img: "https://dummyimage.com/600x400/b064b0/a6b071.png&text=Anything",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      descr:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
      img: "https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      descr:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
      img: "https://dummyimage.com/600x400/b064b0/a6b071.png&text=Anything",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      descr:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
      img: "https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.descr}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
