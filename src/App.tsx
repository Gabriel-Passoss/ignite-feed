import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Gabriel-Passoss.png',
      name: 'Gabriel dos Passos',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Vcnaves.png',
      name: 'Vitor Cunha Naves',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Salveee'},
      { type: 'paragraph', content: 'Dá uma olhada no projeto que eu fiz neste NLW que saiu, o DoctorCare'},
      { type: 'link', content: 'vcnaves.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },

]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          })}
        </main>
      </div>
    </>
  )
}
