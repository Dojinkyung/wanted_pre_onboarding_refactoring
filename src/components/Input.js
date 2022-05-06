import { useState } from 'react'
import styles from './Input.module.scss'
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Input() {
  const [values, setValues] = useState('')
  const [errors, setErrors] = useState({})
  const [show, setShow] = useState(false)

  const onClick = (event) => {
    event.preventDefault()
    setShow((current) => !current)
  }
  const onChange = (event) => {
    const EMAIL_RE = /^[A-Za-z0-9-_]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(event.currentTarget.value)
    setValues(EMAIL_RE)
  }
  const onBlur = (event) => {
    event.preventDefault()
    if (event.currentTarget.value && !values) {
      setErrors(true)
    } else if (!event.currentTarget.value) {
      setErrors(true)
    } else {
      setErrors(false)
    }
  }
  return (
    <div>
      <h1>Input</h1>
      <form>
        <label htmlFor='email'>Email</label>
        <div className={styles.input}>
          <input
            className={styles.input_email}
            type='email'
            id='email'
            name='email'
            placeholder='E-mail'
            onChange={onChange}
            onBlur={onBlur}
          />
          <span>
            <FontAwesomeIcon icon={faCheckCircle} className={errors ? styles.errorcolor : styles.correct} />
          </span>
        </div>
        {errors ? <div className={styles.errorText}>Invalid e-mail address</div> : null}
      </form>
      <form>
        <label htmlFor='password'>Password</label>
        <div className={styles.input}>
          <input
            className={styles.input_password}
            type={show ? 'text' : 'password'}
            name='password'
            id='password'
            placeholder='Password'
            onChange={onChange}
          />
          <button type='button' onClick={onClick} className={styles.passwordShow_btn}>
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
          </button>
        </div>
      </form>
    </div>
  )
}
export default Input
