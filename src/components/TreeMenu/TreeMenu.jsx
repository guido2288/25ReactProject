import { FaHome } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


import "./treeMenu.css";

const TreeMenu = () => {
  return (
    <div className="treeMenu-container">
        <aside>
            <ul>
                <li><FaHome /> Home</li>
                <li><IoGrid /> Profile</li>
                <li><IoMdSettings /> Settings</li>
            </ul>
        </aside>
        <nav>
            <h2>Home</h2>


            <img src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg?w=740" alt="avatar" />
 
        </nav>


    </div>
  )
}

export default TreeMenu