import React from 'react'
import Styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Latest Transaction</h2>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image 
                  src="/noavatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
              John Doe
              </div>
              
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.pending}`}>
                Pedding
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>

          <tr>
            <td>
              <div className={Styles.user}>
                <Image 
                src="/noavatar.png"
                alt=''
                width={40}
                height={40}
                className={Styles.userImage}
                />
              John Doe
              </div>
              
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>

          <tr>
            <td>
              <div className={Styles.user}>
                <Image 
                src="/noavatar.png"
                alt=''
                width={40}
                height={40}
                className={Styles.userImage}
                />cancelled
              John Doe
              </div>
              
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions