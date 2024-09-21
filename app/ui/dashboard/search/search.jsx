import { MdSearch } from "react-icons/md"
import Styles from "./search.module.css"

const Search = ({placeholder}) => {
  return (
    <div className={Styles.container}>
      <MdSearch />
      <input 
        type="text" 
        placeholder={placeholder} 
        className={Styles.input}
      />
    </div>
  )
}

export default Search
