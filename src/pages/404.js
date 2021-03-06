import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'

const error = () => {
 return (
 <Layout> 
  <header className={styles.error}>
   <Banner title="ooops its a dead end">
    <Link to="/index" className="btn-white">Back to home page</Link>
   </Banner>
  </header>
 </Layout>
 );
}

export default error;