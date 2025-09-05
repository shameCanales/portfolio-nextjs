import AboutTitles from "@/components/ui/AboutTitle";
import DevJourItem from "@/components/DevJourItem";

const devJourney = [
  {
    title: "Curiosity Sparked It All",
    desc: "I first got curious about how beautiful websites and apps were made — that curiosity quickly turned into excitement when I learned the basics of programming. Writing code felt fun and empowering, and I began imagining all the things I could build.",
  },
  {
    title: "First Line of Code",
    desc: "I wrote my first line of code in Grade 11 using Visual Basic to build a basic calculator. Around the same time, I was introduced to HTML and CSS — and built my first website. That early exposure made me realize I wanted to keep going deeper.",
  },
  {
    title: "Learning Beyond the Classroom",
    desc: "In college, I went beyond the curriculum—learning advanced HTML and CSS early to build a standout portfolio. I explored Python, C, C#, PHP, and MySQL, and later deepened my skills through Udemy courses in web development, UI/UX, and React.",
  },
  {
    title: "First Real Projects & Building with Purpose",
    desc: "I began with a PHP & MySQL CRUD app, then led the development of a Water Billing Management System for our capstone. I'm now rebuilding it with React and Node.js to modernize the stack and showcase my full stack skills—this portfolio highlights that journey.",
  },
  {
    title: "Growing Into a Full Stack Developer",
    desc: "I'm a frontend-focused developer specializing in responsive, component-based UIs with React, Next.js, and Tailwind CSS. I'm also advancing my backend skills with Node.js and MongoDB, aiming to become a well-rounded full stack engineer committed to purposeful learning and development.",
  },
];

export default function DevJourney() {
  return (
    <div className="mt-15 sm:mt-18 md:mt-24 mb-20">
      <div className="sm:hidden">
        <AboutTitles>Dev Journey</AboutTitles>
      </div>
      <div className="hidden sm:block">
        <AboutTitles>Developer Journey</AboutTitles>
      </div>

      <div className="mt-7 sm:mt-10 2xl:mt-15 2xl:max-w-[1120px] 2xl:mx-auto">
        {devJourney.map((journ) => (
          <DevJourItem
            key={journ.title}
            title={journ.title}
            desc={journ.desc}
          />
        ))}
      </div>
    </div>
  );
}
