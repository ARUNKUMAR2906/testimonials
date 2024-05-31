import p1 from "../assets/images/image-daniel.jpg";
import q from "../assets/images/bg-pattern-quotation.svg";

const Card1 = () => {
  return (
    <div className="bg-[#733FC8] relative p-6 rounded-lg h-full">
      <div className="flex items-center gap-6">
        <img
          src={p1}
          alt=""
          className="rounded-[50%] border-2 border-[#A57CE4]"
        />
        <div className="font-barlow italic">
          <p className="text-white font-bold">Daniel Clifford </p>
          <p className="text-[#A57CE4]">Verified Graduate</p>
        </div>
        </div>
        <p className="font-barlow text-white text-2xl mt-5 font-semibold mb-5 ">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny's worth.
        </p>
        <p className="text-[#A57CE4] text-lg font-barlow mb-6">
          "I was an EMT for many years before I joined the bootcamp. I've been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I've successfully switched careers, working as
          a Software Engineer at a VR startup."
        </p>
    </div>
  );
};

export default Card1;
