import react from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';


const Layout = (Component) => {
    
    // useEffect(() => {
    //     // Code to execute only on the client side
    //     console.log('Client-side code executed');
    //     // Add any other client-side specific code here
    //   }, [Component]);

    return () => (
        <div>
            <div className="" >
                <Header />
                <ProSidebarProvider>
                    <main className="flex">
                        <SideBar />
                        <Component/>
                    </main>
                </ProSidebarProvider>

            </div>
        </div>
    );
}

export default Layout
