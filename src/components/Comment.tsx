import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState} from 'react';

import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        });
    }
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar border={false} src="https://github.com/julia.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Julia</strong>
                            <time title="24 de maio ás 01:50" dateTime="2023-05-24 01:50:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                <button onClick={handleLikeComment}>
                <ThumbsUp size={20}/> Aplaudir <span>{likeCount}</span>    
                </button>   
                </footer>    
            </div>
        </div>
    );
} 