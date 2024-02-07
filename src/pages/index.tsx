import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import ScrollingCard from "@/components/ScrollingCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen  ${inter.className}`}
    >
      <Head>
        <title>Scrolling Cards</title>
      </Head>
      <ScrollingCard/>
    </main>
  );
}
