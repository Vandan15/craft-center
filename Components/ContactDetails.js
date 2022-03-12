import React from 'react'
import Button from './Button'
import Image from 'next/image';
import itemImg from '../public/assets/images/item.jpeg'

export default function ContactDetails() {
    return (
        <div className='contact-details-wrapper container'>
            <div className='row justify-content-between'>
                <div className='col-12 col-lg-6'>
                    <h1>Contact Information</h1>
                    <div className='input-wrapper col-12'>
                        <input type="text" className='text-input'></input>
                        <label>
                            <input type="checkbox"></input>
                            Email me with news and offers
                        </label>
                    </div>
                    <h1 className='address-text'>Shipping address</h1>
                    <div className='col-12'>
                        <div className="input-group">
                            <label>Country/Region</label>
                            <select name="cars" id="cars">
                                <option value="volvo">1</option>
                                <option value="saab">2</option>
                                <option value="mercedes">3</option>
                                <option value="audi">4</option>
                            </select>
                        </div>
                        <div className='col-12 d-md-flex'>
                            <div className="input-group pe-md-3">
                                <label>First name</label>
                                <input type="text" className='text-input'></input>
                            </div>
                            <div className="input-group">
                                <label>Last name</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group">
                                <label>Company (optional)</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group">
                                <label>Address line 1</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group">
                                <label>Address line 2</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12 d-md-flex'>
                            <div className="input-group pe-md-3">
                                <label>City</label>
                                <input type="text" className='text-input'></input>
                            </div>
                            <div className="input-group">
                                <label>PIN code</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group">
                                <label>State</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" className='text-input'></input>
                            </div>
                        </div>
                        <div className='input-wrapper col-12'>
                            <label>
                                <input type="checkbox"></input>
                                Save this information for next time
                            </label>
                        </div>
                        <div className='col-12 btn-wrapper'>
                            <button className='shipping-btn'>Continue to shipping</button>
                            <button className='return-btn'>Return to cart</button>
                        </div>
                    </div>
                    <div className='footer-policy d-flex flex-column flex-sm-row'>
                        <span>Refund policy</span>
                        <span>Privacy policy </span>
                        <span>Terms of service</span>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='cart-wrapper'>
                        <ul className='sidebar-list'>
                            <li>
                                <div className='item-wrapper'>
                                    <Image src={itemImg} height="100" width="100"></Image>
                                    <div className='item-details'>
                                        <h1 className='mb-2'>Space Black/Tan Leatherite</h1>
                                        <h1 className='mt-2'>Rs. 63,579.00 x 1</h1>
                                    </div>
                                </div>
                                <div className='item-wrapper'>
                                    <Image src={itemImg} height="100" width="100"></Image>
                                    <div className='item-details'>
                                        <h1 className='mb-2'>Space Black/Tan Leatherite</h1>
                                        <h1 className='mt-2'>Rs. 63,579.00 x 1</h1>
                                    </div>
                                </div>
                                <div className='gift-card-wrapper'>
                                    <input type="text" placeholder='Gift card or discount code' className='text0input'></input>
                                    <button>Apply</button>
                                </div>
                                <div className='cart-total-normal d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Total</h6>
                                        <h6>Rs. 63,579.00</h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <h6>Shipping</h6>
                                        <h6>calculated at next step</h6>
                                    </div>
                                </div>
                                <div className='cart-total'>
                                    <h6>Subtotal</h6>
                                    <h6>Rs. 63,579.00</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
