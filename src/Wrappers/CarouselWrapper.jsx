import React, { useEffect, useState } from "react";
import { apiGetAllContent } from "../apiInteraction/apiCalls";
import CarouselComponent from "../components/CarouselComponent";

const CarouselWrapper = () => {
  const [stServerData, setServerData] = useState([]);

  const fnHandleContent = async () => {
    const res = await apiGetAllContent("all");
    setServerData(await res.data);
    console.log("In CarousalWrapper");
    console.log(stServerData);
  };

  useEffect(() => {
    fnHandleContent();
  }, []);

  return (
    <>
      <div className="h-96 w-100 m-6">
        <CarouselComponent propArrData={stServerData} />
      </div>
    </>
  );
};

export default CarouselWrapper;
