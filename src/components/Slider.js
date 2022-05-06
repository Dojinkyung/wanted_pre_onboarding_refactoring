import styles from './Slider.module.scss'
import { useState } from 'react'

function Slider() {
  const [percent, setPercent] = useState(1)

  const onChange = (event) => {
    setPercent(event.currentTarget.value)
  }

  return (
    <div>
      <h1>Slider</h1>
      <form className={styles.slider}>
        <div className={styles.showBox}>
          <span className={styles.showtext}>{percent} %</span>
        </div>
        <input
          type='range'
          onChange={onChange}
          min='1'
          value={percent}
          max='100'
          step='1'
          style={{ '--percent': `${percent}%` }}
        />
      </form>
    </div>
  )
}
export default Slider
