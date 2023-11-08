import React from "react";
import ConsumerHeader from "./ConsumerHeader";
import ConsumerList from "./ConsumerList";
import SearchBar from "./SearchBar";


import Card from "../utils/Card";
const ComsumerManagerPage = () => {
  return (
    <div className="mt-4">
      <ConsumerHeader />
      <p className="mt-4 text-xl font-semibold text-gray-700">
        Consumer Overview
      </p>
      
      <ConsumerList />
      
    </div>
  );
};

export default ComsumerManagerPage;
