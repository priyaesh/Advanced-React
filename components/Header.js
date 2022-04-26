import Link from 'next/link';

export default function Header(){
    return (
        <header>
            <div className="bar">
              <Link href="/">Sick fits</Link>  
            </div>
            <div className="sub-bar"></div>
            <p>
               Search
            </p>
        </header>
    )
}