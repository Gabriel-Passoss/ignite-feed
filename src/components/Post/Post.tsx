import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

interface PostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string
  },
  content: any,
  publishedAt: Date
}

interface LineProps {
  type: string,
  content: string
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana ein'])
  const [newComment, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    window.event?.preventDefault()
    
    setComments([...comments, newComment])

    setNewCommentText('')
  }

  function handleNewCommentChange() {
    //@ts-ignore
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentsToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentsToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line: LineProps) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          name="comment"
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newComment}
        />
        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              content={comment} 
              key={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}