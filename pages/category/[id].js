import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react'
import Banner from '../../Components/Banner';
import BrandAdvertisement from '../../Components/BrandAdvertisement';
import CardWrapper from '../../Components/CardWrapper';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import itemImg from '../../public/assets/images/item.jpeg';


export default function Home() {
  const router = useRouter();
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
      <title>{router.query.id ? router.query.id.toUpperCase():""} : Craft Center</title>
    </Head>
      <Header />
      {/* <CarouselItem /> */}
      <Banner/>
      <CardWrapper title="Bestsellers" cardList={cardList} />
      <CardWrapper title="New" cardList={cardList} />
      <CardWrapper title="Outdoor Collection" cardList={cardList} />
      <BrandAdvertisement />
      <Footer />
    </>
  )
}
