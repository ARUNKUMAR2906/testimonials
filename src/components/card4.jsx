import p4 from '../assets/images/image-kira.jpg'

const Card4 = () => {
  return (
    <div className="bg-white relative p-6 rounded-lg">
      <div className="flex items-center gap-6">
        <img
          src={p4}
          alt=""
          className="rounded-[50%] border-2 border-[#BCC6D2]"
        />
        <div className="font-barlow italic">
          <p className="text-[#49556b] font-bold">Kira Whittle</p>
          <p className="text-[#818489]">Verified Graduate</p>
        </div>
      </div>
      <p className="font-barlow text-[#49556B] text-2xl mt-5 mb-5">
      Such a life-changing experience. Highly recommended!
      </p>
      <p className="text-[#818489] text-lg font-barlow mb-4">
        {
         "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
        }
      </p>
    </div>
  )
}

export default Card4
