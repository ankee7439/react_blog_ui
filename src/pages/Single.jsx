import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
// import User from '../images/'
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://dummyimage.com/600x400/262126/a6b071.png&text=Anything"
          alt=""
        />

        <div className="user">
          <img
            src="https://dummyimage.com/600x400/b064b0/a6b071.png&text=Anything"
            alt=""
          />
          <div className="info">
            <span>Ankit</span>
            <p>Posted 1 day ago.</p>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <h5>Edit</h5>
              </Link>
            </div>
            <div className="delete">
              <Link to={`/write?delete=2`}>
                <h5>Delete</h5>
              </Link>
            </div>
          </div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque
            esse quam rem unde soluta magni. Ex voluptate adipisci, nemo autem
            optio ad nam distinctio voluptas ipsam soluta atque et unde!
            Perferendis eos tempore et nam. Dicta unde dolorum quo explicabo
            assumenda dolorem? Nam nostrum eius ut exercitationem dignissimos,
            eos qui impedit aut odit cumque eligendi aperiam magni fuga ea nemo
            iusto sit quis at ducimus. Ipsam necessitatibus incidunt accusamus
            eveniet, vero explicabo, labore unde debitis magni distinctio vel
            error dignissimos asperiores odio, quia facere exercitationem. Ut
            reprehenderit praesentium sunt ex hic nesciunt. Aliquam fugit facere
            ratione impedit repudiandae dolores vel iste, reiciendis est unde,
            obcaecati, fuga nesciunt debitis quae. Enim quo quaerat quod quas
            sequi? Facere obcaecati fuga quod repellendus nostrum enim
            quibusdam, maxime soluta tempore quas. Iure, assumenda facilis
            tempore nisi officia cupiditate sapiente quos excepturi fugit quis
            ipsum blanditiis mollitia laborum incidunt eum. Dolorum
            exercitationem magni temporibus, fugiat odio quisquam recusandae id
            non. Distinctio repellendus vero, harum corporis sit neque aliquam
            tempore quis. Illum qui fugiat sint nobis iste labore harum, totam
            ex cumque quod, eos quos facere deleniti architecto accusantium
            enim. Deserunt, eveniet aperiam quia blanditiis fugit aliquam
            accusamus, eius vitae, fuga quod saepe inventore laudantium.
          </p>
        </div>
      </div>

      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
