"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <section className="top-section">
      <div className="top-left">
        <Image src="/images/side-banner-1.png" width={1066} height={315} alt="hero" />
        <div className="text-content">
          <h1>UN STITCHED</h1>
          <h1>FALL/WINTER NEW ARRIVALS</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
    <section className="category-section">
      <br/>
      <h1 className="heading-block">SHOP BY CATEGORY</h1>
      <br/>
      <div className="row">
        <div className="column">
          <Image src="/images/image-1.png" alt="unstitched" width={800} height={500} />
          <h1>UNSTITCHED</h1>
        </div>

        <div className="column">
            <Image src="/images/image-2.png" alt="ready to wear" width={800} height={200} />
            <h1>READY TO WEAR</h1>
        </div>
        
        <div className="column">
            <Image src="/images/image-3.png" alt="ready to wear" width={800} height={200} />
            <h1>MAN</h1>
        </div>

        <div className="column">
            <Image src="/images/image-4.png" alt="ready to wear" width={800} height={200} />
            <h1>KIDS</h1>
        </div>

      </div>
      
    </section>

    <section className="category-section">
      <br/>
      <h1 className="heading-block">TRENDING</h1>
      <br/>
      <div className="row">
        <div className="column">
          <Image src="/images/trending-1.png" alt="Trending1" width={800} height={200} />
        </div>

        <div className="column">
            <Image src="/images/trending-2.png" alt="Trending2" width={800} height={200} />
        </div>
        
        <div className="column">
            <Image src="/images/trending-3.png" alt="Trending3" width={800} height={200} />
        </div>

        <div className="column">
            <Image src="/images/trending-4.png" alt="Trending4" width={800} height={200} />
        </div>

      </div>
      
    </section>
    
    <section className="bottom-section">
      <div className="info">
          <h1 className="h1">MAH FAISHON</h1>
          <p className="p">mahtecktech@gmail.com</p>
          <br/>
          <h2 className="h2">General</h2>
          <ul className="navbottom">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/term">Term & Condition</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/modeofpayment">Mode of Payment</Link></li>
          </ul>
      </div>

      <div className="newsletter">
          <h1>NEWS LETTER</h1>
          <p>Sign up for our newsletter and receive exclusive offers!</p>
          <input type="email" placeholder="Enter your email" />
          <p className="p">I agree to receive marketing emails and special deals</p>
      </div>
    </section>
    <br/>
   
   </main> 
  )
}
