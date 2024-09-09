import Image from 'next/image'
import Logo from "/public/BienalLogo.png"

export default function Home(){
    return (
        <div>
        <main>
            <Image src={Logo} alt = "Bienal Logo" />
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectet</li>
                    <li>Lorem ipsum dolor sit amet, consectet</li>
                </ul>
            </div>
        </main>
        <footer>
            <a href="https://next.js.org">Next</a>
        </footer>
        </div>
    )
}