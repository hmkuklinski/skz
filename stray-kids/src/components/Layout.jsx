import NavBar from "./NavBar"

const Layout = (props) => {
  return (
    <>
      {/* Header */}
      <NavBar />
      {/* Sidebar */}
      {props.children}
      {/* Footer */}
    </>
  )
}

export default Layout;