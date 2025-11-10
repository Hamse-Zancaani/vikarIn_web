import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  icon: string;
  background: string;
 
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Qualified workers",
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-warning/20",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Flexible staffing hours",
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Fixed rate per hour",
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning/20",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Wide selection of workers",
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
 
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/portfolio-icon-1.svg",
    title: "Responsibility",
  },
  {
    image: "/images/portfolio/portfolio-icon-2.svg",
    title: "Flexibility",
  },
  {
    image: "/images/portfolio/portfolio-icon-3.svg",
    title: "Competence",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Preparation of a schedule" },
  { title: "Preparation of a job posting" },
  { title: "selection of candidates" },
  { title: "Job interviews" },
  { title: "Presentation of candidates" },
  { title: "Follow-up and evaluation" },
 
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/peak-icon-1.svg",
    title: "24/7 Support",
    text: "We are here to help you anytime, anywhere",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/peak-icon-2.svg",
    title: "Community",
    text: " join our vikarin of temporary workers.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/peak-icon-3.svg",
    title: "Academy",
    text: "Learn and take course from vikarin.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
