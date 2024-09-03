import SocialMediaButtons from "./SocialMediaButtons";

const ContactSection = () => {
  
  return (
    <div className="mt-20 rounded-lg ">
      <h2 className="text-3xl font-bold text-[#FFAF00] mb-4">
        Feel Free to Contact Me
      </h2>
      <p className="text-gray-400 mb-6">
        You can reach out to me through the following platforms:
      </p>
      <SocialMediaButtons />
    </div>
  );
};

export default ContactSection;
