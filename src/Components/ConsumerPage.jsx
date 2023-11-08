import React from "react";
import Card from "../utils/Card";
import ConsumerHeader from "./ConsumerHeader";
import CosumerCount from "./ConsumerCount";
import ConsumerOverall from "./ConsumerOverall";

const ConsumerPage = () => {
  return (
    <div className="mt-4">
      <ConsumerHeader />
      <p className="text-2xl font-bold text-black p-2">Consumer Overview</p>

      <div class="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <CosumerCount/>
          <ConsumerOverall/>
        </div>

        <Card className="col-span-1 h-[400px] border-2 border-gray-500">E</Card>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <Card className="col-span-2 h-[500px] border-2 border-gray-500">D</Card>
        <Card className="col-span-1 h-[400px] border-2 border-gray-500">E</Card>
      </div>
    </div>
  );
};

export default ConsumerPage;
