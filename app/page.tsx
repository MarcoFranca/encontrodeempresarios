import { FAQSection } from "../components/sections/FAQSection";
import { HeroSection } from "../components/sections/HeroSection";
import { BeliefBreakSection } from "../components/sections/BeliefBreakSection";
import { MechanismSection } from "../components/sections/MechanismSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { AudienceSection } from "../components/sections/AudienceSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { HostSection } from "../components/sections/HostSection";
import { TicketsSection } from "../components/sections/TicketsSection";
import { ObjectionsSection } from "../components/sections/ObjectionsSection";
import { VenueSection } from "../components/sections/VenueSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { DesktopConversionDock } from "../components/conversion/DesktopConversionDock";
import { ScrollProgress } from "../components/conversion/ScrollProgress";
import { MobileCta } from "../components/layout/MobileCta";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { eventContent } from "../content/event";

export default function Home() { const schema = { "@context": "https://schema.org", "@type": "Event", name: eventContent.name, startDate: "2026-08-21T10:00:00-03:00", endDate: "2026-08-21T18:00:00-03:00", location: { "@type": "Place", name: eventContent.venue.name, address: eventContent.venue.address } }; return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ScrollProgress/><SiteHeader /><main><HeroSection/><BeliefBreakSection/><MechanismSection/><ExperienceSection/><AudienceSection/><SpeakersSection/><HostSection/><TicketsSection/><ObjectionsSection/><VenueSection/><FAQSection/><FinalCtaSection/></main><SiteFooter/><DesktopConversionDock/><MobileCta/></>; }
