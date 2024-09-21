import Search from "@/app/ui/dashboard/search/search"
import Styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder={"Search for a user.."}/>
        <Link href="/dashboard/users/add">
        <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
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
            <td>john@mail.com</td>
            <td>13.01.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={Styles.buttons}>
              <Link href="/">
                <button className={`${Styles.button} ${Styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${Styles.button} ${Styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage