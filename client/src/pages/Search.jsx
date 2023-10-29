import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-bold">Search Term</label>
            <input
              type="text"
              placeholder="Search....."
              className="border rounded-lg p-3 w-full"
            ></input>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="all"></input>
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="rent"></input>
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="sale"></input>
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="offer"></input>
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <label className="font-semibold">Ammenities:</label>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="parking"></input>
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="furnished"></input>
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
          <label className="font-semibold">Sort:</label>
            <select className="border rounded-lg p-3" id="sort_order">
                <option>price low to high</option>
                <option>price high to low</option>
                <option>lates</option>
                <option>oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95">Search</button>
        </form>
      </div>
      <div >
        <h1 className="text-3xl mt-5 font-bold border-b p-3 text-slate-700">Listing Result</h1>
      </div>
    </div>
  );
}
