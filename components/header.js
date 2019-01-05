import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = props => (
  <header>
    <style jsx>{`
      header {
        display: flex;
        padding: 0 16px;
        height: 50px;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <nav>
      <Link href="/projects">
        <a style={linkStyle}>Projects</a>
      </Link>
      <Link href="/resume">
        <a style={linkStyle}>Resume</a>
      </Link>
      <button onClick={props.onClickContact}>Contact</button>
    </nav>
  </header>
);

export default Header;
