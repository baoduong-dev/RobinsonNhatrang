import Head from 'next/head'
import Image from 'next/image'
import Hero from '../sections/home/hero'
import Achievements from '../sections/home/achievements'
import Layout from '../components/layout'
import Services from '../sections/home/services'
import Ticket from '../sections/home/ticket'
import Tours from '../sections/home/tours'


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Achievements />
      <Services />
      <Ticket />
      <Tours />
    </Layout>
  )
}
