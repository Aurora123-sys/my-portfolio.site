import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-cream-100 pb-8 pt-20">
      <div className="container">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="mb-3 text-3xl font-display">
              Ravi <span className="italic-display">Tsunenori</span>
            </h3>
            <p className="max-w-xs text-ink-500">
              Independent full-stack & AI systems engineer based in Tokyo. Available for select engagements.
            </p>
          </div>
          <FooterCol title="Navigate">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </FooterCol>
          <FooterCol title="Reach">
            <li><a href="mailto:hello@ravi.dev">hello@ravi.dev</a></li>
            <li><a href="#">linkedin.com/in/ravi-tsunenori</a></li>
            <li><a href="#">github.com/ravi-tsunenori</a></li>
            <li><a href="#">upwork.com — Top-Rated Plus</a></li>
          </FooterCol>
          <FooterCol title="Studio">
            <li>Tokyo, Japan 🇯🇵</li>
            <li>Working in JST · UTC+9</li>
            <li>EN / 日本語</li>
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink-400">
          <span>© {year} Ravi Yoshitomo Tsunenori — All rights reserved.</span>
          <span className="font-mono">Crafted in Tokyo · 東京</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink-400">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5 text-ink-500">{children}</ul>
    </div>
  );
}
