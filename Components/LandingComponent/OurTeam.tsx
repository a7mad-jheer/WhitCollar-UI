import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="relative w-full md:h-175  h-50">
      <Image fill alt="" src="/Photo.jpg" className="md:object-cover object-none" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950/80  backdrop-blur-10  flex items-center justify-center md:py-15 xl:px-20 py-3 px-5 ">
        <h1 className="xl:text-6xl md:text-3xl font-semibold text-white">Our Expert Team</h1>
      </div>
    </section>
  );
}
