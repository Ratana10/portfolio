import { IconType } from "../types";
import Icon from "./Icon";

const IconCard = () => {
  const frontendIcons: IconType[] = [
    {
      name: "Reactjs",
      src: "frontend/reactjs.svg",
    },
    {
      name: "Nextjs",
      src: "frontend/nextjs.svg",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-lg text-white p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Frontend Framework</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {frontendIcons.map((item: any, index: number) => (
          <Icon key={index} name={item.name} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default IconCard;
