import Head from "next/head";
import ScrollingCard from "@/components/ScrollingCard";
import ScrollCardsOnScroll from "@/components/CardsOnScroll";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <Head>
        <title>Scrolling Cards</title>
      </Head>
      <ScrollingCard/>
      <br />
      
      <Link href="/animated-card">
          <p className="text-center font-bold text-4xl underline text-red-900">Go to On Scroll Cards</p>
      </Link>
    </main>
  );
}
