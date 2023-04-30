import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 style={{textAlign:"center"}}>THG Ingenuity Platform</h2>
          <h3 style={{marginTop:"20px",textAlign:"center"}}>What is Ingenuity?</h3>
          <p>A simplified approach to DTC commerce. 
            The patform offers end-to-end solution for brands to built optimized sutes for their customers,
            providing support for Marketing, Commerce, Logistics, Finance & Customer Service
          </p>
        </div>
        <img src='/banner.png' alt='welcome to thg poc' style={{maxWidth:'100%'}}></img>
      </section>
    </Layout>
  )
}
