import p3 from "../assets/images/image-jeanette.jpg";

const Card3 = () => {
  return (
    <div className="bg-white relative p-6 rounded-lg h-full">
      <div className="flex items-center gap-6">
        <img
          src={p3}
          alt=""
          className="rounded-[50%] border-2 border-[#BCC6D2]"
        />
        <div className="font-barlow italic">
          <p className="text-[#49556b] font-bold">Jeanette Harmon</p>
          <p className="text-[#818489]">Verified Graduate</p>
        </div>
      </div>
      <p className="font-barlow text-[#49556B] text-2xl mt-5 mb-5">
        An overall wonderful and rewarding experience
      </p>
      <p className="text-[#818489] text-lg font-barlow mb-4">
        {
         "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
        }
      </p>
    </div>
  );
};

export default Card3;
