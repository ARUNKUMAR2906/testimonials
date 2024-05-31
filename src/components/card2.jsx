import p2 from '../assets/images/image-jonathan.jpg'

const Card2 = () => {
  return (
    <div className="bg-[#49556B] relative p-6 rounded-lg h-full">
    <div className="flex items-center gap-6">
      <img
        src={p2}
        alt=""
        className="rounded-[50%] border-2 border-[#BCC6D2]"
      />
      <div className="font-barlow italic">
        <p className="text-white font-bold">Jonathan Walters</p>
        <p className="text-[#BCC6D2]">Verified Graduate</p>
      </div>
      </div>
      <p className="font-barlow text-white text-2xl mt-5 mb-5">
      The team was very supportive and kept me motivated
      </p>
      <p className="text-[#BCC6D2] text-lg font-barlow mb-4">
        {"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."}
      </p>
  </div>
  )
}

export default Card2;
