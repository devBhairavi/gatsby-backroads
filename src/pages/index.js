import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

const index = () => {
 return (
 <Layout> 
  <SimpleHero>
   <Banner title="continue exploring" info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aliquid?">
    <Link to="/tours" className="btn-white">Explore Torus</Link>
    </Banner>
  </SimpleHero>
  <About />

  <Services />
 </Layout>
 );
}

export default index;