import { Heart } from "@geist-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const CardComponent = ({propImage, propHeading, propDescription}) => {
  return (
    <Card className="mt-4 ml-4 w-72 bg-[#fafafa5e]">
      <CardHeader color="blue-gray" className="relative h-48 w-72 p-2">
        <img
          className="rounded-md"
          src={propImage}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mt-2 mb-2">
          {propHeading}
        </Typography>
        <Typography variant="h7" className="text-sm">
          {`${
            propDescription.length > 200
              ? `${propDescription.substring(0, 200)}...`
              : propDescription.substring(0, 200)
          }`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* <Heart/> */}
      </CardFooter>
    </Card>
  );
}