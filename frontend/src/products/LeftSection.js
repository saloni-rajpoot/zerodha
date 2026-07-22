import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/images/kite.png" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Kite</h1>
          <p>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src="/images/coin.png" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Coin</h1>
          <p>
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src="/images/varsity.png" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Varsity mobile</h1>
          <p>
           An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
          </p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
