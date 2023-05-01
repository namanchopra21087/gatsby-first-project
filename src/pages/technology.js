import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery} from 'gatsby'
import * as styles from '../styles/technology.module.css'

export default function Technology() {
  const data =useStaticQuery(graphql`
  query contentFullImage{
    allContentfulPocImages{
      edges {
        node {
          title
          image {
            url
          }
        }
      }
    }
  }
`)

const [ commerce, apps]=data.allContentfulPocImages.edges
  return (
    <Layout>
      <section className={styles.technology}>
        <div>
          <img src={commerce.node.image.url} alt='commerce'></img>
          <h2>{commerce.node.title}</h2>
          <p>Offering brands a completely integrated brand building solution across all digital 
            services and encompassing every stage of the journey</p>
          <Link className={styles.btn}>Find out more</Link>
        </div>
        <div>
          <img src={apps.node.image.url} alt='apps'></img>
          <h2>{apps.node.title}</h2>
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
