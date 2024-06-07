import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data, { data2 } from '../data';

function Propage() {
  const params = useParams();
  const { key } = params
  window.scrollTo({ top: 0, left: 0})
  
    return (
      <>
        {
          data2.map((pro) => {
            if (pro.key == key) {
              return <>
                <div class="prodetails">
                  <div class="imgcont">
                    <div class="mainimg">
                      <img id="mainimg" src={pro.image} alt="" />
                    </div>
                    <div class="smimage">
                      <img class="small-img" src="images/products/f1.jpg" alt="" />
                      <img class="small-img" src="images/products/f2.jpg" alt="" />
                      <img class="small-img" src="images/products/f3.jpg" alt="" />
                      <img class="small-img" src="images/products/f4.jpg" alt="" />
                    </div>
                  </div>
                  <div class="prodes">
                    <h6>Home / T-shirt</h6>
                    <h4>{pro.title}</h4>
                    <h2>{pro.price}</h2>
                    <select name="" id="">
                      <option>Select Size</option>
                      <option>XL</option>
                      <option>XXL</option>
                      <option>Small</option>
                      <option>Large</option>
                    </select><br />
                    <input type="number" value="1" />
                    <button class="explorebtn addbtn">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{pro.detail}</span>

                  </div>
                </div>
              </>
            }
          })
        }

{
          data.map((pro) => {
            if (pro.key == key) {
              return <>
                <div class="prodetails">
                  <div class="imgcont">
                    <div class="mainimg">
                      <img id="mainimg" src={pro.image} alt="" />
                    </div>
                    <div class="smimage">
                      <img class="small-img" src="images/products/f1.jpg" alt="" />
                      <img class="small-img" src="images/products/f2.jpg" alt="" />
                      <img class="small-img" src="images/products/f3.jpg" alt="" />
                      <img class="small-img" src="images/products/f4.jpg" alt="" />
                    </div>
                  </div>
                  <div class="prodes">
                    <h6>Home / T-shirt</h6>
                    <h4>{pro.title}</h4>
                    <h2>{pro.price}</h2>
                    <select name="" id="">
                      <option>Select Size</option>
                      <option>XL</option>
                      <option>XXL</option>
                      <option>Small</option>
                      <option>Large</option>
                    </select><br />
                    <input type="number" value="1" />
                    <button class="explorebtn addbtn">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{pro.detail}</span>

                  </div>
                </div>
              </>
            }
          })
        }

      </>

    )
  }

export default Propage