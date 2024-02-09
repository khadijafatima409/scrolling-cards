import Head from "next/head";
import ScrollingCard from "@/components/ScrollingCard";
import ScrollCardsOnScroll from "@/components/ScrollCardsOnScroll";



export default function Home() {
  return (
    <main>
      <Head>
        <title>Scrolling Cards</title>
      </Head>
      <ScrollingCard/>
      <br />
      <ScrollCardsOnScroll/>
    </main>
  );
}
