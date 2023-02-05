import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

export const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-start flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mb-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} max-w-[310px]`}>New way to make payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10'>
          {
            footerLinks.map((link) => (
              <div key={link} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{link.title}</h4>
                <ul>
                  {
                    link.links.map(item => (
                      <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mt-2`}><a href={item.link}>{item.name}</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-[18px] leading-[27px] text-center text-white'>2023 Hoobank. All rights reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6 gap-5'>
          {
            socialMedia.map(item => (
              <a href={item.link}>
                <img src={item.icon} key={item.id} alt={item.id} className="w-[21px] h-[21px] object-contain cursor-pointer"/>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}
