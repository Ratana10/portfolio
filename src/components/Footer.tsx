// import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-6 mt-20">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
        <div className="mb-4 sm:mb-0 sm:w-1/3 text-center sm:text-left">
          <p className="text-sm"></p>
        </div>

        <div className="mb-4 sm:mb-0 sm:w-1/3 text-center">
          <p className="text-sm">© Copyright 2024. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-4 sm:w-1/3 justify-center sm:justify-end">
          {/* <img
            src="/logo/facebook.svg"
            className="w-12 h-12 hover:text-gray-400"
          />
          <img
            src="/logo/telegram.svg"
            className="w-12 h-12 hover:text-gray-400"
          /> */}
        </div>
      </div>
    </footer>
  );
}
