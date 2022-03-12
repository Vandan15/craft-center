import Head from 'next/head'
import Image from 'next/image'
import CardWrapper from '../Components/CardWrapper'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import itemImg from '../public/assets/images/item.jpeg';
import BrandAdvertisement from '../Components/BrandAdvertisement'
import Footer from '../Components/Footer'
import CarouselItem from '../Components/CarouselItem'
import Header from '../Components/Header'

export default function Home() {
  const [cardList, setCardList] = useState([
    {
      src: itemImg,
      title: 'SKY Home Bar Cabinet',
      content: 'INR 4599/-'
    },
    {
      src: itemImg,
      title: 'SKY Home Bar Cabinet',
      content: 'INR 4599/-'
    },
    {
      src: itemImg,
      title: 'SKY Home Bar Cabinet',
      content: 'INR 4599/-'
    },
    {
      src: itemImg,
      title: 'SKY Home Bar Cabinet',
      content: 'INR 4599/-'
    },
  ]);
  return (
    <>
      <Head>
        <title>Craft Center</title>
      </Head>
      <Header />
      <CarouselItem />
      <CardWrapper title="Bestsellers" cardList={cardList} />
      <CardWrapper title="New" cardList={cardList} />
      <CardWrapper title="Outdoor Collection" cardList={cardList} />
      <BrandAdvertisement />
      <Footer />
    </>
  )
}
