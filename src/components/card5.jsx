import p5 from '../assets/images/image-patrick.jpg'

const Card5 = () => {
  return (
    <div className="bg-[#18202D] relative p-6 rounded-lg h-full">
      <div className="flex items-center gap-6">
        <img
          src={p5}
          alt=""
          className="rounded-[50%] border-2 border-[#BCC6D2]"
        />
        <div className="font-barlow italic">
          <p className="text-white font-bold">Patrick Abrams</p>
          <p className="text-[#A2A8B4]">Verified Graduate</p>
        </div>
      </div>
      <p className="font-barlow text-white text-2xl mt-5 mb-5">
      Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
      </p>
      <p className="text-[#A2A8B4] text-lg font-barlow mb-4">
        {
         "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
        }
      </p>
    </div>
  )
}

export default Card5
