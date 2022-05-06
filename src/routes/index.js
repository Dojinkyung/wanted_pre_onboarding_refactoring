import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Input />
      <Slider />
      <Dropdown />
    </div>
  )
}

export default App
