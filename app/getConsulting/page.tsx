import { BgBlur, Button, HeroTitle } from "@/Components/global/page";

const items = [
  {
    id: 0,
    title: "Basic",
    price: (
      <div className="font-bold mb-2">
        <span className=" text-3xl">$7.99</span> /month
      </div>
    ),
    perYears: (
      <div className="bg-gray-400 text-white py-2 px-4">
        Billed as<span className="font-bold"> $96 </span>Per Year
      </div>
    ),
    features: [
      <span key={0}>Unlimited member</span>,
      <span key={1}>
        <span className="font-bold">Unlimited</span> feedback
      </span>,
      <span key={2}>Weekely team Feedback Friday</span>,
      <span key={3}>
        Custom Kudos <span className="font-bold">+9 illustration</span>
      </span>,
      <span key={4}>Team feedback history (30 items)</span>,
      <span key={5}>Personal feedback</span>,
    ],
  },
  {
    id: 1,
    title: "Advanced",
    price: (
      <div className="font-bold mb-5">
        <span className="text-3xl"> $9.99 </span> /month
      </div>
    ),
    perYears: (
      <div className="bg-gray-500 text-white py-2 px-4">
        Billed as<span className="font-bold"> $199 </span>Per Year
      </div>
    ),
    features: [
      <span key={0}>Unlimited member</span>,
      <span key={1}>
        <span className="font-bold">Unlimited</span> feedback
      </span>,
      <span key={2}>Weekely team Feedback Friday</span>,
      <span key={3}>
        Custom Kudos <span className="font-bold">+9 illustration</span>
      </span>,
      <span key={4}>Team feedback history (30 items)</span>,
      <span key={5}>Personal feedback history (6 items)</span>,
      <span key={5}>slack integration</span>,
    ],
  },
  {
    id: 2,
    title: "Pro",
    price: (
      <div className="font-bold mb-5">
        <span className="text-3xl">$9.99</span> /month
      </div>
    ),
    perYears: (
      <div className="bg-gray-400 text-white py-2 px-4">
        Billed as<span className="font-bold"> $199 </span>Per Year
      </div>
    ),
    features: [
      <span key={0}>Unlimited member</span>,
      <span key={1}>
        <span className="font-bold">Unlimited</span> feedback
      </span>,
      <span key={2}>Weekely team Feedback Friday</span>,
      <span key={3}>
        Custom Kudos <span className="font-bold">+9 illustration</span>
      </span>,
      <span key={4}>Team feedback history (30 items)</span>,
      <span key={5}>Personal feedback history (6 items)</span>,
      <span key={5}>slack integration</span>,
    ],
  },
];

export const GetConsulting = () => {
  return (
    <section>
      <div className="h-96 overflow-hidden">
        <BgBlur
          imgSrc="/meeting.jpg"
          textTitle="Pricing Package"
          contentText="Affordable Plans For Customers"
        />
      </div>

      <div className="my-10">
        <HeroTitle
          title="Smple Pricing Option"
          description="Choose The Right Plan For You And Your Team"
        />

        <div className="p-5 flex flex-col gap-5 md:flex-row md:items-center justify-center">
          {items.map((item) => {
            return (
              <div key={item.id}>
                {item.title === "Advanced" ? (<div className="bg-red-300 py-3 px-5 text-center font-bold text-white text-2xl">Most Popular</div>) : null}
                <div
                  className={`${
                    item.title === "Advanced"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200"
                  } p-5 text-center shadow-2xl`}
                >
                  <div>
                    <h1 className="font-bold text-xl ">{item.title}</h1>
                    <hr className="my-5 text-gray-400" />
                    {item.price}
                    {item.perYears}
                  </div>
                  <hr className="my-10 text-gray-400" />

                  <ul className="flex flex-col gap-5">
                    {item.features.map((feat, index) => {
                      return <li key={index}>{feat}</li>;
                    })}
                  </ul>
                  <div className="flex items-center justify-center mt-10">
                    <Button text="Get Started" href="#" className="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetConsulting;
