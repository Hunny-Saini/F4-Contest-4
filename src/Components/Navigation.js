

const Navigation = () => {
    return (
        <nav>
            <p>Header</p>
            <div className="links-container">
                <div className="signup"><a href="/">Signup</a></div>
                <div className="profile"><a href="/profile">Profile</a></div>
            </div>
        </nav>
    )
}

export default Navigation;