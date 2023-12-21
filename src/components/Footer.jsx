function Footer({hamburgerOpen}) {
    return (
        <>
            <div className={hamburgerOpen? "display-nothing":"header-container"}>
                <ul className="header-email-phone no-bullet-indent content-container">
                    <li>Bryant & Associates CPA</li>
                    {/* <li>·</li> */}
                    <li>3800 Oceanic Drive, Suite 116</li>
                    {/* <li>·</li> */}
                    <li>Oceanside, CA 92056</li>
                </ul>
            </div>

        </>
    )
}

export default Footer;