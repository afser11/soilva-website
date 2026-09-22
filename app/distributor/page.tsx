import type { Metadata } from "next";
import Header from "../../components/Header";
import DistributorPageContent from "../../components/distributor/DistributorPageContent";
export const metadata:Metadata={title:"Become a Soilva Distributor | Distribution Partnership",description:"Apply to become a Soilva spice distributor and share your market, experience and retail coverage."};
export default function DistributorPage(){return <div className="site-shell"><Header/><main className="distributor-page"><DistributorPageContent/></main></div>}
