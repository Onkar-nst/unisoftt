import React from "react";
import { ArrowRight } from "lucide-react";

const recommended = [
  {
    title: "Web Design",
    points: ["HTML", "CSS", "JavaScript"],
    img: "https://img.icons8.com/color/480/source-code.png",
    description:
      "Master front-end technologies to build modern, responsive websites.",
  },
  {
    title: "Oracle",
    points: ["DBA 9i", "DBA 12c", "PL/SQL"],
    img: "https://img.icons8.com/color/480/oracle-logo.png",
    description:
      "Manage enterprise databases using Oracle's robust DBA tools and PL/SQL.",
  },
];

const courses = [
  {
    title: "Microsoft Excel",
    img: "https://img.icons8.com/color/480/microsoft-excel-2019.png",
    description:
      "Master Excel for data analysis, dashboards, and business insights.",
  },
  {
    title: "Tableau",
    img: "https://img.icons8.com/color/480/tableau-software.png",
    description:
      "Visualize data effectively using interactive Tableau dashboards.",
  },
  {
    title: "Python",
    img: "https://img.icons8.com/color/480/python.png",
    description:
      "Learn Python programming for automation, data science and web development.",
  },
  {
    title: "Java SE",
    img: "https://img.icons8.com/color/480/java-coffee-cup-logo.png",
    description:
      "Build scalable applications using core and advanced Java concepts.",
  },
  {
    title: "C / C++",
    img: "https://img.icons8.com/color/480/c-plus-plus-logo.png",
    description:
      "Understand low-level programming for high-performance software.",
  },
  {
    title: "Oracle SQL",
    img: "https://img.icons8.com/color/480/oracle-logo.png",
    description: "Query and manage databases with Oracle SQL and PL/SQL.",
  },
  {
    title: "Windows Server",
    img: "https://img.icons8.com/color/480/windows8.png",
    description: "Configure, deploy, and manage Windows Server infrastructure.",
  },
  {
    title: "Software Testing",
    img: "https://img.icons8.com/color/480/bug.png",
    description:
      "Ensure software quality with manual and automated testing methods.",
  },
  {
    title: "Data Analytics",
    img: "https://img.icons8.com/color/480/combo-chart--v1.png",
    description:
      "Gain skills to clean, analyze, and interpret data across platforms.",
  },
  {
    title: "Power BI",
    img: "https://img.icons8.com/color/480/power-bi.png",
    description: "Use Power BI to create interactive reports and dashboards.",
  },
  {
    title: "Cloud Computing",
    img: "https://img.icons8.com/color/480/cloud.png",
    description:
      "Learn cloud infrastructure, PaaS services, and deployment strategies.",
  },
  {
    title: "Ethical Hacking",
    img: "https://img.icons8.com/fluency/480/hacker.png",
    description:
      "Learn penetration testing and vulnerability assessment techniques.",
  },
  {
    title: "Cisco Networking",
    img: "https://img.icons8.com/color/480/network-card.png",
    description: "Build and manage networks using Cisco technologies.",
  },
  {
    title: ".NET",
    img: "https://img.icons8.com/color/480/net-framework.png",
    description:
      "Develop web and desktop applications using Microsoft .NET framework.",
  },
  {
    title: "Red Hat Linux",
    img: "https://img.icons8.com/color/480/linux.png",
    description:
      "Master Linux system administration with Red Hat technologies.",
  },
  {
    title: "PHP",
    img: "https://img.icons8.com/officel/480/php-logo.png",
    description: "Develop dynamic web applications using PHP.",
  },
  {
    title: "R Programming",
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/480/external-r-programming-mobile-app-development-flaticons-lineal-color-flat-icons.png",
    description: "Analyze data statistically with R programming.",
  },
  {
    title: "Big Data with Hadoop",
    img: "https://img.icons8.com/color/480/hadoop-distributed-file-system.png",
    description: "Handle large-scale data processing using Hadoop ecosystem.",
  },
];

export default function CourseGrid() {
  return (
    <>
      {/* Recommended Programs */}
      <div className="bg-gradient-to-br from-red-200 via-red-100 to-white px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Know more about the{" "}
            <span className="italic text-red-700 relative inline-block">
              recommended programs
              <span className="block h-[3px] w-28 bg-red-400 mt-1 rounded-full mx-auto"></span>
            </span>
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Courses that are highly preferred by aspiring developers and IT
            professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-10">
          {recommended.map((rec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between"
            >
              <img
                src={rec.img}
                alt={rec.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {rec.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-snug">
                {rec.description}
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-3">
                {rec.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <ArrowRight className="text-blue-700 hover:text-blue-900" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career-Ready IT Courses */}
      <div className="min-h-screen bg-gradient-to-tr from-green-50 via-emerald-100 to-white px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Explore our{" "}
            <span className="italic text-green-700 relative inline-block">
              career-ready IT courses
              <span className="block h-[3px] w-36 bg-lime-400 mt-1 rounded-full mx-auto"></span>
            </span>
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Learn industry-relevant skills, gain certification, and launch your
            future with our expert-led training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow transform hover:-translate-y-1"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-36 object-contain p-4 bg-gray-50"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-blue-800 mb-1 text-center">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
