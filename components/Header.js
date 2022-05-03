import Link from 'next/link';
import styled from 'styled-components';
import Nav from './nav';

const Logo = styled.h1`
background: red;
a{
    color:blue;
}
`;

export default function Header(){
    return (
        <header>
            <div className="bar">
            <Logo>
                <Link href="/">
                  Sick fits
                </Link>
                </Logo>
              
            </div>
            <div className="sub-bar">
            <p>
               Search
            </p>
            </div>
            <Nav/> 
        </header>
    )
}