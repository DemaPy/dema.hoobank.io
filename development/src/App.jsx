import React from 'react'
import styles from './style'
import { Billing, Bussines, Button, CardDeal, Clients, Cta, Footer, GetStarted, Hero, NavBar, Stats, Testimonials } from "./components"

export const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary text-white`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussines />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>

    </div>
  )
}
