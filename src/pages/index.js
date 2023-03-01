import Head from 'next/head'
import Navbar from '../../components/navbar'
import Menubar from '../../components/menubar'
import Title from '../../components/title'
import Results from '../../components/results'
// import requests from "../../utils/request"
// const API_KEY = process.env.API_KEY;
// const API_ID = process.env.API_ID;

export default function Home({results}) {
  //  console.log(results)
  return (
    <>
      <Head>
        <title>Foodies 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menubar />
      <Navbar />
      <Title />
      <Results results={results}/>
    </>
  )
}

export async function getServerSideProps(context) {

  const results = await fetch(
    'https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=518658db&app_key=c1e7bd94b5b372f36d87bd2601eaa63a'
    // `https://api.edamam.com/api/recipes/v2?type=public&q=steak&app_id=${API_ID}&app_key=${API_KEY}`

  ).then((res) => res.json());

  return {
    props: {
      results
    },
  };


  // const search = context.query.search;

  // const request = await fetch(
  //   `https:api.edamam.com/api/recipes/v2?type=public&q=beef&${
  //     requests[search]?.url || requests.fetchBeef.url
  //   }`
  // ).then((res) => res.json());

  // return {
  //   props: {
  //    results: request.result ?? null,
  //   },
  // };
}
