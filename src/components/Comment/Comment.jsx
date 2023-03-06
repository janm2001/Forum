import React from 'react'
import styles from './Comment.module.css'
import Typography from '@mui/material/Typography';

const Comment = ({name,id}) => {
  return (
    <div key={id} className={styles.comment}>
        <Typography component="p">{name}</Typography>
    </div>
  )
}

export default Comment