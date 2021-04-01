import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home_row">
                <Product id='12345' title='The Lean Startup + Measure What Matters ( New York Times Best Selling Books' price={29} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
                <Product id='23456' title='Photron P10 Wireless 3W Super Bass Mini Metal Aluminium Alloy Portable Bluetooth Speaker with Mic (Deep Cobalt)' price={50} rating={4} image='https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg'/>
                </div>
                <div className="home_row">
                <Product id='34567' title='HP Laserjet Pro M17a Single Function USB Connectivity Laser Printer' price={250} rating={3} image='https://5.imimg.com/data5/AV/QI/GLADMIN-166331/pixma-e3170-500x500.png'/>
                <Product id='45678' title='Nikon D3500 with AF-P DX Nikkor 18-55mm f/3.5-5.6G VR Lens Digital SLR Camera' price={700} rating={5} image='https://i.gadgets360cdn.com/products/cameras/large/1548235043_832_nikon_d5600-24-2mp-dslr-camera.jpg'/>
                <Product id='56789' title="NOKIA 14 Thin & Light 14-inch FHD Laptop (11th Gen Intel i5-1135G7/8GB/512GB SSD/Windows 10/MS Office 2019/Alexa Built-in/Pale Gold/1.47 kg), 14s-dr2006TU" price={2000} rating={4} image='https://techcrunch.com/wp-content/uploads/2020/12/nokia-laptop.jpg'/>
                </div>
                <div className="home_row">
                <Product id='67890' title="SAMSUNG Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)" price={4000} rating={5} image='https://cdn.vox-cdn.com/thumbor/hyiFZcOk2DkCkcYlOzP5HMyrPCw=/0x0:1280x853/920x613/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64015212/Samsung_TV_iTunes_Movies_and_TV_shows.0.jpg'/>
                
                </div>
            </div>
        </div>
    )
}

export default Home
