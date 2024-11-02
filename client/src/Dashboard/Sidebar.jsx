import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import LogoImage from "../../src/assets/bookimages/avatarone.avif";
import { HiArrowSmRight, HiChartPie, HiCloudUpload, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";


export default function SideBar() {
  const {user} = useContext(AuthContext)
  return (
    <div>
        <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={LogoImage} imgAlt="logo">
         {user?.displayName || 'Demo user'}
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
           Upload books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}
