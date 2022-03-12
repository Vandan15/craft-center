import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react'
import CardWrapper from '../../Components/CardWrapper';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import ItemDetails from '../../Components/ItemDetails';
import itemImg from '../../public/assets/images/item.jpeg';
export default function product() {
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
      <title>
        {router.query.name}
      </title>
    </Head>
      <Header />
      <ItemDetails/>
      <CardWrapper title="Related Products" cardList={cardList} />
      <Footer />
    </>
  )
}
