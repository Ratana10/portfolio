interface Props {
  name: string;
  src: string;
}

const Icon = ({ name, src }: Props) => {
  return (
    <div className="p-3  rounded-lg flex flex-col items-center space-y-2 transition-transform hover:scale-125 hover:cursor-pointer">
      <img src={src} alt={name} className="w-12 h-12 object-contain" />
      <p className="mt-2 text-sm text-[#FFAF00]">{name}</p>
    </div>
  );
};

export default Icon;
