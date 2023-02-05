import {useState} from 'react'
import styles from '../style'
import {close, logo, menu} from '../assets'
import {navLinks} from "../constants"

export const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-5'>
        {
          navLinks.map((item, i) => (
            <li key={item.id} className='text-white font-poppins font-normal cursor-pointer text-[16px]'>
              <a href={`#${item.id}`}>
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(prev => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1 gap-5'>
          {
            navLinks.map((item, i) => (
              <li key={item.id} className='text-white font-poppins font-normal cursor-pointer text-[16px]'>
                <a href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
