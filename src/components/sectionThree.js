import React from 'react'
import { images } from "../App";

function SectionThree() {
  return (
    <section>
    <div class="div3">
      <div>
        <img src={images["left.png"]} alt="left" />
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div>
        <img src={images["med.png"]} alt="med" />

        <div class="txtdiv3">
          <h2>Round the clock Support</h2>
          <p>
            We only need 45-60 minutes to get your product into your customers
            hand
          </p>
        </div>
      </div>
      <div>
        <i class="fa fa-angle-right" aria-hidden="true"></i>

        <img src={images["right.png"]} alt="right" />
      </div>
    </div>
  </section>
    )
}

export default SectionThree