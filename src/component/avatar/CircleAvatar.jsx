import { Avatar } from '@mui/material';


import "./circleavtar.css";

const CircleAvatar = ({url,name}) => {


  const styles = {
      width:'60px',
      height: '60px',
      ['@media (max-width:820px)']: { // eslint-disable-line 
        width:'50px',
        height: '50px',
      },
      ['@media (max-width:420px)']: { // eslint-disable-line 
        width:'40px',
        height: '40px',
      },
      objectFit: "cover"
  }
    return (
      <div className="avtar-container">
          <Avatar 
        alt={name || 'instabook'}
        src={url}
       
        sx={styles}
      />
      <span className="avtar-text">{name || ''}</span>
      </div>
    )
}

export default CircleAvatar
