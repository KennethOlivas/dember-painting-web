import BuildingShield from "@/components/Icons/Services/BuildingShield";
import House from "@/components/Icons/Services/House";
import KitchenRoom from "@/components/Icons/Services/KitchenRoom";
import PaintRoller from "@/components/Icons/Services/PaintRoller";
import ToolBox from "@/components/Icons/Services/ToolBox";

export type Service = {
  id?: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const Services: Service[] = [
  {
    id: 1,
    icon: <PaintRoller />,
    title: "Interior Painting",
    description: "Our interior painting services are designed to breathe new life into your living spaces. From cozy bedrooms to spacious living rooms, our skilled team of painters will transform your interior with precision and care. Choose from an array of colors to suit your unique style",
  },
  {
    id: 2,
    icon: <House />,
    title: "Exterior Painting",
    description: "Boost your home's curb appeal and protect it from the elements with our exterior painting expertise.We use top- quality paints and techniques to give your property a stunning, long - lasting finish that stands out in your neighborhood."
  },
  {
    id: 3,
    icon: <BuildingShield />,
    title: "Protective Concrete Coatings",
    description: "Extend the life of your concrete surfaces with our protective coatings. Whether it's your garage floor or your outdoor patio, our coatings provide durability and resistance while adding a touch of elegance."
  },
  {
    id: 4,
    icon: <BuildingShield />,
    title: "Fence Painting",
    description: "Give your property the finishing touch it deserves with our fence painting service. We turn worn-out fences into eye-catching boundaries that enhance your property's overall appeal."
  },
  {
    id: 5,
    icon: <KitchenRoom />,
    title: "Kitchen Renovations",
    description: "Your kitchen is where memories are made. Let us make your kitchen dreams come true with our renovation services. From new cabinets to fresh paint, we'll transform your kitchen into a space you'll love to spend time in."
  },
  {
    id: 6,
    icon: <ToolBox />,
    title: "Repairs",
    description: " No matter the size of the task, our repair services are here to keep your property in top shape. We handle everything from minor touch-ups to extensive repairs with the utmost professionalism."
  }
]

export default Services;
