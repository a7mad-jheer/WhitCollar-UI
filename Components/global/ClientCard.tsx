import Image from "next/image";

export const ClientCard = ({
  id,
  src,
  name,
  job,
  icon,
  description,
}: {
  id: number;
  src: string;
  name: string;
  job: string;
  icon: React.ReactElement;
  description: string;
}) => {
  return (
    <div
      key={id}
      className="flex flex-col bg-gray-100 p-5 gap-3 md:w-1/2 xl:w-72 h-fit"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-20 h-20 rounded-full overflow-auto">
          <Image fill src={src} alt="#" className="object-cover" />
        </div>
        <div>
          <h1 className="font-semibold text-xl">{name}</h1>
          <p className="text-gray-500">{job}</p>
          <span className="flex gap-1 items-center">
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
          </span>
        </div>
      </div>

      <p className="text-gray-500">{description}</p>
    </div>
  );
};
