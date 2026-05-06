type Value = { title: string; body: string };

const values: Value[] = [
  {
    title: "Show up when I say I will.",
    body: "Every day. With the materials I said I'd bring. Communicating before, during, and after.",
  },
  {
    title: "Quote what I can deliver.",
    body: "Realistic timelines. Honest scope. No “discoveries” halfway through that double the price.",
  },
  {
    title: "Finish like it's my own house.",
    body: "The trim is the tell. So is the caulk line. I won't sign off on work I wouldn't accept myself.",
  },
];

export function AboutValues() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:gap-8 lg:mt-20 lg:grid-cols-3">
      {values.map((v) => (
        <div key={v.title} className="border-t-2 border-ink pt-6">
          <h4 className="font-display text-[22px] font-medium leading-tight text-ink">
            {v.title}
          </h4>
          <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-soft">{v.body}</p>
        </div>
      ))}
    </div>
  );
}
