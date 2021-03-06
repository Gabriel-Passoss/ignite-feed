import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />
      
      <div className={styles.profile}>
        <Avatar src={"https://github.com/Gabriel-Passoss.png"}/>

        <strong>Gabriel dos Passos</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={19}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}