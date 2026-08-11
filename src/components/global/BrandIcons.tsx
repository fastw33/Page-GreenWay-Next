import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  ClipboardCheck,
  Factory,
  FileImage,
  Mail,
  Menu,
  MapPinned,
  MessageSquareText,
  Microscope,
  PackageCheck,
  Phone,
  Recycle,
  Route,
  Send,
  Truck,
  Warehouse,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export type BrandIconName =
  | "alloy"
  | "arrowRight"
  | "check"
  | "company"
  | "evaluate"
  | "logistics"
  | "mail"
  | "menu"
  | "market"
  | "map"
  | "material"
  | "message"
  | "phone"
  | "process"
  | "recovery"
  | "send"
  | "solutions"
  | "upload"
  | "warehouse"
  | "x";

type BrandIconProps = LucideProps & {
  name: BrandIconName;
};

const icons: Record<BrandIconName, LucideIcon> = {
  alloy: PackageCheck,
  arrowRight: ArrowRight,
  check: ClipboardCheck,
  company: Factory,
  evaluate: Microscope,
  logistics: Truck,
  mail: Mail,
  menu: Menu,
  market: BarChart3,
  map: MapPinned,
  material: Boxes,
  message: MessageSquareText,
  phone: Phone,
  process: Route,
  recovery: Recycle,
  send: Send,
  solutions: Building2,
  upload: FileImage,
  warehouse: Warehouse,
  x: X,
};

export function BrandIcon({
  className,
  name,
  strokeWidth = 1.7,
  ...props
}: BrandIconProps) {
  const Icon = icons[name];

  return (
    <Icon
      aria-hidden="true"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
