import React from "react";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineCalendar,
  AiFillDashboard,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import product8 from "./product8.jpg";

export const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];

export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}°C",
  title: "Temperature",
};

export const links = [
  {
    links: [
      {
        name: "Dashboard",
        icon: (
          <img
            src="https://i.ibb.co/PZkpLVG/dashboard.png"
            alt="dashboard"
            border="0"
          />
        ),
      },
    ],
  },

  {
    links: [
      {
        name: "profile",
        icon: <img src="https://i.ibb.co/f0j8mnm/Profile.png" alt="Profile" />,
      },
      {
        name: "Verification",
        icon: <img src="https://i.ibb.co/S6DV7V6/verify.png" />,
      },
      {
        name: "Maturity",
        icon: (
          <img
            src="https://i.ibb.co/Sfx8Ny9/icons8-innovation-30.png"
            alt="Maturity"
            border="0"
          />
        ),
      },
    ],
  },
  {
    links: [
      {
        name: "Idea-Review",
        icon: <img src="https://i.ibb.co/7nYC9XW/idea.png" alt="idea" />,
      },
      {
        name: "Idea-Upload",
        icon: (
          <img
            src="https://i.ibb.co/HhXD34N/icons8-upload-to-the-cloud-24.png"
            alt="idea"
          />
        ),
      },
      {
        name: "post",
        icon: (
          <img src="https://i.ibb.co/r00QXSD/Post.png" alt="Post" border="0" />
        ),
      },
      {
        name: "current-projects",
        icon: (
          <img
            src="https://i.ibb.co/MfTPG81/current-projects.png"
            alt="current-projects"
            border="0"
          />
        ),
      },

      {
        name: "To-Do-List",
        icon: (
          <img
            src="https://i.ibb.co/XpFgSXL/todoList.png"
            alt="todoList"
            border="0"
          />
        ),
      },
      {
        name: "Calendar",
        icon: (
          <img
            src="https://i.ibb.co/BZTdvTD/calendar.png"
            alt="calendar"
            border="0"
          />
        ),
      },
      {
        name: "Tasks",
        icon: (
          <img src="https://i.ibb.co/QYGb6hv/task.png" alt="task" border="0" />
        ),
      },
      {
        name: "session",
        icon: (
          <img
            src="https://i.ibb.co/znWVbhp/session.png"
            alt="session"
            border="0"
          />
        ),
      },
      {
        name: "FAQs",
        icon: (
          <img src="https://i.ibb.co/6HMcQkz/FAQ.png" alt="FAQ" border="0" />
        ),
      },
      {
        name: "Know-More",
        icon: (
          <img
            src="https://i.ibb.co/LSNFnKZ/icons8-reading-24.png"
            alt="icons8-reading-24"
            alt="contactus"
            border="0"
          />
        ),
      },
      {
        name: "About-Us",
        icon: (
          <img
            className="w-5"
            src="https://i.ibb.co/WvFhq7Q/icons8-information-50.png"
            alt="aboutus"
            border="0"
          />
        ),
      },
      {
        name: "Contact-Us",
        icon: (
          <img
            src="https://i.ibb.co/y4s7K6g/icons8-communication-24.png"
            alt="contactus"
            border="0"
          />
        ),
      },
    ],
  },
  // {
  //   title: 'Charts',
  //   links: [

  //     {
  //       name: 'progress',
  //       icon: <FiPieChart />,
  //     },

  //   ],
  // },
];

export const cartData = [
  {
    image: product5,
    name: "butterscotch ice-cream",
    category: "Milk product",
    price: "$250",
  },
  {
    image: product6,
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: "$450",
  },
  {
    image: product7,
    name: "Red color candy",
    category: "Food Item",
    price: "$190",
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <FiStar />,
    title: "My Profile",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    nav:"profile",
  },
  // {
  //   icon: <FiCreditCard />,
  //   title: "My Tasks",
  //   desc: "To-do and Daily Tasks",
  //   iconColor: "rgb(255, 244, 229)",
  //   iconBg: "rgb(254, 201, 15)",
  //   nav: "Switchi",
  // },
];

