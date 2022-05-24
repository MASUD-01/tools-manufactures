import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
// import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile" >
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content" >
                {/* <!-- Page content here --> */}
                < h2 className='text-3xl' > Dashboard (user: {user?.displayName})</h2 >
                <Outlet></Outlet>


            </div >
            <div className="drawer-side" >
                <label htmlFor="dashboard-sidebar" className="drawer-overlay" ></label >
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" >
                    {/* <!-- Sidebar content here --> */}

                    {!admin && <>
                        < li > <Link to='/dashboard'>My Orders</Link></li >
                        <li><Link to='/dashboard/addareview'>My reviews</Link></li>

                    </>
                    }

                    {

                        <>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addaproduct">Add a Product</Link></li>
                            <li><Link to="/dashboard/manageallorder">Manage All orders</Link></li>
                            <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                        </>
                    }
                </ul >

            </div >
        </div >
    );
};

export default Dashboard;