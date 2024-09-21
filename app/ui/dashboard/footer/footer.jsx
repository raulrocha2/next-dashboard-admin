import Styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>Lama Dev</div>
      <div className={Styles.text}>© All rights reserved.</div>
    </div>
  )
}

export default Footer
