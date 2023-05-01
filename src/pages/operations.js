import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/operations.module.css'

export default function Operations() {
  const data=useStaticQuery(graphql`
  query operations {
    allContentfulOperations {
      edges {
        node {
          image {
            url
          }
          title
        }
      }
    }
  }
  `)

  const [ delivery, production, order, warehouse]=data.allContentfulOperations.edges
  return (
    <Layout>
      <section className={styles.operations}>
        <div>
          <img src={delivery.node.image.url} alt='deliver&courier'></img>
          <h2>{delivery.node.title}</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src={production.node.image.url} alt='production'></img>
          <h2>{production.node.title}</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src={order.node.image.url} alt='order-management'></img>
          <h2>{order.node.title}</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src={warehouse.node.image.url} alt='warehouse'></img>
          <h2>{warehouse.node.title}</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
      </section>
    </Layout>
  )
}
