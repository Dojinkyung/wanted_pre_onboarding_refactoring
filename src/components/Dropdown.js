import { useState, useEffect, useMemo } from 'react'
import styles from './Dropdown.module.scss'

function Dropdown() {
  const [coins, setCoins] = useState([])
  const [values, setValue] = useState('All Symbols')
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')

  const searchSymbols = useMemo(() => {
    if (!search) {
      return coins
    }
    return coins.filter((data) => {
      return data.symbol.includes(search.toUpperCase())
    })
  }, [search, coins])
  const onChange = (event) => {
    setSearch(event.currentTarget.value)
  }
  const onClick = (event) => {
    event.preventDefault()
    setShow((current) => !current)
  }
  const onValue = (event) => {
    event.preventDefault()
    setValue(event.currentTarget.name)
  }

  const getCoins = async () => {
    const json = await (await fetch(`https://api.coinpaprika.com/v1/tickers`)).json()
    setCoins(json.slice(0, 100))
  }
  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div>
      <h1>Dropdown</h1>
      <div className={styles.dropDown}>
        <button type='button' onClick={onClick} className={styles.dropDownBtn}>
          {values}
        </button>

        <ul id='dropdown' className={show ? styles.select : styles.hidden}>
          <input
            placeholder='Search Symbols'
            type='text'
            value={search}
            className={styles.searcher}
            onChange={onChange}
          />
          <button type='button' onClick={onValue} className={styles.dropBtn} name='All Symbols'>
            All Symbols
          </button>
          {searchSymbols.map((coin) => (
            <button
              type='button'
              key={`coin-key ${coin.id}`}
              onClick={onValue}
              className={styles.dropBtn}
              name={`${coin.symbol}USD.PERP`}
            >
              {coin.symbol}USD.PERP
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Dropdown
