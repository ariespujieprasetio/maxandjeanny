import Link from "next/link"; import type {ReactNode} from "react"; import {ArrowUpRight} from "lucide-react";
export function Button({href,children,variant="primary"}:{href:string;children:ReactNode;variant?:"primary"|"secondary"|"light"}){return <Link href={href} className={`button button-${variant}`}>{children}<ArrowUpRight size={17}/></Link>}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow"><span/>{children}</p>}
export function SectionHeading({eyebrow,title,copy}:{eyebrow:string;title:string;copy?:string}){return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function PageHero({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}){return <section className="page-hero"><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p></div></section>}
