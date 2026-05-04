import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="index.html">Home</a>
            <a href="https://github.com/JacktheGeat/">My Github</a>
            <div className="dropdown">
                <button className="dropbtn">Coding Projects</button>
                <div className="dropdown-content">
                    <a href="NN-Handwritten-Numbers">AI Handwritten Number identifier</a>
                    <a href="Email-Scheduling-AI">Oracle Internship AI Agent</a>
                    <a href="Backrooms">Backrooms Datapack</a>
                    <a href="Mystanic">Mystanic Datapack</a>
                    <a href="nachos.demo">Nachos Operating System</a>
                    <a href="react-site">React experimenting</a>
                </div>
            </div>
        </div>
    )
}