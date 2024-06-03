import React from 'react'
import './home.css'
import { SiSimpleanalytics } from "react-icons/si";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";



export default function home() {
    return (

        <div className='homeMainFrame '>



            <div className='homeMainContainer'>


                <div className='headerContainer'>
                    <div className='homeHeader'>

                        <div className='homeHeaderIcons'>
                            <FaBatteryFull className='icon-large' />
                            <FaWifi className='icon-large' />
                            <SiSimpleanalytics className='icon-large' />

                        </div>
                        <h1>9:41</h1>
                    </div>
                </div>

                <div className='belowContainer'>
                    <h1>بابیلون 2022</h1>
                    <div className='movieTime'>
                        <h6> 1 ساعت و 22 دقیقه</h6>
                        <div className='HD'>HD</div>

                    </div>
                    <div className='HomeGenres'>
                        <h6 className='genresInHome'>درام</h6>
                        <div className='bulletPoint'></div>
                        <h6 className='genresInHome'>درام</h6>
                        <div className='bulletPoint'></div>
                        <h6 className='genresInHome'>درام</h6>

                    </div>
                    <div className='HomeBtnWrapper'>
                        <div className='HomeBtnFill'> <div className='homeTxtdiv'>پخش ویدیو</div> </div>
                        <div className='HomeBtnFill outLine'> <div className='homeTxtdiv'>+ افزودن به لیست</div> </div>
                    </div>
                    <div className='homeBelowTxt'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارزبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                    </div>

                    <div className='homeFooter'>

</div>
                </div>
         
            </div>


        </div>
    )
}
