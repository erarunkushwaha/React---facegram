import './header.css';

const Header = () => {
    return (
        <div className='header_container'>
           <div className="header-wrapper">
           <div className="logo-container">
            <span className='logo-text'>facegram</span>
            </div>
            <div className="search-container">
                <input type="search" className='search' placeholder='Search' name="" id="" />
            </div>
           </div>
        </div>
    )
}

export default Header
