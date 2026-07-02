import Link from "next/link";
import { ArrowUpRight, Sparkles, Target, Megaphone, LineChart } from "lucide-react";
import NexusMark from "@/components/NexusMark";

const pillars = [
  {
    icon: Target,
    title: "Strategy",
    copy: "Positioning and a media plan built on where your category is actually moving, not where it was last year.",
  },
  {
    icon: Sparkles,
    title: "Content",
    copy: "Creative that earns attention on its own, then carries your point of view across every channel it touches.",
  },
  {
    icon: Megaphone,
    title: "Media",
    copy: "Paid and organic distribution run as one system, so budget follows what's actually converting.",
  },
  {
    icon: LineChart,
    title: "Data",
    copy: "Reporting that tells you what to do next, not a dashboard you have to translate yourself.",
  },
];

const proof = [
  { stat: "3.4x", label: "Average lift in qualified pipeline" },
  { stat: "48", label: "Brands actively under management" },
  { stat: "11", label: "Days, average campaign build time" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-16 md:pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow mb-6">Marketing, converged</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-cream">
            Four disciplines.
            <br />
            <em className="text-gold not-italic font-display italic">One</em> signal.
          </h1>
          <p className="text-slate text-lg mt-6 max-w-md leading-relaxed">
            Most agencies run strategy, content, media, and data as separate
            departments handing off a brief. GoldNexMidea runs them as a
            single converging system, built around your brand as the one
            bright outcome.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-fade text-ink font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Start a project <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-line text-cream rounded-sm hover:border-gold transition-colors"
            >
              See the work
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <NexusMark className="w-full max-w-md" />
        </div>
      </section>

      {/* Proof strip */}
      <section className="hairline">
        <div className="container-page py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {proof.map((p) => (
            <div key={p.label}>
              <p className="font-display text-3xl text-gold">{p.stat}</p>
              <p className="text-sm text-slate mt-1">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-24">
        <p className="eyebrow mb-4">How we work</p>
        <h2 className="font-display text-3xl md:text-4xl text-cream max-w-xl mb-14">
          Four nodes, run by one team, pointed at one outcome.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-ink p-8">
                <Icon className="text-gold mb-5" size={26} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-cream mb-2">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{p.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA band */}
      <section className="container-page pb-28">
        <div className="border border-line rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-cream max-w-lg">
              Tell us where the brand needs to be a year from now.
            </h2>
            <p className="text-slate mt-3 max-w-md">
              We'll show you the converged plan to get there in a 30-minute call.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-fade text-ink font-semibold rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book the call <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
