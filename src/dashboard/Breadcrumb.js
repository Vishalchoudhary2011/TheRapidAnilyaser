import React from "react";

export default function Breadcrumb({title}) {
  return (
    <div className="pagebreadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <nav aria-label="breadcrumb">
              <h3>Dashboard</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#"><span><i className='bx bxs-home'></i></span>Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
