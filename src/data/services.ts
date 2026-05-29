import interior from "@/assets/svc-interior.jpg";
import wash from "@/assets/svc-wash.jpg";
import detailing from "@/assets/svc-detailing.jpg";
import seats from "@/assets/svc-seats.jpg";
import polish from "@/assets/svc-polish.jpg";
import headlight from "@/assets/svc-headlight.jpg";
import accessories from "@/assets/svc-accessories.jpg";
import audio from "@/assets/svc-audio.jpg";
import tint from "@/assets/svc-tint.jpg";

export type Service = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

export const services: Service[] = [
  { title: "Car Interior Cleaning", desc: "Deep vacuum, dashboard, fabric & leather treatment.", price: "₹799", image: interior },
  { title: "Car Water Wash", desc: "Foam wash with pH-balanced shampoo and microfiber dry.", price: "₹299", image: wash },
  { title: "Car Detailing", desc: "Full exterior + interior restoration. Your car is an investment — we make sure it looks like one.", price: "₹3,499", image: detailing },
  { title: "Seat Cover & Floor Mat", desc: "Premium custom-fit covers and floor mat installations. Say goodbye to stained seats and worn-out floors — the perfect fit for your car, the perfect vibe for your drive.", price: "₹2,999", image: seats },
  { title: "Car Polishing", desc: "Machine cut & polish for showroom-grade gloss.", price: "₹1,499", image: polish },
  { title: "Headlight Detailing", desc: "Yellow haze removal, restoration & clarity coating.", price: "₹599", image: headlight },
  { title: "Car Accessories", desc: "Alloys, body kits, lights, steering & interior trims.", price: "From ₹199", image: accessories },
  { title: "Audio & Video System", desc: "Touchscreen, speakers, subwoofers, reverse cameras.", price: "From ₹3,999", image: audio },
  { title: "Sun Cooling Paper", desc: "Heat-rejection window film with UV protection.", price: "₹2,499", image: tint },
];
