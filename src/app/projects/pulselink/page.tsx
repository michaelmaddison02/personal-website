import SiteHeaderNav from "@/components/siteHeaderNav"
import { David_Libre } from "next/font/google";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col p-4">
            <SiteHeaderNav />
        </div>
    );
  }