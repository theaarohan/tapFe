import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";
import { Heart, Share } from '@geist-ui/icons'

export function CardDefault({propTitle, propDescription}) {
return (
    <>
    <Card className="mt-8 w-80 shadow-lg hover:shadow-md cursor-pointer">
        <CardHeader color="blue-gray" className="relative h-40 mb-4">
            <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            />
        </CardHeader>
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {propTitle}
            </Typography>
            <Typography>
                {`${propDescription.length > 200 ? 
                    `${propDescription.substring(0,200)}...` : 
                    propDescription.substring(0,200)
                }`}
            </Typography>
        </CardBody>
        <CardFooter className="pt-0">
            <Heart/>
            <Share/>
        </CardFooter>
        </Card>
    </>
);
}