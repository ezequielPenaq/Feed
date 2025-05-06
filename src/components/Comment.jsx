import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';




export function Comment ({content,onDeleteComment}){

    const[likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content);
      }

    function handleLikeComment (){
       setLikeCount((state)=>{
        return state + 1
       })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GabiAnaa.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                            <strong>Ana Gabriela</strong>
                            <time title='28 de abril às 12:34h'  dateTime='2025-04-28 12:30:00'>Cerca de à 1h atrás</time>
                        </div>

                        <button onClick ={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeComment}> 
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}