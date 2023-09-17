import { Heart } from "@geist-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardComponent = ({propImage, propImageAlt, propHeading, propDescription}) => {

  const headingLength = 24;
  const descriptionLength = 80;

  return (
    <Card className="mt-16 ml-4 w-80 h-96 shadow-md hover:shadow-lg cursor-pointer">
      <CardHeader color="" className="relative h-48 w-98 p-0">
        <img
          className="rounded-md w-full h-full object-fill" 
          src={propImage}
          alt={propImageAlt} 
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mt-2 mb-2 w-72">
        {`${
            propHeading.length > headingLength
              ? `${propHeading.substring(0, headingLength)}...`
              : propHeading.substring(0, headingLength)
          }`}
        </Typography>
        <Typography variant="h7" className="text-md w-72">
          {`${
            propDescription.length > descriptionLength
              ? `${propDescription.substring(0, descriptionLength)}...`
              : propDescription.substring(0, descriptionLength)
          }`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* <Heart/> */}
      </CardFooter>
    </Card>
  );
}
export default CardComponent;