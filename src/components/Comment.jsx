import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

import { Avatar } from './Avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/williamroger.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime} >
              <strong>William Roger</strong>
              <time title='28 de Março de 2023 às 01:00h' dateTime='2023-03-28 01:00:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button> 
        </footer>
      </div>
    </div>
  );
}