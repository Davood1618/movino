import './main.css'
import { SiSimpleanalytics } from "react-icons/si";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Slider1img1 from './../../public/banner1.png'
import Subtract from './../../public/Subtract.png'
import HomeIcon from './../../public/home-icon.svg'
import SettingIcon from './../../public/setting-icon.svg.png'
import CartIcon from './../../public/cart-icon.png'
import HeartIcon from './../../public/heart-icon.png'
import PersonIcon from './../../public/silhouette-male-icon.png'
import logoType from './../../public/logotype.png'


import React from 'react'

export default function main() {
    return (
        <div className="frame">
            <div className="subFrame">

                <div className="headerWrapper">
                    <div className="header">

                        <div className='firstLineIcons'>
                            <div className='mainHeaderIcons'>
                                <FaBatteryFull className='icon-large' />
                                <FaWifi className='icon-large' />
                                <SiSimpleanalytics className='icon-large' />
                            </div>
                            <h2>9:41</h2>
                        </div>

                        <div className='secondLineIcons'>
                            {/* <h1>movino</h1> */}
                            <img src={logoType} className='' alt="..." />

                            <div className='mainLeftIcons'>
                                <FaRegBell />
                                <IoMenu />
                            </div>
                        </div>

                        <div className="mainCategories">
                            <h8>پیشنهادات</h8>
                            <h8>سریال</h8>
                            <h8>فیلم</h8>
                            <h8>زبان اصلی</h8>
                            <h8>انیمیشن ها</h8>
                        </div>

                    </div>
                </div>


                <div className="mainWrapper">
                    <div className="mainPart">

                        <div className="welcomeLine">
                            <h7 className='secondlineTitle'>به موینو خوش امدید</h7>
                            <h8 className='secondlineSub'> همراه زیباترین لحظات شما خواهد بود</h8>
                        </div>


                        <div className="firstSliderContainer">
                            <img src={Slider1img1} className='firstSlider' alt="..." />
                        </div>

                        <div className="newestAndseeAll">
                            <h8>جدیدترین ها</h8>
                            <h8 className='lowOpacityTitle'>مشاهده همه</h8>
                        </div>

                        <div className="firstSliderContainer">
                            <img src={Slider1img1} className='secondSlider' alt="..." />
                        </div>

                        <div className="newestAndseeAll">
                            <h8>پرفروش ترین ها</h8>
                            <h8 className='lowOpacityTitle'>مشاهده همه</h8>
                        </div>

                        <div className="firstSliderContainer">
                            <img src={Slider1img1} className='secondSlider' alt="..." />
                        </div>

                    </div>

                </div>





                <div className="mainmainFooter">

                    <div className="mainFooter">

                        <div className="circleShape">
                            <img src={HomeIcon} className='homeIcon' alt="..." />
                        </div>

                        <div className="lastIcons">
                            <div className="leftLastIcons">
                                <img src={PersonIcon} className='lastIcon' alst="..." />
                                <img src={HeartIcon} className='lastIcon' alt="..." />

                                {/* <h4 className="tsth">tst</h4>
                                <h4 className="tsth">tst</h4> */}
                            </div>
                            <div className="rightLastIcons">
                                <img src={CartIcon} className='lastIcon' alt="..." />
                                <img src={SettingIcon} className='lastIcon' alt="..." />
                                {/* <h4 className="tsth">tst</h4>
                                <h4 className="tsth">tst</h4> */}
                            </div>

                        </div>

                        <div className="footer">
                            <img src={Subtract} className='footerShape' alt="..." />

                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}

