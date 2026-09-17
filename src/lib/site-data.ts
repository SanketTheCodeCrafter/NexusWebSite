import hero from "@/assets/nexus-cnc-hero.jpg";
import press from "@/assets/nexus-press-shop.jpg";
import components from "@/assets/nexus-components.jpg";
import quality from "@/assets/nexus-quality.jpg";

export const media = { hero, press, components, quality };

export const services = [
  { title: "Press Shop", desc: "High-repeatability sheet-metal forming for structural and production components.", image: press },
  { title: "CNC Turning", desc: "Precision turning for shafts, bushes, flanges and rotational parts.", image: hero },
  { title: "VMC Machining", desc: "Multi-axis milling of complex geometries to demanding tolerances.", image: hero },
  { title: "Fabrication & Welding", desc: "Robust fabricated assemblies with controlled welding processes.", image: quality },
  { title: "Component Manufacturing", desc: "End-to-end production of engineered automotive metal parts.", image: components },
  { title: "Assembly & Inspection", desc: "Validated assemblies supported by dimensional and visual inspection.", image: quality },
] as const;

export const products = [
  { name: "Precision Drive Shaft", category: "Machined", desc: "Close-tolerance transmission component.", image: components },
  { name: "Flanged Housing", category: "Machined", desc: "Rigid CNC-machined bearing enclosure.", image: components },
  { name: "Structural Bracket", category: "Pressed", desc: "Production-ready formed steel bracket.", image: press },
  { name: "Chassis Assembly", category: "Fabricated", desc: "Welded load-bearing automotive assembly.", image: quality },
  { name: "Precision Gear Blank", category: "Machined", desc: "Prepared blank for critical powertrain use.", image: hero },
  { name: "Mounting Reinforcement", category: "Pressed", desc: "Consistent high-volume reinforcement part.", image: press },
] as const;

export const gallery = [
  { title: "CNC Production Cell", category: "Machines", image: hero },
  { title: "Automated Press Line", category: "Facility", image: press },
  { title: "Component Portfolio", category: "Components", image: components },
  { title: "In-process Inspection", category: "Processes", image: quality },
  { title: "Five-axis Machining", category: "Processes", image: hero },
  { title: "Robotic Forming", category: "Machines", image: press },
] as const;

export const posts = [
  { title: "Why process capability matters in automotive production", category: "Quality", date: "12 Sep 2026", image: quality },
  { title: "Designing machined parts for repeatable performance", category: "Engineering", date: "28 Aug 2026", image: hero },
  { title: "From sheet metal to dependable structural assemblies", category: "Manufacturing", date: "06 Aug 2026", image: press },
] as const;