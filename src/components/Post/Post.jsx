import React, { useEffect, useState } from 'react'
import styles from './Post.module.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Comment from '../Comment/Comment';
import slika1 from '../../assets/slika1.png';
import slika2 from '../../assets/slika2.png';
import slika3 from '../../assets/slika3.png';
import slika4 from '../../assets/slika4.png';
import slika5 from '../../assets/slika5.png';
import slika6 from '../../assets/slika6.png';
import slika7 from '../../assets/slika7.png';
import slika8 from '../../assets/slika8.png';
import slika9 from '../../assets/slika9.png';
import slika10 from '../../assets/slika10.png';
const Post = ({title,key,id,user}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open,setOpen] = useState(false);
  const [userData,setUserData] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //comments
  const [comments,setComments] = useState([]);
  useEffect(() =>{
    fetchComments();
    fetchUser();
  },[]);

  const fetchComments =async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }

  const fetchUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }


  function getRandomImage(id){
    const userPicture = eval("slika" + id)
    return userPicture;
  }

  

  const updatedUsers = userData.map((user) => ({
    ...user,
    image: getRandomImage(user.id)
  }));

 

  const updatedCurrentUser = updatedUsers.filter((updatedUser) => updatedUser.id === user);

  


  

  const currentPostComments = comments.filter((comment) => comment.postId == id);


  console.log(updatedCurrentUser);
  

  return (
    <div key={key} className={styles.post}>
        <h2>{title}</h2>
        
        <button onClick={handleOpen}>More info</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <Typography id="modal-modal-title" variant="h4" component="h2">
            {title}
            
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2" className={styles.user}>
            User id: {updatedCurrentUser.map((user) => (<div className={styles.userImage}>
              {user.id} <img src={user.image} alt="" />
            </div>))}
            
            
            
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentPostComments.map((comment) => (<Comment name={comment.name} id={comment.id} />))}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Post