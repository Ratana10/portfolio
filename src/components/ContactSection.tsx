import { FaHandPointRight } from "react-icons/fa";
import SocialMediaButtons from "./SocialMediaButtons";

const ContactSection = () => {
  return (
    <div className="mt-20 rounded-lg ">
      <h2 className="text-2xl font-bold text-[#FFAF00] mb-4">
        - Feel Free to Contact Me
      </h2>
      <p className="text-gray-200 mb-6">
        You can reach out to me through the following platforms:
      </p>
      <SocialMediaButtons />
      <h2 className="text-2xl font-bold text-[#FFAF00] mt-4">
        - Latest CV
      </h2>
      <div className="mt-6">
        <p className="text-gray-200 mb-6">
          Your can find my latest CV via this link:
          <a
            href="https://flowcv.com/resume/e7eihdaw7o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFAF00] hover:underline ml-6"
          >
            <div className="flex mt-2 items-center">
              <FaHandPointRight className="h-6 w-6 mr-4" /> <span>Flow CV</span>
            </div>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
