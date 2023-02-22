import React from 'react'

const Menu = () => {
    const posts = [
        {
          id:1,
          title:"Lorem ipsum dolor sit amet.",
          descr:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
          img:"https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    
        },
        {
          id:2,
          title:"Lorem ipsum dolor sit amet.",
          descr:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
          img:"https://dummyimage.com/600x400/b064b0/a6b071.png&text=Anything",
    
        }  ,
        {
          id:3,
          title:"Lorem ipsum dolor sit amet.",
          descr:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
          img:"https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    
        },
        {
          id:4,
          title:"Lorem ipsum dolor sit amet.",
          descr:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
          img:"https://dummyimage.com/600x400/b064b0/a6b071.png&text=Anything",
    
        }  ,
        {
          id:5,
          title:"Lorem ipsum dolor sit amet.",
          descr:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias suscipit officiis, hic cupiditate fugiat libero officia ratione? Obcaecati maiores, iusto iure aut tenetur recusandae velit!",
          img:"https://dummyimage.com/600x400/262126/a6b071.png&text=Anything",
    
        }
      ];
  return (
    <div className='menu'>
      <h1>Other Post You May Like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
