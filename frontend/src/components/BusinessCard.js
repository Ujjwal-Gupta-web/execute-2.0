import React from 'react';
import {useState} from 'react';

export default function BusinessCard(props){

    const [isOpen, setIsOpen] = useState(false);

    function booking(){

    }
    return(
        <>

{isOpen && (
        <>
          <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex drop-shadow-2xl backdrop-blur-[2px]">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-3xl font-medium">{props.business_name}</div>
                <button onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-2xl font-medium mb-2">Owner Name : {props.owner_name}</div>
              <div className="text-2xl font-medium">Website : <button className="text-xl font-medium">{props.business_website_url}</button></div>

              <div className="flex text-2xl font-medium items-center justify-start mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>
                  {props.business_address}
                </span>
              </div>
              <hr className="divide-y divide-solid w-[100%]" />
              <div className="text-md mb-2">
                <div className="text-2xl font-medium mb-1">Services</div>
                <div className="text-xl">{props.business_service_type} </div>
            
              </div>
              <hr className="divide-y divide-solid w-[100%]" />

              <div className="flex items-center font-medium text-xl justify-start mb-2">
                
                <div>
                    Description : {props.business_description}
                </div>
              </div>

              <div className="flex items-center text-2xl font-medium justify-start mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>Charges : Rs. {props.business_cost}</div>
              </div>

              <hr className="divide-y divide-solid w-[100%]" />

              <button
                className="check m-3 bg-orange-600 rounded-xl text-white font-medium p-3"
                onClick={booking}
              >
                Book Now
              </button>
            </div>
          </div>
        </>
      )}
      <div className="job-container flex flex-row m-20 shadow-2xl bg-white">
        <div className="role w-[50%] p-3 text-2xl font-medium ">
          {props.business_name}
          <div className="company text-lg p-1 bg-orange-600 text-white rounded w-[35%] text-center">
            {props.owner_name}
          </div>
        </div>
        <div className="job-type m-3 w-[50%] text-xl font-medium p-3">
          {props.business_address}
        </div>
        <button
          className="check m-3 w-[20%] bg-orange-600 rounded-xl text-white font-medium p-3"
          onClick={() => setIsOpen(true)}
        >
          Check more details
        </button>
      </div>




        
        
        </>
    )
}