"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Crown, Globe2, X } from "lucide-react";

const navigation = [
 ["The collection", "/products"], ["Our story", "/about"], ["The spice journey", "/#journey"],
 ["Quality & care", "/quality"], ["Business solutions", "/export"], ["The journal", "/blog"],
 ["Find your spice", "/quiz"], ["Let's talk", "/contact"],
];
function subscribeToScroll(update: () => void) { window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }
function hasScrolled() { return window.scrollY > 80; }
function initialScroll() { return false; }
export function SiteHeader() {
 const scrolled = useSyncExternalStore(subscribeToScroll, hasScrolled, initialScroll);
 const path=usePathname(); const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(!open)return;dialog.current?.showModal();const old=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=old;};},[open]);
 function close(){dialog.current?.close();setOpen(false);}
 const brand=<><Crown aria-hidden="true"/><span>SPICE<br/>MONARCH</span><small>INDIAN ORIGINS</small></>;
 return <header className={`monarch-header ${path==="/"?"over-hero":"over-paper"} ${scrolled?"is-scrolled":""}`}>
 <Link href="/export" aria-label="India to the world: business solutions" className="header-pill origin-pill"><Globe2 size={16}/><span>INDIA → WORLD</span></Link>
 <Link href="/" className="monarch-mark" aria-label="Spice Monarch home">{brand}</Link>
 <button type="button" className="header-pill menu-trigger" onClick={()=>setOpen(true)} aria-expanded={open} aria-controls="monarch-menu">MENU <span className="menu-lines" aria-hidden="true"><i/><i/></span></button>
 {open&&<dialog ref={dialog} id="monarch-menu" className="monarch-menu" aria-label="Main navigation" onClose={()=>setOpen(false)}>
 <div className="menu-top"><span className="menu-origin">INDIA. IN EVERY DETAIL.</span><Link href="/" onClick={close} className="monarch-mark" aria-label="Spice Monarch home">{brand}</Link><button className="header-pill" onClick={close} type="button" aria-label="Close menu">CLOSE <X size={16}/></button></div>
 <nav aria-label="Main navigation">{navigation.map(([label,href],i)=><Link key={href} href={href} onClick={close} aria-current={path===href || (href!=="/#journey" && path.startsWith(href+"/"))?"page":undefined}><span className="menu-number">0{i+1}</span><span>{label}</span><ArrowUpRight aria-hidden="true"/></Link>)}</nav>
 <div className="menu-bottom"><p>A world of flavour, from the heart of India.</p><div className="flex items-center gap-4"><Link href="/faq" onClick={close}>FAQs <ArrowRight size={14} className="inline"/></Link></div></div>
 </dialog>}
 </header>;
}


