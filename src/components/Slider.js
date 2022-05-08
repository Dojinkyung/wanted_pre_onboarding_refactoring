import styles from './Slider.module.scss'
import { useState } from 'react'

const BTN_VAL = [1, 25, 50, 75, 100]

function Slider() {
  const [percent, setPercent] = useState(1)
  const onChange = (event) => {
    setPercent(event.currentTarget.value)
  }
  const handleBtnClick = (event) => {
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
        <div className={styles.btns}>
          {BTN_VAL.map((btn) => (
            <button
              type='button'
              key={`btn-key:${btn.toString()}`}
              className={styles.btn}
              onClick={handleBtnClick}
              value={btn}
            >
              <div className={styles.btn_style}>{btn}%</div>
            </button>
          ))}
        </div>
      </form>
    </div>
  )
}
export default Slider
