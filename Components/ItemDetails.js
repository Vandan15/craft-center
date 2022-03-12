import React from 'react'
import ItemImg from '../public/assets/images/item.jpeg';
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function ItemDetails() {
    const router = useRouter();
    const redirectTo = (path) => {
        router.push(path);
    }
    return (
        <div className='item-details-wrapper container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Image src={ItemImg}></Image>
                    <div className='sub-images d-flex flex-wrap'>
                        <div className='col-4 col-lg-3 product'>
                            <Image src={ItemImg}></Image>
                        </div>
                        <div className='col-4 col-lg-3 product'>
                            <Image src={ItemImg}></Image>
                        </div>
                        <div className='col-4 col-lg-3 product'>
                            <Image src={ItemImg}></Image>
                        </div>
                        <div className='col-4 col-lg-3 product'>
                            <Image src={ItemImg}></Image>
                        </div>
                        <div className='col-4 col-lg-3 product'>
                            <Image src={ItemImg}></Image>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='item-description'>
                        <h1>Wall Mount TV Unit</h1>
                        <h3>Rs. 1,199.00</h3>
                        <div className='input-wrapper'>
                            <h6>Color</h6>
                            <select name="cars" id="cars">
                                <option value="volvo">Red</option>
                                <option value="saab">Black</option>
                                <option value="mercedes">Orange</option>
                                <option value="audi">White</option>
                            </select>
                        </div>
                        <div className='input-wrapper'>
                            <h6>Quantity</h6>
                            <select name="cars" id="cars">
                                <option value="volvo">1</option>
                                <option value="saab">2</option>
                                <option value="mercedes">3</option>
                                <option value="audi">4</option>
                            </select>
                        </div>
                        <div className='btn-wrapper'>
                            <button className='classic-button-cart'>ADD TO CART</button>
                            <button className='classic-button-buy' onClick={() => redirectTo('/contact')}>BUY IT NOW</button>
                        </div>
                        <p className='description-text'>
                            Modern and minimalistic, each Morf piece can be used as a striking candleholder or an on-trend vase displaying a seasonal stunner or an evergreen foliage. Each of these accent pieces is equally at ease whether being used standalone or paired up their complementary shape.
                        </p>
                        <h6 className='item-details'><b>Dimensions(Inch) -</b>W5.44 x H6 x D1.6</h6>
                        <h6 className='item-details'><b>Weigth :</b>500 Gram</h6>
                        <h6 className='item-details'><b>Shipping :</b>5 days</h6>

                        <div className='social-icons'>
                            <a href='#'>
                                <svg width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <title>ionicons-v5_logos</title>
                                    <path fill="#1FB049" d="M414.73,97.1A222.14,222.14,0,0,0,256.94,32C134,32,33.92,131.58,33.87,254A220.61,220.61,0,0,0,63.65,365L32,480l118.25-30.87a223.63,223.63,0,0,0,106.6,27h.09c122.93,0,223-99.59,223.06-222A220.18,220.18,0,0,0,414.73,97.1ZM256.94,438.66h-.08a185.75,185.75,0,0,1-94.36-25.72l-6.77-4L85.56,427.26l18.73-68.09-4.41-7A183.46,183.46,0,0,1,71.53,254c0-101.73,83.21-184.5,185.48-184.5A185,185,0,0,1,442.34,254.14C442.3,355.88,359.13,438.66,256.94,438.66ZM358.63,300.47c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54,2.78-14.4,18-17.65,21.75-6.5,4.16-12.07,1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56,2.44-11.32c2.51-2.49,5.57-6.48,8.36-9.72s3.72-5.56,5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53,20.53,0,0,0-14.86,6.94c-5.11,5.56-19.51,19-19.51,46.28s20,53.68,22.76,57.38,39.3,59.73,95.21,83.76a323.11,323.11,0,0,0,31.78,11.68c13.35,4.22,25.5,3.63,35.1,2.2,10.71-1.59,33-13.42,37.63-26.38s4.64-24.06,3.25-26.37S364.21,303.24,358.63,300.47Z" />
                                </svg>
                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.995" viewBox="0 0 16 12.995">
                                    <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M14.355,4.741c.01.142.01.284.01.426a9.266,9.266,0,0,1-9.33,9.33A9.267,9.267,0,0,1,0,13.025a6.784,6.784,0,0,0,.792.041,6.567,6.567,0,0,0,4.071-1.4A3.285,3.285,0,0,1,1.8,9.391a4.135,4.135,0,0,0,.619.051,3.468,3.468,0,0,0,.863-.112A3.28,3.28,0,0,1,.65,6.112V6.071a3.3,3.3,0,0,0,1.482.416A3.284,3.284,0,0,1,1.117,2.1,9.321,9.321,0,0,0,7.878,5.533,3.7,3.7,0,0,1,7.8,4.782a3.282,3.282,0,0,1,5.675-2.244,6.456,6.456,0,0,0,2.081-.792,3.27,3.27,0,0,1-1.442,1.807A6.574,6.574,0,0,0,16,3.046a7.049,7.049,0,0,1-1.645,1.7Z" transform="translate(0 -1.503)" fill="#1c9ceb" />
                                </svg>

                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M12.5,1H1.5A1.5,1.5,0,0,0,0,2.5v11A1.5,1.5,0,0,0,1.5,15H5.789V10.24H3.82V8H5.789V6.293A2.734,2.734,0,0,1,8.716,3.277a11.927,11.927,0,0,1,1.735.151V5.335H9.474a1.12,1.12,0,0,0-1.263,1.21V8H10.36l-.344,2.24H8.211V15H12.5A1.5,1.5,0,0,0,14,13.5V2.5A1.5,1.5,0,0,0,12.5,1Z" transform="translate(0 -1)" fill="#224e97" />
                                </svg>

                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
                                    <path id="Icon_awesome-pinterest" data-name="Icon awesome-pinterest" d="M15.5,8A7.751,7.751,0,0,1,5.456,15.4a8.712,8.712,0,0,0,.963-2.031c.094-.363.481-1.844.481-1.844a2.076,2.076,0,0,0,1.775.891c2.338,0,4.022-2.15,4.022-4.822A4.549,4.549,0,0,0,7.919,3.122C4.575,3.122,2.8,5.366,2.8,7.813a3.478,3.478,0,0,0,1.572,3c.147.069.225.038.259-.1.025-.106.156-.634.216-.878a.232.232,0,0,0-.053-.222,3.052,3.052,0,0,1-.572-1.769,3.354,3.354,0,0,1,3.5-3.363,3.06,3.06,0,0,1,3.238,3.153c0,2.1-1.059,3.55-2.437,3.55a1.124,1.124,0,0,1-1.147-1.4A15.573,15.573,0,0,0,8.013,7.2a.973.973,0,0,0-.981-1.091c-.778,0-1.4.8-1.4,1.881a2.792,2.792,0,0,0,.231,1.15s-.766,3.244-.906,3.85a7.5,7.5,0,0,0-.028,2.225A7.751,7.751,0,1,1,15.5,8Z" transform="translate(0 -0.25)" fill="#9a1020" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
