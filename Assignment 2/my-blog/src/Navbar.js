const Navbar = (props) => {

    const activePage = props.activePage;
    const setActivePage = props.setActivePage;

    const handleNavClick = (num) => {
        setActivePage(num);
    }

    return (
        <div id="navbar">
            <ul>
                <li><a id="nav_home" onClick={() => {
                    handleNavClick(1);
                }} className={activePage === 1? 'active' : 'hidden'}>Home</a></li>
                <li><a id="nav_about" onClick={() => {
                    handleNavClick(2);
                }} className={activePage === 2? 'active' : 'hidden'}>About</a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;