import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SproutIcon(props: IconProps) {
  return <IconBase {...props}><path d="M12 21v-9"/><path d="M12 12c-4.7 0-7.5-2.7-7.5-7.5 4.8 0 7.5 2.8 7.5 7.5Z"/><path d="M12 16c0-4.6 2.7-7.2 7.2-7.2 0 4.5-2.6 7.2-7.2 7.2Z"/></IconBase>;
}
export function FarmerIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 9h16"/><path d="M7 9V6.5A5 5 0 0 1 17 6.5V9"/><circle cx="12" cy="13" r="3.3"/><path d="M5.5 21c.8-3.1 3.1-4.7 6.5-4.7s5.7 1.6 6.5 4.7"/></IconBase>;
}
export function BasketIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 10h16l-1.5 10h-13L4 10Z"/><path d="M8 10 12 4l4 6"/><path d="M8 14v2M12 14v2M16 14v2"/></IconBase>;
}
export function DropletIcon(props: IconProps) {
  return <IconBase {...props}><path d="M12 3S6.5 9.2 6.5 14a5.5 5.5 0 0 0 11 0C17.5 9.2 12 3 12 3Z"/><path d="M9.5 15.5c.5 1.2 1.4 1.8 2.7 1.8"/></IconBase>;
}
export function MillIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/><circle cx="12" cy="12" r="8"/></IconBase>;
}
export function InspectIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.4 4.6 4.6"/><path d="m8 10.5 1.6 1.6 3.4-3.7"/></IconBase>;
}
export function PackageIcon(props: IconProps) {
  return <IconBase {...props}><path d="m4 7.5 8-4 8 4v9l-8 4-8-4v-9Z"/><path d="m4 7.5 8 4 8-4M12 11.5v9"/><path d="m8 5.5 8 4"/></IconBase>;
}
export function HomeIcon(props: IconProps) {
  return <IconBase {...props}><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10"/><path d="M9 21v-7h6v7"/></IconBase>;
}
export function FamilyIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="8" cy="8" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M3 20c.5-4 2.4-6 5.5-6s5 2 5.5 6"/><path d="M13.5 15c1-.8 2-1.2 3.3-1.2 2.4 0 3.8 1.6 4.2 4.7"/></IconBase>;
}
export function SparkIcon(props: IconProps) {
  return <IconBase {...props}><path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></IconBase>;
}
export function HeartIcon(props: IconProps) {
  return <IconBase {...props}><path d="M20.8 5.8c-2-2-5.2-2-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8a5.1 5.1 0 0 0 0-7.2Z"/></IconBase>;
}
export function TrustIcon(props: IconProps) {
  return <IconBase {...props}><path d="M12 3 5 6v5c0 4.8 2.9 8.2 7 10 4.1-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></IconBase>;
}
export function GlobeIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"/></IconBase>;
}
export function BulbIcon(props: IconProps) {
  return <IconBase {...props}><path d="M9 18h6M10 22h4"/><path d="M8.4 15.5A6 6 0 1 1 15.6 15.5c-.8.6-1.1 1.2-1.1 2H9.5c0-.8-.3-1.4-1.1-2Z"/></IconBase>;
}
export function CycleIcon(props: IconProps) {
  return <IconBase {...props}><path d="M20 7V3l-1.7 1.7A8 8 0 0 0 5 7"/><path d="M4 17v4l1.7-1.7A8 8 0 0 0 19 17"/><path d="M20 3h-4M4 21h4"/></IconBase>;
}

export function SortIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 6h16M7 12h10M10 18h4"/><path d="m17 4 3 2-3 2"/></IconBase>;
}
export function BowlIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 10h16c0 5-3.3 9-8 9s-8-4-8-9Z"/><path d="M7 22h10M8 7c0-1 1-2 2-2M13 7c0-1 1-2 2-2"/></IconBase>;
}
