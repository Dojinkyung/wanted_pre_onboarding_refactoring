import { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [toggle, setToggle] = useState(false)
  const onClick = () => {
    setToggle((prevState) => !prevState)
  }
  return (
    <div>
      <h1>Toggle</h1>
      <div className={styles.toggle_part}>
        <button type='button' className={`${styles.toggle_btn} ${toggle ? styles.clicked : null}`} onClick={onClick}>
          기본
        </button>
        <button type='button' className={`${styles.toggle_btn} ${!toggle ? styles.clicked : null}`} onClick={onClick}>
          상세
        </button>
      </div>
    </div>
  )
}
export default Toggle
