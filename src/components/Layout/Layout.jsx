import { Outlet, Link } from 'react-router-dom';
import "../../App.css";


const Layout = () => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/todo">✅ To-Do</Link></li>
            <li><Link to="/users">👥 Users</Link></li>
            <li><Link to="/products">🛒 Products</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
