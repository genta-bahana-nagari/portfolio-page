import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "/src/components/porto_cards/ProjectCards";
import OrganizationCard from "/src/components/porto_cards/OrganizationCards";
import KARAWITAN from "/src/assets/images/KARAWITAN.png";
import PAKS from "/src/assets/images/PAKS.png";
import OSIS_SMP from "/src/assets/images/OSIS_SMP.png";
import Sinvent from "/src/assets/images/Sinvent.png";
import Studio from "/src/assets/images/Studio.jpg";
import esp_cam from "/src/assets/images/esp_cam.jpg";
import FactsClub from "/src/assets/images/Facts-Club.png";
import PortoPage from "/src/assets/images/PortoPage.png";

const portfolioItems = [
  {
    title: "My Projects",
    description: (
      <>
        I love building anything about technology. My expertise lies in crafting{" "}
        responsive, user-friendly experiences using modern frameworks and
        styling tools. Also tinkering with numerous modules to build a
        masterpiece. Check my{" "}
        <span className="text-yellow-500">other projects</span> on{" "}
        <a
          href="https://github.com/genta-bahana-nagari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white break-all hover:text-yellow-500 hover:underline transition-all duration-200"
        >
          my GitHub!
        </a>
      </>
    ),

    component: "ProjectCard",
    items: [
      {
        name: "Useless Facts Club",
        desc: "A fun space for sharing and discovering useless facts, built with Next.js, Tailwind, and Postgres.",
        image: FactsClub,
        previewLink: "https://useless-facts-club.vercel.app/",
        codeLink: "https://github.com/genta-bahana-nagari/useless-facts-club",
      },
      {
        name: "Portfolio Page",
        desc: "You're here. This very portfolio page, built with React and Framer Motion for smooth animations.",
        image: PortoPage,
        previewLink: "#",
        codeLink: "https://github.com/genta-bahana-nagari/my-portfolio",
      },
      {
        name: "Inventory System",
        desc: "Laravel based inventory system with high reliability and data accuracy.",
        image: Sinvent,
        previewLink: "https://sinvent.gentabahana.me",
        codeLink: "https://github.com/genta-bahana-nagari/sinvent24",
      },
      // {
      //   name: "Music Studio",
      //   desc: "Inspired from Stembayo Karawitan Group, with a touch of Wordpress styling.",
      //   image: Studio,
      //   previewLink: null,
      //   codeLink: null,
      // },
      {
        name: "ESP32 Camera",
        desc: "Built for P5 school event. Perfect combination of price-friendly components and innovations.",
        image: esp_cam,
        previewLink: null,
        codeLink: "https://github.com/genta-bahana-nagari/ESP32_Cam_Servo",
      },
    ],
  },
  {
    title: "Experience",
    description:
      "Beyond coding, I’m passionate about teamwork and leadership. I’ve played an active role in cultural organizations and student councils, where I’ve led initiatives that spark creativity, strengthen collaboration, and bring people together. Whether it's preserving traditions or driving impactful projects, I love working with teams to turn ideas into reality!",
    component: "OrganizationCard",
    items: [
      {
        name: "PT Gamatechno Indonesia - Intern",
        year: "2025-Present",
        role: "Fullstack Engineer Intern",
        what_i_do:
          "Worked with clients to build and maintain websites, focusing on performance and accessibility.",
        image: null,
      },
      {
        name: "PAKS Stembayo",
        year: "2023-2024",
        role: "Active member and Staff of Karawitan",
        what_i_do:
          "Actively participated in Karawitan Orchestra performances. Also served in Public Relations position, organizing and leading cultural events within the school.",
        image: PAKS,
      },
      {
        name: "Karawitan Stembayo",
        year: "2023-2024",
        role: "Public Relations Staff & Performer",
        what_i_do:
          "Contributed to traditional music performances in school and community events, enhancing cultural appreciation through Javanese gamelan.",
        image: KARAWITAN,
      },
      {
        name: "Junior High Council",
        year: "2020-2021",
        role: "Chairman of Catholic Religious Division",
        what_i_do:
          "Led school religious activities, facilitated communication between students and faculty, and organized events to enhance student engagement.",
        image: OSIS_SMP,
      },
    ],
  },
  {
    title: "PDF Portfolio",
    description:
      "You’ll find the rest of the materials in this PDF—have a nice tour!",
    component: "DownloadPortfolio",
    items: [],
  },
];

const Porto = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const selectedData = portfolioItems[selectedCategory];

  return (
    <div
      id="porto"
      className="scroll-mt-20 py-10 bg-black text-white text-center overflow-x-hidden w-screen max-w-full"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Genta's Portfolio
      </h2>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 px-4">
        {portfolioItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition border-2
              border-transparent hover:border-yellow-400 cursor-pointer ${
                selectedCategory === index
                  ? "bg-yellow-400 text-black"
                  : "bg-black"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* Card Section */}
      <motion.div
        key={selectedCategory}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 bg-black text-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">
          {selectedData.title}
        </h3>
        <div className="text-sm sm:text-base md:text-lg text-white mb-6 max-w-3xl mx-auto md:px-4 px-2 text-center overflow-hidden">
          {selectedData.description}
        </div>
        {/* Cards */}
        {selectedData.component === "DownloadPortfolio" ? (
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1_Vc9yrPF4kCr_UdkXUhno7jz0hDBGyP3/view?usp=sharing"
              target="_blank"
              download="Genta_Portfolio.pdf"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg
                      hover:bg-yellow-500 transition-all hover:scale-115"
            >
              Download Here
            </a>
          </div>
        ) : selectedData.component === "ProjectCard" ? (
          <div className="relative w-full overflow-hidden bg-black py-10">
            <div className="marquee-track flex whitespace-nowrap">
              {/* Repeat the content twice for seamless loop */}
              {[...selectedData.items, ...selectedData.items].map(
                (item, index) => (
                  <div
                    key={index}
                    className="project-slide w-[250px] sm:w-[300px] flex-shrink-0 mx-2"
                  >
                    <ProjectCard {...item} />
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {selectedData.items.map((item, index) => (
              <OrganizationCard key={index} {...item} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Porto;
