"use client";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="relative mt-20 border-t border-line bg-paper-100 pt-20 pb-10">
      <div className="container">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="mb-3 font-display text-3xl text-ink-900">
              ravi<span className="text-cobalt">.</span>tsunenori
            </h3>
            <p className="max-w-sm text-ink-500">{t("footer.about")}</p>
            <div className="mt-5">
              <span className="badge-live">{t("common.openToWork")}</span>
            </div>
          </div>
          <FooterCol title={t("footer.navigate")}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{t(l.labelKey)}</Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title={t("footer.studio")}>
            <li>Tokyo, Japan 🇯🇵</li>
            <li>{t("footer.timezone")}</li>
            <li>{t("footer.languages")}</li>
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
          <span>© {year} · {t("footer.rights")}</span>
          <span>{t("footer.signature")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-400">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5 text-ink-600">{children}</ul>
    </div>
  );
}
