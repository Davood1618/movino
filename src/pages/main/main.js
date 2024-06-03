import './main.css'
import { SiSimpleanalytics } from "react-icons/si";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Slider1img1 from './../../public/REACTjs.webp'


import React from 'react'

export default function main() {
    return (
        <div className="mainMainContainer">

            <div className='mainWrapper'>

                <div className="UpPart">
                    
                    <div className='firstLineIcons'>
                        <div className='mainHeaderIcons'>
                            <FaBatteryFull className='icon-large' />
                            <FaWifi className='icon-large' />
                            <SiSimpleanalytics className='icon-large' />
                        </div>
                        <h1>9:41</h1>
                    </div>

                    <div className='secondLineIcons'>
                        <h1>movino</h1>
                        <div className='mainLeftIcons'>
                            <FaRegBell />
                            <IoMenu />
                        </div>
                    </div>

                    <div className="mainCategories">
                        <h6>پیشنهادات</h6>
                        <h6>سریال</h6>
                        <h6>فیلم</h6>
                        <h6>زبان اصلی</h6>
                        <h6>انیمیشن ها</h6>
                    </div>

                </div>
                <div className="welcomeLine">
                    <h2>به موینو خوش امدید</h2>
                    <h4>همراه زیباترین لحظات شما</h4>
                </div>

                <div className="firstSliderContainer">

                    <div className="firstSlider">
                    {/* <img src={Slider1img1} alt="..."/> */}

                        {/* <button type="button" class="btn btn-primary">Primary</button> */}
                        hisss
                    </div>
                </div>

            </div>
        </div>

    )
}

