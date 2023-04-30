import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import * as styles from '../styles/technology.module.css'

export default function Technology() {
  return (
    <Layout>
      <section className={styles.technology}>
        <div>
          <img src='/commerce.png' alt='commerce'></img>
          <h2>Commerce</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/apps.png' alt='apps'></img>
          <h2>Apps</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/hosting.png' alt='hosting'></img>
          <h2>Hosting</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/fraudManagement.png' alt='fraud-management'></img>
          <h2>Fraud Management</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
      </section>
    </Layout>
  )
}
