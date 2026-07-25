import { eventContent } from "../../content/event";
export function SiteFooter() { return <footer className="site-footer"><div className="footer-brand">ENCONTRO DE <b>EMPRESÁRIOS</b></div><p>{eventContent.dateLabel} · {eventContent.city}</p></footer>; }
