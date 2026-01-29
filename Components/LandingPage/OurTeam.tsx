import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="relative w-full h-175 ">
      <Image fill alt="" src="/meeting.jpg" className="object-cover" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950/80  backdrop-blur-10  flex items-center justify-center md:py-15 xl:px-20 py-10 px-5 ">
        <h1 className="xl:text-6xl text-3xl font-semibold text-white">Our Expert Team</h1>
      </div>
    </section>
  );
}
