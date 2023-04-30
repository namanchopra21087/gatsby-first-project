import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import * as styles from '../../styles/digital.module.css'

export default function Landing() {
  return (
    <Layout>
    <section className={styles.digital}>
      <div>
        <img src='/performance.png' alt='performance&influencer'></img>
        <h2>Performance & Influencer Marketing</h2>
        <p>Offering brands a completely integrated brand building solution across all digital 
          services and encompassing every stage of the journey</p>
        <Link className={styles.btn}>Find out more</Link>
      </div>
      <div>
        <img src='/advertising.png' alt='advertising'></img>
        <h2>Advertising</h2>
        <p>Offering brands a completely integrated brand building solution across all digital 
          services and encompassing every stage of the journey</p>
        <Link className={styles.btn}>Find out more</Link>
      </div>
      <div>
        <img src='/translation.png' alt='translation'></img>
        <h2>Translation & Localisation</h2>
        <p>Offering brands a completely integrated brand building solution across all digital 
          services and encompassing every stage of the journey</p>
        <Link className={styles.btn}>Find out more</Link>
      </div>
      <div>
        <img src='/brand.png' alt='brand'></img>
        <h2>Brand & Creative</h2>
        <p>Offering brands a completely integrated brand building solution across all digital 
          services and encompassing every stage of the journey</p>
        <Link className={styles.btn}>Find out more</Link>
      </div>
    </section>
  </Layout>
  )
}