export const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const ecomPieChartData = [
  { x: "2018", y: 18, text: "35%" },
  { x: "2019", y: 18, text: "15%" },
  { x: "2020", y: 18, text: "25%" },
  { x: "2021", y: 18, text: "25%" },
];

export const kanbanData = [
  {
    Id: "Task 1",
    Title: "Task - 29001",
    Status: "Open",
    Summary: "Analyze the new requirements gathered from the customer.",
    Type: "Story",
    Priority: "Low",
    Tags: "Analyze,Customer",
    Estimate: 3.5,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-nancy-davloio",
  },
  {
    Id: "Task 2",
    Title: "Task - 29002",
    Status: "InProgress",
    Summary: "Improve application performance",
    Type: "Improvement",
    Priority: "Normal",
    Tags: "Improvement",
    Estimate: 6,
    Assignee: "Andrew Fuller",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-normal, e-andrew-fuller",
  },
  {
    Id: "Task 3",
    Title: "Task - 29003",
    Status: "Open",
    Summary: "Arrange a web meeting with the customer to get new requirements.",
    Type: "Others",
    Priority: "Critical",
    Tags: "Meeting",
    Estimate: 5.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#1F88E5",
    ClassName: "e-others, e-critical, e-janet-leverling",
  },
  {
    Id: "Task 4",
    Title: "Task - 29004",
    Status: "InProgress",
    Summary: "Fix the issues reported in the IE browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "IE",
    Estimate: 2.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-janet-leverling",
  },
  {
    Id: "Task 5",
    Title: "Task - 29005",
    Status: "Review",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-steven-walker",
  },
  {
    Id: "Task 6",
    Title: "Task - 29007",
    Status: "Validate",
    Summary: "Validate new requirements",
    Type: "Improvement",
    Priority: "Low",
    Tags: "Validation",
    Estimate: 1.5,
    Assignee: "Robert King",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-low, e-robert-king",
  },
  {
    Id: "Task 7",
    Title: "Task - 29009",
    Status: "Review",
    Summary: "Fix the issues reported in Safari browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Fix,Safari",
    Estimate: 1.5,
    Assignee: "Nancy Davloio",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-nancy-davloio",
  },
  {
    Id: "Task 8",
    Title: "Task - 29010",
    Status: "Close",
    Summary: "Test the application in the IE browser.",
    Type: "Story",
    Priority: "Low",
    Tags: "Review,IE",
    Estimate: 5.5,
    Assignee: "Margaret hamilt",
    RankId: 3,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-margaret-hamilt",
  },
  {
    Id: "Task 9",
    Title: "Task - 29011",
    Status: "Validate",
    Summary: "Validate the issues reported by the customer.",
    Type: "Story",
    Priority: "High",
    Tags: "Validation,Fix",
    Estimate: 1,
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-steven-walker",
  },
  {
    Id: "Task 10",
    Title: "Task - 29015",
    Status: "Open",
    Summary: "Show the retrieved data from the server in grid control.",
    Type: "Story",
    Priority: "High",
    Tags: "Database,SQL",
    Estimate: 5.5,
    Assignee: "Margaret hamilt",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-margaret-hamilt",
  },
  {
    Id: "Task 11",
    Title: "Task - 29016",
    Status: "InProgress",
    Summary: "Fix cannot open user’s default database SQL error.",
    Priority: "Critical",
    Type: "Bug",
    Tags: "Database,Sql2008",
    Estimate: 2.5,
    Assignee: "Janet Leverling",
    RankId: 4,
    Color: "#E64A19",
    ClassName: "e-bug, e-critical, e-janet-leverling",
  },
  {
    Id: "Task 12",
    Title: "Task - 29017",
    Status: "Review",
    Summary: "Fix the issues reported in data binding.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Databinding",
    Estimate: "3.5",
    Assignee: "Janet Leverling",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-normal, e-janet-leverling",
  },
  {
    Id: "Task 13",
    Title: "Task - 29018",
    Status: "Close",
    Summary: "Analyze SQL server 2008 connection.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Grid,Sql",
    Estimate: 2,
    Assignee: "Andrew Fuller",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-release, e-andrew-fuller",
  },
  {
    Id: "Task 14",
    Title: "Task - 29019",
    Status: "Validate",
    Summary: "Validate databinding issues.",
    Type: "Story",
    Priority: "Low",
    Tags: "Validation",
    Estimate: 1.5,
    Assignee: "Margaret hamilt",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-margaret-hamilt",
  },
  {
    Id: "Task 15",
    Title: "Task - 29020",
    Status: "Close",
    Summary: "Analyze grid control.",
    Type: "Story",
    Priority: "High",
    Tags: "Analyze",
    Estimate: 2.5,
    Assignee: "Margaret hamilt",
    RankId: 5,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-margaret-hamilt",
  },
  {
    Id: "Task 16",
    Title: "Task - 29021",
    Status: "Close",
    Summary: "Stored procedure for initial data binding of the grid.",
    Type: "Others",
    Priority: "Critical",
    Tags: "Databinding",
    Estimate: 1.5,
    Assignee: "Steven walker",
    RankId: 6,
    Color: "#1F88E5",
    ClassName: "e-others, e-release, e-steven-walker",
  },
  {
    Id: "Task 17",
    Title: "Task - 29022",
    Status: "Close",
    Summary: "Analyze stored procedures.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Procedures",
    Estimate: 5.5,
    Assignee: "Janet Leverling",
    RankId: 7,
    Color: "#02897B",
    ClassName: "e-story, e-release, e-janet-leverling",
  },
  {
    Id: "Task 18",
    Title: "Task - 29023",
    Status: "Validate",
    Summary: "Validate editing issues.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Editing",
    Estimate: 1,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-critical, e-nancy-davloio",
  },
  {
    Id: "Task 19",
    Title: "Task - 29024",
    Status: "Review",
    Summary: "Test editing functionality.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Editing,Test",
    Estimate: 0.5,
    Assignee: "Nancy Davloio",
    RankId: 5,
    Color: "#02897B",
    ClassName: "e-story, e-normal, e-nancy-davloio",
  },
  {
    Id: "Task 20",
    Title: "Task - 29025",
    Status: "Open",
    Summary: "Enhance editing functionality.",
    Type: "Improvement",
    Priority: "Low",
    Tags: "Editing",
    Estimate: 3.5,
    Assignee: "Andrew Fuller",
    RankId: 5,
    Color: "#673AB8",
    ClassName: "e-improvement, e-low, e-andrew-fuller",
  },
  {
    Id: "Task 21",
    Title: "Task - 29026",
    Status: "InProgress",
    Summary: "Improve the performance of the editing functionality.",
    Type: "Epic",
    Priority: "High",
    Tags: "Performance",
    Estimate: 6,
    Assignee: "Nancy Davloio",
    RankId: 5,
    Color: "#e91e64",
    ClassName: "e-epic, e-high, e-nancy-davloio",
  },
  {
    Id: "Task 22",
    Title: "Task - 29027",
    Status: "Open",
    Summary: "Arrange web meeting with the customer to show editing demo.",
    Type: "Others",
    Priority: "High",
    Tags: "Meeting,Editing",
    Estimate: 5.5,
    Assignee: "Steven walker",
    RankId: 6,
    Color: "#1F88E5",
    ClassName: "e-others, e-high, e-steven-walker",
  },
  {
    Id: "Task 23",
    Title: "Task - 29029",
    Status: "Review",
    Summary: "Fix the editing issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Editing,Fix",
    Estimate: "3.5",
    Assignee: "Janet Leverling",
    RankId: 6,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-janet-leverling",
  },
  {
    Id: "Task 24",
    Title: "Task - 29030",
    Status: "Testing",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-critical, e-steven-walker",
  },
  {
    Id: "Task 25",
    Title: "Task - 29031",
    Status: "Testing",
    Summary: "Fix the issues reported in Safari browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Fix,Safari",
    Estimate: 1.5,
    Assignee: "Nancy Davloio",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-nancy-davloio",
  },
];
