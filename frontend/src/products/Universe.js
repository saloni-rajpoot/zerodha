import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/images/zerodhaFundhouse.png"
          alt="Zerodha"
          style={{width: "150px",height: "auto"}} />
          <p className="text-small text-muted">Our Assest Manangement Venture</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/sensibullLogo.svg" 
          alt="Zerodha clone"
          style={{width: "150px",height: "auto"}}/>
          <p className="text-small text-muted">Option Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="/images/smallcaseLogo.png"
          alt="Zerodha clone"
          style={{width: "150px",height: "auto"}}
           />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/streakLogo.png"
          alt="streaklogo"
          style={{width: "150px", height: "auto" }} />
          <p className="text-small text-muted">Systematic Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" 
           alt="Zerodha clone"
          style={{width: "150px",height: "auto"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 " >
          <img src="/images/dittoLogo.png"
           alt="Ditto Logo"
           style={{ width: "150px", height: "auto" }}
           />
          <p className="text-small text-muted">Persomalised Advice</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
