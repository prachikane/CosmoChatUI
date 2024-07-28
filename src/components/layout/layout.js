import { Outlet } from 'react-router-dom';
import './layout.css'
import Sidebar from '../sidebar/sidebar';

const Layout = () =>{
    return(
        <div className="App">
            <Sidebar/>
            <div className='page'>
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;