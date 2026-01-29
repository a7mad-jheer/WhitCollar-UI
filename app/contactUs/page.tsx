import { BgBlur, Button, HeroTitle } from "@/Components/global/page";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";




const items = [
    {id: 0 , icon : <FaPhoneAlt /> , title : "Have Any Questions ?" , description : <div>Free <span>+01569896654</span></div> },
    {id: 1 , icon : <MdEmail /> , title : "Write Email" , description : <span>Info@Whitecollarcom</span> },
    {id: 2 , icon : <FaLocationDot /> , title : "Visit Anytime" , description : <span>King Street ,Prior Lake , New York</span> },
]
export const ContactUs = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden text-center">
        <BgBlur
        className="text-center"
          imgSrc="/meeting.jpg"
          textTitle="Contact Us"
          contentText="Feel Free Reach Us"
        />
      </div>

      {/* First Component */}
      <div className="p-5 xl:px-60 md:flex gap-10">
        <div className="relative w-full md:w-120 h-60 md:h-120">
            <Image 
            src="/agreed.jpg"
            alt=""
            fill
            className ="object-cover"
            />
        </div>

        <div className="my-5">
            <HeroTitle title="Let's Talk" description ="Get in touch with us" paragraph = {<p className="text-gray-500">Completelt synergize resource taxing relationships via premier nicho ynamically innovate state of the art customer service.</p>} />

            <ul className="flex flex-col gap-3 my-5">
                {items.map((item) => {
                    return (
                        <li key={item.id} className="flex items-center gap-5 border-2 border-gray-200 p-5 shadow-xl rounded-xl">
                            <span className="bg-red-300 w-10 h-10 rounded-full flex items-center justify-center text-white">{item.icon}</span>
                            <div>
                                <h1>{item.title}</h1>
                                <div>{item.description}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>

      {/* Second Component */}
      <div className="p-5 xl:px-60">
        <HeroTitle title="Contact Us" description ="Request A Call Back !"/>

        <form className="border-2 border-gray-300 shadow-xl p-5 flex flex-col  gap-5 xl:border-none">
            <div className="flex flex-col gap-2">
            <input type="text" className=" bg-gray-100  p-2 outline-none" placeholder="Your Name" />
            <input type="text" className="bg-gray-100 p-2  outline-none" placeholder="Email Address" />
            <input type="text" className="bg-gray-100 p-2  outline-none" placeholder="Phone Number" />
            <input type="text" className="bg-gray-100 p-2  outline-none" placeholder="Subject" />
            <textarea  className=" h-37.5 resize-none outline-none  bg-gray-100 p-2 " placeholder="Message..."></textarea>
        </div>
        <Button text="Submit" href="#" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
