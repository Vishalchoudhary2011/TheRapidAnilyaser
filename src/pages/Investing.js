import React from 'react'
import Breadcrumb from "./Resuable/Breadcrumb";
import { Helmet } from "react-helmet";
import Header from './Header';
import investingdata from "./imagefile/investing.json";
import Lottie from "react-lottie";
import Investingdata from './Resuable/Carddatajson.js';
import Cardinvest from './Resuable/Cardinvest';
 
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: investingdata,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Investing() {
  return (
    <div>
        <div className="App">
        <Helmet>
          <title>Investing | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Header/>
      <section className="aboutupper lightshadow">
        <Breadcrumb label={"Investing"} />
      </section>
      <section>
        <div className='investingarea'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                      <div className='investingdata'>
                   <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
                </div>
                    </div>
                    <div className='col-md-6'>
                    <Lottie options={defaultOptions} />

                    </div>
                </div>
            </div>
        </div>

      </section>
      <section className='investingmiddle'>
        <div className='container'>
            <div className='row'>
              {Investingdata.map((item)=>(
                <div className='col-md-4'>
                  <Cardinvest iconimg={item.iconimg}
                  title={item.title}
                  content={item.content}
                  cn = {item.cn}
                  
                  
                  />
                </div>
               ))}
               
                
            </div>

        </div>
      </section>

    </div>
  )
}
