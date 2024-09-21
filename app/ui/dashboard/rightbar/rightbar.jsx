import Image from 'next/image'
import Styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.bgContainer}>
          <Image 
            src='/astronaut.png'
            alt=''
            fill
            className={Styles.bg}
          />
        </div>
        <div className={Styles.text}>
          <span className={Styles.notification}>🔥 Available Now</span>
          <h3 className={Styles.title}>How to use the new version od the admin dashborad?</h3>
          <span className={Styles.subtitle}>Take 4 minutes to learn</span>
          <p className={Styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy
          </p>
          <button className={Styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={Styles.item}>
        <div className={Styles.bgContainer}>
          <Image 
            src='/astronaut.png'
            alt=''
            fill
            className={Styles.bg}
          />
        </div>
        <div className={Styles.text}>
          <span className={Styles.notification}>🔥 Available Now</span>
          <h3 className={Styles.title}>How to use the new version od the admin dashborad?</h3>
          <span className={Styles.subtitle}>Take 4 minutes to learn</span>
          <p className={Styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy
          </p>
          <button className={Styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar