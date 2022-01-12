import { useEffect, useState } from 'react'
import NavSlider from '../../component/navslider/NavSlider'
import Post from '../../component/post/Post'
import Share from '../../component/postwriter/Share'
import { getAllPost } from '../../function/post'

import './home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [reloadPost, setReloadPost] = useState(true)

    useEffect(() => {
        
        getAllPost().then((res) =>{
            setReloadPost(false);
            setPosts(res.data.post)}).catch(err => console.log(err.response))
    }, [reloadPost])


    return (
        <div className='home-container'>
            <NavSlider/>

        <Share setReloadPost={setReloadPost}/>
       {/* {getAllPost().then((res) => console.log(res))} */}
     

             {posts.map((p) => {
                 return  <Post key={p._id} setReloadPost={setReloadPost} {...p}  />
             })}
      
        {/* <Post/>
        <Post/>
        <Post/> */}


             
        </div>
    )
}

export default Home
