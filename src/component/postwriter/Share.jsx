import  './share.css';
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import CancelIcon from '@mui/icons-material/Cancel';
import {  useState } from 'react';
import { createPost } from '../../function/post';

const Share = ({setReloadPost}) => {
    
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');

const getFile = (e) => {
setFile(e.target.files[0])
setFileName(e.target.files[0].name);
}
  const sharePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("name", caption);
    createPost(formData).then(res => {

          setFile('')
          setFileName('');
          setCaption('');
          setReloadPost(true);

    }).catch((err) => console.log(err));
    
  }

  const editPost = () => {
    
  }
    return (
        <div className='share-container'>
      <div className='share-wrapper'>
        <div className='share-top'>
          <img src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' alt='' className='share-profile-pic' />
          <input
            type='text'
            placeholder={"Write your post  "}
            className='share-input'  onChange={(e) => setCaption(e.target.value
              )}
              value={caption}
          />
        </div>
        <hr className='share-hr' />
       
        {file && (   <div className="share-img-container">
            <img className="share-img"  src={URL.createObjectURL(file)}  alt="" />
            <CancelIcon className="share-cancel-img" onClick={() => setFile(null)}/>
          </div>)}
          
        
        <form className='share-botton' onSubmit={sharePost}  encType='multipart/form-data'>
        <div className='share-options'>
            <label htmlFor="file"  className='share-option'>
              <PermMediaIcon htmlColor='tomato' className='share-icon' />
              <span className='share-option-text'>Photo</span>
              <input style={{display:"none"}} type="file" id="file" accept=".png, .bmp, .jpg, .jpeg"  onChange={(e) => getFile(e)} />
            </label >
            <div className='share-option'>
              <LabelIcon
                htmlColor='#2979ff
'
                className='share-icon'
              />
              <span className='share-option-text'>Tag</span>
            </div>
            <div className='share-option'>
              <RoomIcon
                htmlColor='#00e676
'
                className='shareIcon'
              />
              <span className='share-option-text'>Location</span>
            </div>
            <div className='share-option'>
              <EmojiEmotionsIcon htmlColor='#ffcf33' className='share-icon' />
              <span className='share-option-text'>Feelings</span>
            </div>
            <button  className='share-button' type="submit">
              
              
               Share </button>

            
          </div>
        </form>




      </div>
    </div>
    )
}

export default Share;
