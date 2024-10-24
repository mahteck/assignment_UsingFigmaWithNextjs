"use client"

import Image from "next/image";

export default function Footer(){
    return (
    <footer className="footer">
        <div className="social-icons">
            <div onClick={() => window.open('https://www.facebook.com/mahteck','_blank')}>
                <Image src="/images/facebook.png" alt="facebook" width={40} height={40} />
            </div>
            <div onClick={() => window.open('https://www.instagram.com/mahteck/','_blank')}>
                <Image src="/images/instagram.png" alt="instagram" width={40} height={40} />
            </div>
            <div onClick={() => window.open('https://www.linkedin.com/in/shoaibmunir88/','_blank')}>
                <Image src="/images/linkedin.png" alt="linkedin" width={40} height={40} />
            </div>
            <div onClick={() => window.open('https://www.youtube.com/@mahteck','_blank')}>
                <Image src="/images/youtube.png" alt="youtube" width={40} height={40} />
            </div>
            </div>
            <div className="footer-text">
            <p>@2024 MAH Online Faishon Store, Powered by 
                <span className="p1" onClick={() => window.open('http://mahteck.com/', '_blank')}> MAH-TECK</span>
            </p>
        </div>
    </footer> 
    );
}