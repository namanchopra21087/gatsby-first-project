import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import * as styles from '../styles/operations.module.css'

export default function Operations() {
  return (
    <Layout>
      <section className={styles.operations}>
        <div>
          <img src='/delivery.png' alt='deliver&courier'></img>
          <h2>Delivery & Courier</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/production.png' alt='production'></img>
          <h2>Production</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/orderManagement.png' alt='order-management'></img>
          <h2>Order Management</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src='/warehouse.png' alt='warehouse'></img>
          <h2>Warehouse Management</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
      </section>
    </Layout>
  )
}
