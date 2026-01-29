import Image from "next/image";

export const TeamCard = ({srcImage , name , career} : {srcImage:string , name :string , career:string}) => {
  return (
    <div  className="relative w-96 h-125 ">
      <Image fill alt="#" className="object-cover" src={srcImage} />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white w-[80%] text-center py-5">
        <h1 className="font-semibold ">{name}</h1>
        <p className="text-sm text-gray-500">{career}</p>
      </div>
    </div>
  );
};

export default TeamCard;
