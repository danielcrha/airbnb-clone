import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main Section */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* pull come data from a server - API endpoints */}
          {exploreData?.map(({ img, distance, location }) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/PQ49").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
