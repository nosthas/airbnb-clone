import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

interface ExploreData {
  img: string;
  location: string;
  distance: string;
} 

interface CardData {
  img: string;
  title: string;
} 

// @ts-ignore
 const Home: NextPage = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        {/* Explore Nearby */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull data from server - API endpoint*/}
          {exploreData?.map(({img, location, distance}) => (
            <SmallCard key={img} img={img} location={location} distance={distance} />
          ))}
          </div>
        </section>

        {/* Live Anywhere */}
        <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({img, title})=>(
              <MediumCard key={img} img={img} title={title}/>
            ))}
            </div>
        </section>

        {/* Large Banner */}
          <LargeCard 
            img='https://links.papareact.com/4cj' 
            title='The Greatest Outdoors' 
            description='Whislists curated by Airbnb.' 
            buttonText='Get Inspired'
          />
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  // Explore Data
  const exploreData: ExploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
  .then((res) => res.json());

  // Live Data
  const cardsData: CardData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then((res) => res.json());

  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}


export default Home;