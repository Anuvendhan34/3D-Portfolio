import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  c,
  cpp,
  java,
  python
} from '../assets'

// ✅ Import company logo
import Tekisky from "../assets/company/ether.png";

// ✅ Import project images
import project1 from "../assets/pro1.png";
import project2 from "../assets/projt2.png";
import project3 from "../assets/DijkstraAlgorithm.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Ether Services",
    company_name: "Deep Learning Intern",
    icon: Tekisky,
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Gained hands-on experience with Neural Networks, CNNs, RNNs, and GANs, applying these concepts to projects such as object detection using YOLO and sentiment analysis with LSTMs. Developed skills in data preprocessing and optimizing AI models for real-world deployment."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I participate in CodeChef contests to improve my competitive programming skills and rankings.",
    name: "CodeChef",
    username: "anuvendhan",
    link: "https://www.codechef.com/users/anuvendhan",
    image: "src/assets/tech/codechef.png",
  },
  {
    testimonial:
      "LeetCode helps me sharpen my problem-solving skills with algorithmic challenges and company-specific questions.",
    name: "LeetCode",
    username: "anuvendhan",
    platform: "LeetCode ID: pzfa3ZWE0n",
    link: "https://leetcode.com/pzfa3ZWE0n/",
    image: "src/assets/tech/leetcode.png",
  },
  {
    testimonial:
      "Codolio allows me to build and showcase my portfolio, highlighting my coding skills and projects interactively.",
    name: "Codolio",
    username: "anuvendhan",
    link: "https://codolio.com/profile/Anuvendhan",
    image: "src/assets/tech/codolio.jpeg",
  },
];

const projects = [
  {
    name: "ImageHide---Visual-Steganography-Application",
    description:
      "ImageHide is a visual steganography application that allows users to hide secret messages or data within an image file. Using advanced algorithms, the application embeds text or files into the least significant bits of an image, making it invisible to the naked eye while maintaining the image’s visual appearance.",
    tags: [],
    image: project1,
    source_code_link: "https://github.com/Anuvendhan34/ImageHide---Visual-Steganography-Application",
  },
  {
    name: "VoiceBoard---Interactive-Whiteboard-with-Text-to-Speech",
    description:
      "VoiceBoard is an interactive whiteboard application that integrates text-to-speech functionality, allowing users to collaborate and communicate in real-time. It enables users to draw, write, and annotate on a shared digital canvas while the content is read aloud through text-to-speech.",
    tags: [],
    image: project2,
    source_code_link: "https://github.com/Anuvendhan34/VoiceBoard---Interactive-Whiteboard-with-Text-to-Speech",
  },
  {
    name: "Dijkstra's Algorithm Random Graph Visualizer",
    description:
      "PathFinder Visualization is an interactive tool that demonstrates how Dijkstra's Algorithm works to find the shortest path in a weighted graph. This project is designed to provide an intuitive and visual understanding of the algorithm, making it easier to grasp its core concepts and functionality.",
    tags: [],
    image: project3,
    source_code_link: "https://github.com/Anuvendhan34/PathFinder-Visualization-for-Finding-the-Shortest-Path-Using-Dijkstra-s-Algorithm",
  },
];

export { services, technologies, experiences, testimonials, projects };
