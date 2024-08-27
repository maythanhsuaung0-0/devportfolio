import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar'
import React,{useState} from 'react'

const Resume = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <main className="relative scroll-smooth">
    {showMenu ? (
          <MobileNav toggleMenu={toggleMenu} />
        ):<Navbar toggleMenu={toggleMenu} />}
        
    </main>
  )
}

export default Resume
