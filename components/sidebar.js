import Links from "./constants"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen , togglebtn}) => {

  return <aside className={`sidebar ${!isOpen && 'hidden'}`} >
<button
onClick={togglebtn}
className="close-btn">
 <FaTimes />
</button>
<div className="side-contanier">
  <Links  styleClass={` ${isOpen && 'sidebar-links'}`} />
</div>
  </aside>
}

export default Sidebar
