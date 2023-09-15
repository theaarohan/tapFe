import React, { useEffect, useState } from "react";
import { apiGetAllContent } from "../apiInteraction/apiCalls";
import { CardComponent } from "./Cards";
import { Loader } from "@geist-ui/icons";
import { Grid } from "@geist-ui/core";

export default function ExploreComponent() {
  const [serverResponse, setServerResponse] = useState();

  const fnHandleContent = async () => {
    const res = await apiGetAllContent({ platform: "instagram" });
    setServerResponse(res.data);
    console.log(serverResponse);
  };

  useEffect(() => {
    fnHandleContent();
  }, []);

  return (
    <>
      <button onClick={fnHandleContent}>Refresh</button>
      {!serverResponse && <h1><Loader/></h1>}

      {/* <Grid.Container gap={4} justify="center" height="100px"> */}
      <div className="flex-row flex-wrap justify-center inline-flex">
      {serverResponse &&
        serverResponse.map((item) => {
          return (
            <CardComponent
              propImage={item.keyThumbnailUrl[0] || "https://picsum.photos/300/200"}
              propHeading={item.keyTapContentId}
              propDescription={item.keyDescription}
            />
          );
        })}
        </div>
        {/* </Grid.Container> */}
    </>
  );
}
