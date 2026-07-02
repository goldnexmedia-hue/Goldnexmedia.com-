import { Target, Sparkles, Megaphone, LineChart, Check } from "lucide-react";

export const metadata = {
  title: "Services — GoldNexMidea",
  description: "Strategy, content, media, and data services built to converge into one marketing system.",
};

const services = [
  {
    icon: Target,
    title: "Strategy",
    summary: "The plan everything else points at.",
    items: [
      "Category and competitor mapping",
      "Positioning and messaging architecture",
      "Channel and budget planning",
      "Quarterly roadmap and OKRs",
    ],
  },
  {
    icon: Sparkles,
    title: "Content",
    summary: "Creative that carries the point of view.",
    items: [
      "Brand and campaign creative",
      "Short-form and social video",
      "Copywriting across every channel",
      "Photography and art direction",
    ],
  },
  {
    icon: Megaphone,
    title: "Media",
    summary: "Distribution run as one system.",
    items: [
      "Paid social and search management",
      "Organic and influencer programs",
      "Marketplace and retail media",
      "Budget reallocation in real time",
    ],
  },
  {
    icon: LineChart,
    title: "Data",
    summary: "Reporting that tells you what's next.",
    items: [
      "Attribution and dashboarding",
      "Lifecycle and CRM analysis",
      "Creative and channel testing",
      "Monthly performance reviews",
    ],
  },
];

export default function Services() {
  return (
    <div className="container-page py-20">
      <p className="eyebrow mb-4">Services</p>
      <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl">
        Four disciplines you can hire separately. We've never seen a reason to.
      </h1>
      <p className="text-slate mt-6 max-w-xl leading-relaxed">
        Every engagement starts with all four nodes in the room. You can scope
        a single discipline, but the plan is always built with the full
        picture, so nothing you ship works against something else you're running.
      </p>

      <div className="mt-20 space-y-px bg-line">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-ink py-12 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <Icon className="text-gold mb-4" size={28} strokeWidth={1.5} />
                <h2 className="font-display text-2xl text-cream">{s.title}</h2>
                <p className="text-slate text-sm mt-2">{s.summary}</p>
              </div>
              <div className="md:col-span-8">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
