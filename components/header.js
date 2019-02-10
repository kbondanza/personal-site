import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 0 16px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #283593;
`;

const StyledLogo = styled.a`
  color: #283593;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
`;

const StyledLink = styled.a`
  margin-right: 15px;
  color: #fff;
  letter-spacing: 1px;
`;

const Header = props => (
  <StyledHeader>
    <Link href="/">
      <StyledLogo>KB</StyledLogo>
    </Link>
    <nav>
      <Link href="/projects">
        <StyledLink>Projects</StyledLink>
      </Link>
      <Link href="/resume">
        <StyledLink>Resume</StyledLink>
      </Link>
      <button onClick={props.onClickContact}>Contact</button>
    </nav>
  </StyledHeader>
);

export default Header;
