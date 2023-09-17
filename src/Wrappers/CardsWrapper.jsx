import React, { useEffect, useState } from "react";
import { apiGetAllContent } from "../apiInteraction/apiCalls";
import { CardComponent } from "../components/";
import { Loader } from "@geist-ui/icons";
import { Link } from "react-router-dom";
import { InputBoxMat } from "../Utilities";

const CardsWrapper = () => {
  const [serverResponse, setServerResponse] = useState([]);

  const fnHandleContent = async () => {
    const res = await apiGetAllContent("instagram");
    setServerResponse(await res.data);
    console.log(res);
  };

  useEffect(() => {
    fnHandleContent();
  }, []);

  return (
    <>
      <button onClick={fnHandleContent}>Refresh</button>
      {!serverResponse && (
        <h1>
          <Loader />
        </h1>
      )}

      <div className="flex flex-row align-middle justify-center">
        <InputBoxMat />
      </div> 
      {/* <Grid.Container gap={4} justify="center" height="100px"> */}

      <div className="flex-wrap flex-row justify-center align-middle inline-flex">
        {serverResponse &&
          serverResponse.map((item, index) => {
            return (
              <>
                <Link to={`/content/${item.keyTapContentId}`}>
                  <CardComponent
                    propImage={
                      item.keyThumbnailUrl[0] ||
                      `https://source.unsplash.com/random/1920x1080?sig=${index}`
                    }
                    propImageAlt={`${item.keyTitle} - Image`}
                    propHeading={item.keyTapContentId}
                    propDescription={item.keyDescription}
                  />
                </Link>
              </>
            );
          })}
      </div>
      {/* </Grid.Container> */}
    </>
  );
};

export default CardsWrapper;
