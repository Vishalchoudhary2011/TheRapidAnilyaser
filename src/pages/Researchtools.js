import React from "react";
import { Helmet } from "react-helmet";
import Filters from "./Filters";
import Header from "./Header";
import Breadcrumb from "./Resuable/Breadcrumb";
import Stocks from './Researchstock.json';
export default function Researchtools() {
  const ids = Stocks.stocks.map(o => o.SYMBOL)
  const filtered = Stocks.stocks.filter(({SYMBOL}, index) => !ids.includes(SYMBOL, index + 1))


  console.log(filtered);
    return (
    <div>
      <div className="App">
        <Helmet>
          <title>Research Tools | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Header/>
      <section className="aboutupper lightshadow">
        <article className="lightings">
          <section className="one">
            <section className="two">
              <section className="three">
                <section className="four"></section>
              </section>
            </section>
          </section>
        </article>
        <Breadcrumb label={"Research Tools"} />
      </section>
      <section className="researchtool">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="btnmodal">
               <Filters/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tabledata">
                <div className="table-responsive">
                  <table id="example" className="table table-striped infostock">
                    <thead>
                      <tr>
                        <th>SYMBOL</th>
                        <th>PRICE</th>
                        <th>MKT CAP</th>
                        <th>P/E</th>
                        <th>PRICE/REV</th>
                        <th>EPS (TTM)</th>
                        <th>EPS (DILUTED)</th>
                        <th>EV</th>
                        <th>SHARES</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((item,i)=>(
                      <tr key={i}>
                        <td>
                          <div className="researchstock">
                            <span>
                              <a href="/" target="_blank">
                               {item.SYMBOL}
                              </a>
                            </span>
                            
                          </div>
                        </td>
                        <td>
                          <span>{item.PRICE}</span>
                          <sub>INR</sub>
                        </td>
                        <td>
                        {item.MKTCAP}<sub>INR</sub>
                        </td>
                        <td>
                          <span>{item.PE}</span>
                        </td>
                        <td>
                          {" "}
                          <span>{item.REV}</span>
                        </td>
                        <td>
                          {" "}
                          <span>{item.EPS}</span>
                          <sub>INR</sub>
                        </td>
                        <td>
                          <span>{item.DILUTED}</span>
                          <sub>INR</sub>
                        </td>
                        <td>
                          <span>{item.EV}</span>
                          <sub>INR</sub>
                        </td>
                        <td>
                          <span>{item.SHARES}</span>
                        </td>
                      </tr>
))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Filters /> */}
    </div>
  );
}
