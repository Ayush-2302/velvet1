import React from "react";

const navStyles = [
  {
    id: "1",
    title: "Light Theme",
    layout: "horizontal",
    backgroundColor: "bg-white",
    textColor: "text-black",
    links: ["Home", "About", "Services", "Contact"],
  },
  {
    id: "2",
    title: "Dark Theme",
    layout: "horizontal",
    backgroundColor: "bg-gray-800",
    textColor: "text-white",
    links: ["Home", "Portfolio", "Blog", "Contact"],
  },
  {
    id: "3",
    title: "Colorful Theme",
    layout: "horizontal",
    backgroundColor: "bg-blue-500",
    textColor: "text-yellow-200",
    links: ["Home", "Features", "Pricing", "Support"],
  },
  {
    id: "4",
    title: "Vertical Theme",
    layout: "vertical",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
    links: ["Home", "Dashboard", "Settings", "Logout"],
  },
  {
    id: "5",
    title: "Centered Theme",
    layout: "centered",
    backgroundColor: "bg-green-500",
    textColor: "text-white",
    links: ["Home", "Gallery", "Events", "Contact"],
  },
  {
    id: "6",
    title: "Sticky Navbar",
    layout: "sticky",
    backgroundColor: "bg-indigo-600",
    textColor: "text-white",
    links: ["Home", "Features", "Pricing", "Support"],
  },
];

const Navbar = ({ title, backgroundColor, textColor, links, layout }) => (
  <nav
    className={`${backgroundColor} p-4 mb-4 rounded-md shadow-lg ${
      layout === "sticky" ? "sticky top-0" : ""
    }`}
  >
    <h2
      className={`font-bold text-xl ${textColor} text-center ${
        layout === "centered" ? "mb-2" : ""
      }`}
    >
      {title}
    </h2>
    <ul
      className={`flex ${
        layout === "vertical" ? "flex-col" : "space-x-4"
      } mt-2 ${textColor}`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className={`hover:underline ${textColor}`}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const MultipleNav = () => {
  return (
    <div className="p-6">
      {navStyles.map(
        ({ id, title, backgroundColor, textColor, links, layout }) => (
          <Navbar
            key={id}
            title={title}
            backgroundColor={backgroundColor}
            textColor={textColor}
            links={links}
            layout={layout}
          />
        )
      )}
    </div>
  );
};

export default MultipleNav;
