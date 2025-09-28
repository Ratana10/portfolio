import { FaFacebook, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMediaButtons = () => {
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 5,
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/ratana.san.79/",
      label: "Facebook",
      icon: <FaFacebook size={30} />,
      bg: "linear-gradient(45deg, #3b5998, #8b9dc3)",
    },
    {
      href: "https://t.me/Ratana10",
      label: "Telegram",
      icon: <FaTelegram size={30} />,
      bg: "linear-gradient(45deg, #0088cc, #00c6ff)",
    },
    {
      href: "https://www.linkedin.com/in/ratana-san-a624bb243/",
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      bg: "linear-gradient(45deg, #0077b5, #00a0dc)",
    },
    {
      href: "https://www.tiktok.com/@sanratana10?is_from_webapp=1&sender_device=pc",
      label: "TikTok",
      icon: <FaTiktok size={30} />,
      bg: "linear-gradient(45deg, #000000, #111111)",
    },
  ];

  return (
    <div className="mt-4 flex space-x-6">
      {socialLinks.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white"
        >
          {/* animate only the icon circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={spinTransition}
            className="p-2 rounded-full shadow-lg"
            style={{
              background: item.bg,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            {item.icon}
          </motion.div>
          {/* static text */}
          <span className="mt-1 text-xs">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;