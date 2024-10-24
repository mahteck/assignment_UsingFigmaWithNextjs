import Link from "next/link";
import "../style/style.css"
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="logo">
                <Image  src="/images/logo.png" alt="Logo" width={85} height={60} />
                <span>MAH FAISHON</span>

                <ul className="nav-links">
                    <li><Link href="/">HOME</Link></li>
                    <li className="has-submenu">
                        <Link href="/shop">SHOP</Link>
                        <ul className="submenu">
                            <li><Link href="/WOMEN">WOMEN</Link></li>
                            <li><Link href="/MAN">MAN</Link></li>
                            <li><Link href="/KIDS">KIDS</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>

                <div className="rightbuttons">
                    <Image src="/images/sign-up.png" alt="signup" width={30} height={30} />
                    <Image src="/images/add-to-cart.png" alt="cart" width={30} height={30} />
                </div>
            </div>
        </nav>
    )
}