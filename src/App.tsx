import { Header } from "./components/Header";

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          aside
        </aside>

        <main>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minus explicabo
          assumenda quo delectus animi ut incidunt autem at mollitia quas, ea modi dignissimos! 
          Laudantium saepe illo hic sint minus.
        </main>
      </div>
    </>
  )
}
