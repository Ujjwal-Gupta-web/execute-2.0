import React from "react";
import Navbar from "../components/Navbar";
import {useState} from 'react';
import data from "../components/citydata";
import BusinessCard from "../components/BusinessCard";
export default function CustomEvent() {

  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar />

      <div className="birthday">
        <div className="heading p-5">
          <h1 className="text-[3rem] text-Roboto text-white p-4 m-5 font-bold">
            {" "}
            Birthday Event Booking page
          </h1>
        </div>

        <div className="services p-5 text-center">
          <h2 className="text-[2rem] text-Roboto text-white p-4 m-5 font-bold underline">
            Services
          </h2>
          <p className="service_name text-[1.5rem] text-Roboto text-white font-bold">
            Food services
          </p>
          <p className="service_name text-[1.5rem] text-Roboto text-white font-bold">
            Drinking water services
          </p>
          <p className="service_name text-[1.5rem] text-Roboto text-white font-bold">
            Decoration services
          </p>
          <p className="service_name text-[1.5rem] text-Roboto text-white font-bold">
            Music and Dance services
          </p>
        </div>

        <div className="searchbar p-5">
            <div class="m-5 p-5 w-[80%]">
              <div class="w-[80%]">
                <div class="input-group relative flex flex-col overflow-y-auto items-stretch w-full mb" >

                  <div class="flex flex-row ">
                  <input
                    type="search"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    class="form-control relative flex-auto rounded-xl min-w-0 block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white outline-none"
                    placeholder="Enter Your Location"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />

                  <button
                    class="btn px-6 py-2.5 m-2 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                  </div>

                  
                  {data
                    .filter((post) => {
                      if (query === "") {
                        return "";
                      } else if (
                        post.name.toLowerCase().startsWith(query.toLowerCase())
                      ) {
                        return post;

                      }
                    })
                    .map((post, i) => (
                      <div
                      onClick={(e)=> {setQuery(post.name)
                        // let p = document.getElementById('test');
                        // while(p.childElementCount){
                        //   p.removeChild(p.firstChild);
                        // }
                      
                      } }
                        className="text-left m-1 w-2/5 pl-3 flex"
                        key={i}
                      >
                        <div className="">
                          <button id="test"
                          onClick={(e)=> setQuery('')}
                            // onChange={(e) => {console.log(e.target.value)}}
                            className="text-white text-xl">
                            {post.name}
                          </button>
                        </div>
                      </div>
                    ))}


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="businesses_data">
          <BusinessCard
            business_name="Chai bar"
            owner_name="Mukesh"
            business_address="123 Main St, San Jose, CA"
            business_cost="70000"
            business_service_type="Food, water, music"
            business_website_url="helloworld.com"
            business_description="Hello hum chai wale hai"
          />

          <BusinessCard
            business_name="Chai bar"
            owner_name="Mukesh"
            business_address="123 Main St, San Jose, CA"
            business_cost="70000"
            business_service_type="Food, water, music"
            business_website_url="helloworld.com"
            business_description="Hello hum chai wale hai"
          />

          <BusinessCard
            business_name="Chai bar"
            owner_name="Mukesh"
            business_address="123 Main St, San Jose, CA"
            business_cost="70000"
            business_service_type="Food, water, music"
            business_website_url="helloworld.com"
            business_description="Hello hum chai wale hai"
          />

          <BusinessCard
            business_name="Chai bar"
            owner_name="Mukesh"
            business_address="123 Main St, San Jose, CA"
            business_cost="70000"
            business_service_type="Food, water, music"
            business_website_url="helloworld.com"
            business_description="Hello hum chai wale hai"
          />
        </div>
      
    </>
  );
}
