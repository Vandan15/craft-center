import React from 'react'
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
export default function ProductCard(props) {
  const router = useRouter();
  const redirectTo = (path) => {
    router.push({
      pathname: '/product/1',
      query: { id: '1', name: "Wall mount TV Unit" },
    });
  }
  return (
    <div className='product-card-wrapper col-md-4 col-lg-3 col-sm-6 col-12'>
      <div className='product' onClick={() => redirectTo('/product/wall-mount-tv-unit')}>
        <Image src={props.item.src} width="400" height="400"></Image>
        <div className='card-title'>{props.item.title}</div>
        <div className='card-content'>{props.item.content}</div>
      </div>
    </div>
  )
}
