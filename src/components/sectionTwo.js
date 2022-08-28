import React from 'react'
import { images } from "../App";

function SectionTwo() {
  return (
    <section className="sec2">
    <div className="div2">
      <img className="bgsec2" src={images["second_section_.png"]} alt="sec2" />

      <div className="topdiv2">
        <img src={images["group140.png"]} alt="img" />
        <div>
          <h2>super fast delivery</h2>
          <p>
            we only need 45-60 minutes to get your product into your customers
            hand
          </p>
        </div>
      </div>

      <div className="meddiv2">
        <img src={images["group152.png"]} alt="img" />
        <div>
          <h2>Real time tracking</h2>
          <p>
            Check in any time to see where your delivery is & when it will
            reach your customer
          </p>
        </div>
      </div>

      <div className="kudz">
        <img src={images["whykudzokabg.png"]} alt="img" className="botimg" />
        <div className="txtimg2">
          <p >why choose</p>
          <h2>KUDZOKA</h2>
        </div>
      </div>

      <div className="botdivrimg">
        <img src={images["group1020.png"]} alt="img" />
        <div>
          <h2>Discount</h2>
          <p>
            Growing from 30 to 300 deliveres a week ?<br />Take advantage of
            your volume-based discounts
          </p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default SectionTwo