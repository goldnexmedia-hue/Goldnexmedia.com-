const posts = [
  {
    slug: "why-handoffs-kill-campaigns",
    title: "Why handoffs kill campaigns before they launch",
    date: "June 12, 2026",
    excerpt:
      "Every time a brief moves from one team to another, it loses a little of its original signal. Here's what that actually costs in performance.",
  },
  {
    slug: "attribution-isnt-the-problem",
    title: "Attribution isn't the problem. Fragmented teams are.",
    date: "May 28, 2026",
    excerpt:
      "Most brands chase a better attribution model when the real fix is putting strategy and data in the same room from the start.",
  },
  {
    slug: "the-11-day-campaign",
    title: "How we build a full campaign in 11 days",
    date: "May 6, 2026",
    excerpt:
      "A breakdown of the converged process that takes a brand from positioning to live media in under two weeks.",
  },
];

export const metadata = {
  title: "Journal — GoldNexMidea",
  description: "Notes on strategy, content, media, and data from the GoldNexMidea team.",
};

export default function Blog() {
  return (
    <div className="container-page py-20">
      <p className="eyebrow mb-4">Journal</p>
      <h1 className="font-display text-4xl md:text-5xl text-cream max-w-2xl">
        Notes from the room where the four disciplines meet.
      </h1>

      <div className="mt-16 hairline">
        {posts.map((p) => (
          <article key={p.slug} className="hairline py-10 grid md:grid-cols-12 gap-6">
            <p className="md:col-span-3 text-sm text-slate">{p.date}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-2xl text-cream mb-3">{p.title}</h2>
              <p className="text-slate text-sm leading-relaxed max-w-xl">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
