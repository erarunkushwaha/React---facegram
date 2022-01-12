import './post.css';
import CircleAvatar from '../avatar/CircleAvatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { removePost } from '../../function/post';

const Post = ({setReloadPost,...props}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const deletepost  = (postId,imageId) => {
  
      removePost(postId,imageId).then((res) =>setReloadPost(true)).catch((err) => console.log(err))
      handleClose()
    }
    // console.log(props)

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const styles = {
      iconStyle:{
        fontSize: '30px',
        opacity: 0.7,
        ['@media (max-width:420px)']: { // eslint-disable-line 
            fontSize: '20px',

        },
      },
      popverStyle:{
        padding:"10px 10px", width:'100px',textAlign:"center",
        cursor:"pointer",
        ['@media (max-width:420px)']: { // eslint-disable-line 
            padding:"5px 0px",
            width:'80px'

        },
      },
      threedot:{
        fontSize: 20, cursor: "pointer",
        marginLeft:"100px",
        ['@media (max-width:420px)']: { // eslint-disable-line 
            marginLeft:"80px",

        },
        
      }

    }
    return (
        <div className='post-container'>
            <div className="post-header">
                <div className="post-user-pic">
                    <CircleAvatar url={ "https://i.pinimg.com/originals/4d/bd/02/4dbd0246dfe6443c513491e17f79af0e.jpg" } />
                    <span className='user-name-text'>ragnar__lothborck</span>
                   
                </div>

                <div onClick={ handleClick } className="post-popover" >
                </div>
                <Popover 
                    id={id}
                       open={open}
                     anchorEl={anchorEl}
                     
                       onClose={handleClose}
                       anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                        
                        <Typography sx={ styles.popverStyle } onClick={() =>deletepost(props._id,(props.image && props.image.public_id))}>Delete.</Typography>
                        <Typography sx={styles.popverStyle} onClick={() => handleClose()}>Cancel.</Typography>
                        <Divider />
                    </Popover>
                   
                
              <div className="three-dot"  onClick={ handleClick } >
              <MoreHorizIcon  sx={ styles.threedot } />
              </div>
            </div>
                    
            <div className="post-content-wrapper">
               {props.image && <img src={props.image.url} alt="" className='post-image' />}
                <div className='post-caption'>
                   {props.name}
                </div>
            </div>

            <div className="post-footer">
                <div className="comment-section">
                    <SentimentSatisfiedAltIcon sx={ styles.iconStyle } />
                    <input type="text" placeholder="Add a comment..." name="" id="" className='comment' />
                </div>
                <span className='comment-post'>Post</span>
            </div>
        </div>
    )
}

export default Post
