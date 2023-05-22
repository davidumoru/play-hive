import { Typography } from "@material-tailwind/react";

const Example = () => {
  return (
    <footer className="w-full p-8 mt-[20rem]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <h1 className="text-3xl font-bold text-pink-500 mr-6">playHive.</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Privacy Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Terms of Service
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2022 playHive. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Example;