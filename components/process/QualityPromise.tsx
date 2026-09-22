import { StaggerGroup, StaggerItem } from "../animations/Stagger";
import {
  InspectIcon, SproutIcon, DropletIcon, PackageIcon, TrustIcon, CycleIcon,
} from "../icons/SoilvaIcons";

const items = [
  [SproutIcon, "Defined raw-spice selection"],
  [DropletIcon, "Cleaning before grinding"],
  [InspectIcon, "Batch-level quality review"],
  [PackageIcon, "Suitable food-grade packaging"],
  [TrustIcon, "Transparent product information"],
  [CycleIcon, "Continuous process improvement"],
] as const;

export default function QualityPromise() {
  return (
    <section className="quality-promise">
      <StaggerGroup className="quality-heading">
        <StaggerItem><span className="about-kicker">Our process promise</span></StaggerItem>
        <StaggerItem><h2>Quality is built through repeatable steps.</h2></StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="quality-grid" stagger={0.08}>
        {items.map(([Icon, text]) => (
          <StaggerItem key={text}>
            <article>
              <Icon />
              <span>{text}</span>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="process-disclaimer">
        Process descriptions explain Soilva’s intended manufacturing approach.
        Final claims, specifications and certifications must match verified
        production records, laboratory reports and approved product labels.
      </p>
    </section>
  );
}
