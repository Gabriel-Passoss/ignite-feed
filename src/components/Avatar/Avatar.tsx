import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
}

export function Avatar({src}: AvatarProps) {
  return (
    <img src={src} className={styles.avatar} />
  )
}