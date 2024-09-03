interface Props {
  name: string;
  src: string;
}

const Icon = ({ name, src }: Props) => {
  return (
    <div className="p-3 bg-gray-900 rounded-lg flex flex-col items-center space-y-2">
      <img src={src} alt={name} className="w-10 h-10" />
      <p className="text-white text-sm text-center">{name}</p>
    </div>
  );
};

export default Icon;
