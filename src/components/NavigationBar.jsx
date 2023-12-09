function NavigationBar() {
    return (
        <>
        <div className="navbar-container">
            <ul>
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/about">About</a></li>
                <li className="navbar-item"><a href="/services">Services</a></li>
                <li className="navbar-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
        </>
    )
}

export default NavigationBar;