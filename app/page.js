'use client';
import Image from "next/image";
import Header from '../components/header';
import MainSection from '../components/mainsection';
import Footer from '../components/footer';
export default function Home() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
);
}
