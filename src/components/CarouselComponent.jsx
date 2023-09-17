import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CarouselComponent = ({ propArrData }) => {
  console.log("In CarouselComponent");
  console.log(propArrData);

  return (
    <>
      <Carousel autoplay autoplayDelay={3000} loop className="rounded-md">
        {propArrData.map((item, index) => {
          return (
            <>
              <Link to={`/content/${item.keyTapContentId}`}>
                <img
                  key={index}
                  src={`https://source.unsplash.com/random/1920x1080?sig=${index}`}
                  alt={`${item.keyTitle} - Image`}
                  className="h-full w-full object-cover"
                />
              </Link>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
