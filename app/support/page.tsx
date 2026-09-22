import type { Metadata } from "next";
import Header from "../../components/Header";
import SupportCenter from "../../components/support/SupportCenter";

export const metadata: Metadata = { title: "Support Centre | Soilva", description: "Access Soilva FAQs, policies, contact support and distributor information." };
export default function SupportPage(){ return <div className="site-shell"><Header/><main className="support-page"><SupportCenter/></main></div>; }
