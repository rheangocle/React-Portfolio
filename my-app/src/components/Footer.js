import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="relative">
      <div className="container px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-20 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="rounded"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU0sSh1GK7IgR-LH91HoH7us&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="py-2 bg-gray-900 relative flex flex-wrap rounded shadow-md text-white"></div>
          <div className="flex flex-wrap lg:w-1/2 px-5 lg:mt-0">
            <h2 className="title-font font-semibold text-white text-s">
            ADDRESS
              </h2>
              <p className="py-2 text-xs">
               Tallahassee, FL
              </p>
              <h2 className="title-font font-semibold text-white text-s">
                EMAIL
              </h2>
              <a className="text-blue-400 text-xs py-2 " href='mailto:rheangocle@gmail.com'>
                rheangocle@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white text-s">
                PHONE
              </h2>
              <p className="text-xs py-2">(720)648-8844</p>
            </div>
          </div>
        </div>
    </section>
  );
}