import Styles from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={Styles.container}>
      <button className={Styles.button}>Previous</button>
      <button className={Styles.button} disabled>Next</button>
    </div>
  )
}

export default Pagination
