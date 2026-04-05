import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "./_components/faq-accordion";
import { HeaderNav } from "./_components/header-nav";
import { LandingCtaModal } from "./_components/landing-cta-modal";
import { ParallaxButton } from "./_components/parallax-button";
import { ParallaxLayer } from "./_components/parallax-layer";
import { PricingPlanShell } from "./_components/pricing-plan-shell";
import { Reveal } from "./_components/reveal";
import { TestimonialsCarousel } from "./_components/testimonials-carousel";

const navItems = [
  { label: "Garanties", href: "#guarantees" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why DraftOut", href: "#why-draftout" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const logoSrc = "/brand/draftout-logo.svg";
const heroVisualSrc = "/figma/upscaled/hero-orb-2x.png";
const heroCardSrc = "/figma/6953afeeffc5cec3cf418261ebc79f9b0036e8b6.png";
const headingArrowSrc = "/figma/bcfd4ac4a5ae48fde6900dc5a912e516db64ec53.svg";
const trustShieldSrc = "/figma/a33abe492555f26fa6353a8390dc85e215688db7.svg";
const ctaArrowSrc = "/figma/c78b8f35a71b035cf1409b1c41410dd4135a629e.svg";
const finalCtaBgSrc = "/figma/0344db8a7b172b6ace1a5ad32cc4d5195b38ac2e.png";

const heroFeatures = [
  {
    label: "A-grade academic quality",
    icon: "/figma/d7ce08301bd35d15bb1a7a5ae6be63dc5b63e915.png",
  },
  {
    label: "Full Prep Pack included",
    icon: "/figma/5bf6cad3dd9cbd7cae630d940232885c7fdb8bdf.png",
  },
  {
    label: "Reviewed by academic expert",
    icon: "/figma/0f8224e2c7605bda004a7fa2065fc0bae50b7031.png",
  },
  {
    label: "You keep full authorship",
    icon: "/figma/e37e50691ad9971575076bc846acd8ea0c46097e.png",
  },
];

const partnerLogos = [
  {
    src: "/figma/790f47e79255b0cd6d116302fd8febdd24e33e9f.png",
    alt: "Stanford",
    width: 180,
    height: 38,
  },
  {
    src: "/figma/777640321e29cfa69a6869839ef643f040ab3341.png",
    alt: "University of Cambridge",
    width: 126,
    height: 40,
  },
  {
    src: "/figma/67e1c79f2025204d81f5a906806a27ef252f392d.png",
    alt: "Berkeley",
    width: 128,
    height: 40,
  },
  {
    src: "/figma/1b72dbfd0c91c73d1b6eecc12d4b36279a3079d5.png",
    alt: "UCO",
    width: 45,
    height: 40,
  },
  {
    src: "/figma/7018031d71f33a97506cf5429d24d39cf4f47eba.png",
    alt: "University of Michigan",
    width: 180,
    height: 36,
  },
  {
    src: "/figma/e594a1586795d60074e80524be795d270e7b1f11.png",
    alt: "Universita Bocconi Milano",
    width: 114,
    height: 40,
  },
  {
    src: "/figma/24205e016e1f0d5d6f14133d6af8ae52abe7f9f9.png",
    alt: "London School of Economics and Political Science",
    width: 111,
    height: 40,
  },
];

const trustCards = [
  {
    src: "/figma/e5f00803d219a010061115a1cd0adcae4965390e.png",
    alt: "Expert review before delivery",
    title: "Expert review before delivery",
  },
  {
    src: "/figma/5e6707e30addf78a4d22fe9b67ba1b5aea65a25a.png",
    alt: "Academic standards guaranteed",
    title: "Academic standards guaranteed",
  },
  {
    src: "/figma/1460f2e528590ca9231698b90835866dfa0dd210.png",
    alt: "Matches your writing style",
    title: "Matches your writing style",
  },
];

const workflowSteps = [
  {
    number: "1",
    title: "Tell us what you need",
    description: "Topic, requirements, style example",
    time: "2 min",
    image: "/figma/9b8325a0f3852405d1651863d7260c4d32377670.png",
  },
  {
    number: "2",
    title: "DraftOut collaborate on your draft",
    description: "Research, writing and polishing",
    time: "25-29 min",
    image: "/figma/5443158f6068f144d96954c9e20eed90e7e39ae7.png",
  },
  {
    number: "3",
    title: "Expert review",
    description: "Your paper checked by real academic",
    time: "15-19 min",
    image: "/figma/52e310b3e6c38e387659fc79a95e699ff7b9e571.png",
  },
  {
    number: "4",
    title: "Your draft is ready",
    description: "Formatted paper, citations, sources, and research memo",
    time: "Already Ready",
    image: "/figma/5a3e185f7de0071dc91c8df2b2a46c7bd02f66c6.png",
  },
];

const packageFeatures = [
  "AI report by GPTZero",
  "All source PDFs",
  "Formatted paper with proper citations and sources",
  "Plag report by PlagAware",
  "Full Prep Pack (Summary, Q&A, exc.)",
];

const comparisonRows = [
  {
    label: "TIME",
    chatgpt: { ok: true, top: "Instantly" },
    services: { ok: false, top: "Days/weeks, deadline risk" },
    draftout: { ok: true, top: "25-29 minutes" },
  },
  {
    label: "AI DETECTORS",
    chatgpt: { ok: false, top: "Always flagged" },
    services: { ok: false, top: "No verification" },
    draftout: { ok: true, top: "Passes all detectors" },
  },
  {
    label: "SOURCES",
    chatgpt: { ok: false, top: "Fabricated citations" },
    services: { ok: false, top: "Generic/questionable" },
    draftout: { ok: true, top: "Verified academic PDFs" },
  },
  {
    label: "FACT CHECK",
    chatgpt: { ok: false, top: "Makes things up" },
    services: { ok: false, top: "Hit or miss quality" },
    draftout: { ok: true, top: "Expert fact-checked" },
  },
  {
    label: "DELIVERABLES",
    chatgpt: { ok: false, top: "Nothing included" },
    services: { ok: false, top: "Paper only" },
    draftout: { ok: true, top: "Q&A + synopsis + refs" },
  },
  {
    label: "PRICE",
    chatgpt: { ok: false, price: "$20", top: "Risky" },
    services: { ok: false, price: "$100", top: "Overpriced" },
    draftout: { ok: true, price: "$30", top: "Safe" },
  },
];

const pricingPlans = [
  {
    name: "Starter (2-Week)",
    drafts: "2 drafts",
    duration: "2 weeks",
    oldTotal: "$19.96",
    total: "$9.98",
    oldPerEssay: "$9.98",
    perEssay: "$4.99",
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Standard (4-Week)",
    drafts: "5 drafts",
    duration: "4 weeks",
    oldTotal: "$39.95",
    total: "$19.95",
    oldPerEssay: "$7.99",
    perEssay: "$3.99",
    cta: "Choose Standard",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Premium (6-Month)",
    drafts: "30 drafts",
    duration: "6 months",
    oldTotal: "$167.79",
    total: "$83.90",
    oldPerEssay: "$5.59",
    perEssay: "$2.80",
    cta: "Choose Premium",
    featured: false,
  },
];

const planFeatures = [
  "AI & Plagiarism-free",
  "Source PDFs",
  "Research memo + Q&A",
  "Detailed outline",
];

const figmaTestimonials = [
  {
    name: "Marvin McKinney",
    tag: "Success rate",
    rating: 4,
    quote:
      "I tested Draftout through multiple AI and plagiarism detectors, and it passed every check flawlessly. The text reads naturally, remains fully original, and meets all quality standards. Highly recommend for anyone who needs content that is both authentic and detector-proof.",
  },
  {
    name: "SARAH",
    tag: "Quality",
    rating: 5,
    quote:
      "The research memo and outline were incredibly helpful for my presentation. Everything was properly cited and the sources were all legitimate academic papers. Saved me weeks of work! The clarity and structure of the outline made it so much easier to organize my thoughts and create a strong argument. Plus, the final paper was perfectly formatted and ready for submission. I can't imagine how much more time I would have spent without this service!",
  },
  {
    name: "DAVID THOMPSON",
    tag: "Speed & Quality",
    rating: 5,
    quote:
      "Got my paper in under 10 minutes with perfect formatting. The fact-checking was thorough and I felt confident submitting it. Best investment for my semester!",
  },
  {
    name: "Emily Roberts",
    tag: "Efficiency & Reliability",
    rating: 5,
    quote:
      "I was really struggling to get my thesis done on time, but Draftout saved me! The AI-generated draft was a great start, and the human review made sure everything was polished and accurate. It passed all plagiarism checks, and I could tell it was high-quality work. The quick turnaround was a huge plus. I'll definitely be using this service again!",
  },
];

const testimonials = Array.from({ length: 3 }, (_, pageIndex) =>
  figmaTestimonials.map((testimonial, itemIndex) => ({
    id: `testimonial-${pageIndex + 1}-${itemIndex + 1}`,
    ...testimonial,
  })),
).flat();

const faqItems = [
  {
    question: "Is it legal to use this service?",
    answer:
      "Yes. DraftOut is designed as a study-support and drafting service. You receive a polished draft, sources, and prep materials that you can review, adapt, and submit in line with your institution's rules and your own academic responsibility.",
  },
  {
    question: "How do you guarantee 0% AI detection?",
    answer:
      "Each paper is written to read naturally and then reviewed by a human editor before delivery. DraftOut is built specifically to avoid generic AI patterns, and every order goes through additional checking before it reaches you.",
  },
  {
    question: "What if I need to ask additional questions about the paper?",
    answer:
      "Your package includes prep materials and a research memo to help you understand the arguments, sources, and structure. That makes it much easier to answer follow-up questions confidently.",
  },
  {
    question: "Can I provide my own writing style example?",
    answer:
      "Yes. You can share a previous sample or style reference, and DraftOut will use it to better match your tone, structure, and academic voice.",
  },
  {
    question: "Is there a right to revisions?",
    answer:
      "Yes. If something needs adjustment, DraftOut can revise the draft so the final version better fits the original request and expectations.",
  },
  {
    question: "Will I have plagiarism?",
    answer:
      "No. DraftOut aims for fully original writing and includes plagiarism-focused checks so the delivered essay is clean and safe to use.",
  },
  {
    question: "Will the essay pass AI detectors?",
    answer:
      "That is one of the core goals of the service. DraftOut is specifically positioned around AI-safe delivery and human-assisted polishing to reduce detector flags as much as possible.",
  },
  {
    question: "What is included in the subscription price?",
    answer:
      "Plans include the essay draft itself plus supporting materials such as source PDFs, a research memo, Q&A prep, and related submission-ready assets depending on the package.",
  },
  {
    question: "How is the refund done?",
    answer:
      "The pricing section states a 30-day money-back guarantee. If a refund case applies, it is handled through DraftOut support under that guarantee window.",
  },
  {
    question: "What is your quality guarantee?",
    answer:
      "DraftOut positions every order around academic quality, verified sources, clean formatting, and human review before delivery so the result feels polished and submission-ready.",
  },
  {
    question: "Why are you better than hiring writers?",
    answer:
      "DraftOut combines speed, structured research materials, AI-safe drafting, and human review in a single workflow. That means you get a faster result with more defense materials and more consistency than many generic writing services.",
  },
];

const finalCtaChips = [
  {
    icon: "/figma/083d88a3c1c4d109007d1277c0f87a23a147a675.png",
    label: "0% Plagiarism",
  },
  {
    icon: "/figma/b78dd5eb45a43b2174e1fc9a31df3f889a2c1f0a.png",
    label: "0% AI-Detected",
  },
  {
    icon: "/figma/68d08d8b0da583573294c935cc1a0d4bca5197b2.png",
    label: "Immediate delivery",
  },
  {
    icon: "/figma/4f5e03a8e73c14c76b5c9c9a57679b0e14cfac2d.png",
    label: "24/7 support",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms of Service", href: "#terms-of-service" },
  { label: "SUBPROCESSORS", href: "#subprocessors" },
  { label: "DATA PROCESSING", href: "#data-processing" },
  { label: "Payment refund policy", href: "#refund-policy" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] pt-[72px]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,244,242,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-0">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="DraftOut home"
          >
            <Image
              src={logoSrc}
              alt="DraftOut"
              width={150}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-5 lg:gap-[52px]">
            <HeaderNav items={navItems} loginHref="#login" loginOpensModal />

            <ParallaxButton
              href="#login"
              opensModal
              className="hidden h-10 min-w-[108px] px-6 lg:inline-flex"
            >
              Log In
            </ParallaxButton>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white/80">
        <ParallaxLayer className="pointer-events-none absolute right-0 top-[34px] hidden lg:block" offset={52}>
          <Image
            src={heroVisualSrc}
            alt=""
            width={577}
            height={549}
            className="h-auto w-[470px]"
            quality={100}
            sizes="470px"
            priority
          />
        </ParallaxLayer>

        <div className="mx-auto max-w-[1240px] px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-0 lg:pb-9 lg:pt-[63px]">
          <div className="grid items-start gap-10 lg:grid-cols-[816px_1fr] lg:gap-[26px]">
            <Reveal>
            <div>
              <div className="relative max-w-[804px]">
                <h1 className="font-display text-[32px] leading-[1.05] font-bold tracking-[-0.06em] text-[var(--text)] sm:text-[40px] lg:text-[48px] sm:leading-[50px] lg:leading-[60px]">
                  Get your essay done in a snap{" "}
                  <span className="text-[#34c759]">
                    Turnitin Bypass &amp; Full Defense Pack
                  </span>
                </h1>
                <Image
                  src={headingArrowSrc}
                  alt=""
                  width={63}
                  height={56}
                  className="absolute left-[33%] top-[65%] hidden h-14 w-auto sm:block"
                />
              </div>

              <div className="mt-[34px] grid gap-6 lg:grid-cols-[283px_482px] lg:items-center lg:gap-[38px]">
                <Image
                  src={heroCardSrc}
                  alt="AI-Free and Plag-Free with next gen writing service"
                  width={283}
                  height={128}
                  className="h-auto w-full max-w-[283px]"
                  priority
                />
                <p className="max-w-[482px] text-[16px] leading-6 text-[var(--text)]">
                  Answer a simple quiz, get an essay that&apos;s guaranteed
                  Turnitin-proof, expert-reviewed for A-grade quality, and
                  backed by our full Defense Package, including Q&amp;A guides
                  and real sources. Safe, fast, and yours to own.
                </p>
              </div>

              <div className="mt-[48px] flex flex-col gap-4 lg:w-[816px] lg:flex-row lg:items-center lg:gap-4">
                <label className="sr-only" htmlFor="essay-topic">
                  What&apos;s your essay about?
                </label>
                <input
                  id="essay-topic"
                  type="text"
                  placeholder="What's your essay about?"
                  className="h-[52px] w-full rounded-[50px] border-2 border-[rgba(112,204,250,0.6)] bg-[rgba(230,230,230,0.4)] px-4 text-[14px] leading-[17px] font-normal text-[var(--text)] outline-none placeholder:text-[#9ca3af] lg:w-[583px]"
                />
                <ParallaxButton
                  href="#"
                  arrowSrc={ctaArrowSrc}
                  opensModal
                  attention
                  className="shrink-0 self-center lg:self-start"
                >
                  <span className="text-center tracking-normal">TRY FOR FREE</span>
                </ParallaxButton>
              </div>

              <ul className="mt-6 grid gap-x-8 gap-y-[13px] sm:grid-cols-2 lg:w-[816px]">
                {heroFeatures.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-3 text-[16px] leading-6 text-[var(--text)]"
                  >
                    <Image
                      src={feature.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>

            <div className="hidden lg:block lg:min-h-[360px]" />
          </div>

          <Reveal className="mt-12 flex justify-center lg:mt-[73px]" delay={0.08}>
            <div className="flex min-h-[60px] w-full max-w-[638px] items-center justify-center gap-3 rounded-[24px] bg-[rgba(27,175,65,0.1)] px-5 py-3 text-center sm:px-8 lg:flex-nowrap">
              <Image
                src={trustShieldSrc}
                alt=""
                width={49}
                height={44}
                className="hidden h-11 w-auto sm:block"
              />
              <p className="text-[16px] leading-6 text-[var(--text)] lg:flex lg:flex-nowrap lg:items-center lg:text-center">
                <span className="font-display font-bold lg:whitespace-nowrap">
                  Trusted by 20,000+ students
                </span>
                <span className="lg:ml-1 lg:whitespace-nowrap">
                  who can&apos;t risk their grade or reputation
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--page-bg)]">
        <Reveal className="mx-auto flex min-h-[104px] max-w-[1240px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 py-8 sm:px-6 lg:px-0 lg:py-[32px]">
          {partnerLogos.map((logo) => (
            <div
              key={logo.alt}
              className="opacity-60 grayscale"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </Reveal>
      </section>

      <section id="guarantees" className="bg-[var(--page-bg)] pb-10 pt-8 scroll-mt-24">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-0.05em] text-[#313131]">
              Make your writing unstoppable with DraftOut
            </h2>
            <p className="mt-[7px] text-[16px] leading-6 font-normal text-[#189638]">
              Never get flagged again - with expert reviews and AI-powered accuracy.
            </p>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {trustCards.map((card) => (
                <div
                  key={card.title}
                  className="relative flex h-16 items-center rounded-[16px] bg-[rgba(255,255,255,0.4)] px-6 shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]"
                >
                  <Image
                    src={card.src}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  <p className="ml-[13px] font-display text-[12px] font-bold uppercase leading-[14px] tracking-normal text-[#313131]">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="how-it-works" className="overflow-hidden bg-white pb-12 pt-12 scroll-mt-24">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="relative overflow-hidden rounded-[24px] bg-white px-4 py-8 sm:px-8 lg:px-[100px] lg:py-[62px]">

            <h2 className="text-center font-display text-[30px] font-bold leading-[36px] tracking-[-0.05em] text-[#313131]">
              How DraftOut Works for You
            </h2>

            <div className="mx-auto mt-10 grid max-w-[798px] gap-x-[18px] gap-y-12 lg:grid-cols-2">
              {workflowSteps.map((step) => (
                <article key={step.number} className="grid grid-rows-[auto_auto_216px]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[32px] bg-[#e6e6e6] font-display text-[24px] font-bold leading-[30px] text-[#313131]">
                      {step.number}
                    </div>
                    <div className="min-h-[72px]">
                      <h3 className="font-display text-[16px] font-bold leading-5 text-[#0f0017]">
                        {step.title}
                      </h3>
                      <p className="mt-[7px] max-w-[304px] text-[14px] leading-5 text-[#888888]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex h-6 items-center rounded-[20px] bg-white px-4 text-[14px] leading-5 text-[#189638]">
                    {step.time}
                  </div>

                  <div className="mt-2 rounded-[16px] bg-white/40">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={390}
                      height={217}
                      className={`h-[216px] w-full object-contain object-center ${
                        step.number === "4" ? "bg-white" : ""
                      }`}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ParallaxButton
                href="#"
                arrowSrc={ctaArrowSrc}
                opensModal
              >
                <span>Start your draft</span>
              </ParallaxButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#e6e6e6] py-16">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_563.5px]">
            <div className="max-w-[692px]">
              <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-0.05em] text-[#313131]">
                Everything you need to submit confidently
              </h2>

              <div className="mt-8 flex max-w-[512px] flex-wrap gap-2">
                {packageFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="inline-flex min-h-[56px] items-center rounded-[24px] bg-[rgba(255,255,255,0.4)] px-[22px] py-4 text-[14px] leading-5 text-[#313131] shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]"
                  >
                    <span className="mr-[14px]">✅</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ParallaxButton
                  href="#"
                  arrowSrc={ctaArrowSrc}
                  opensModal
                >
                  <span>Get full package</span>
                </ParallaxButton>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/figma/aedfd52090f2bc0728b41c2eeee4c62fe609cbe2.png"
                alt="DraftOut full package preview with expert-reviewed final paper"
                width={563}
                height={336}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="why-draftout"
        className="relative overflow-hidden bg-[rgba(255,255,255,0.4)] py-16 scroll-mt-24"
      >
        <div className="absolute inset-0 rounded-[36px] shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[246px] w-[237px] bg-[radial-gradient(circle_at_left_bottom,rgba(112,160,255,0.3),transparent_55%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[165px] w-[453px] bg-[radial-gradient(circle_at_right_bottom,rgba(112,160,255,0.22),transparent_55%)]" />

        <Reveal className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="mx-auto max-w-[816px]">
            <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-0.05em] text-[#313131]">
              Why DraftOut&apos;s human-assisted writing beats the alternatives
            </h2>

            <div className="mt-10 space-y-4 lg:hidden">
              {comparisonRows.map((row) => (
                <article
                  key={`mobile-${row.label}`}
                  className="rounded-[24px] bg-white/60 p-5 shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]"
                >
                  <h3 className="font-display text-[14px] font-bold leading-5 text-[#0f0017]">
                    {row.label}
                  </h3>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-[16px] bg-white/60 p-4">
                      <p className="text-[12px] font-bold uppercase leading-4 text-[#0f0017]">
                        ChatGPT
                      </p>
                      {row.chatgpt.price ? (
                        <p
                          className={`mt-2 text-[14px] font-bold leading-[22px] ${
                            row.chatgpt.ok ? "text-[#189638]" : "text-[#ff383c]"
                          }`}
                        >
                          {row.chatgpt.price}
                        </p>
                      ) : null}
                      <p className="mt-2 text-[14px] leading-6 text-[#374151]">
                        <span className={row.chatgpt.ok ? "text-[#34c759]" : "text-[#ff383c]"}>
                          {row.chatgpt.ok ? "✅" : "❌"}
                        </span>{" "}
                        {row.chatgpt.top}
                      </p>
                    </div>

                    <div className="rounded-[16px] bg-white/60 p-4">
                      <p className="text-[12px] font-bold uppercase leading-4 text-[#0f0017]">
                        Essay Services
                      </p>
                      {row.services.price ? (
                        <p
                          className={`mt-2 text-[14px] font-bold leading-[22px] ${
                            row.services.ok ? "text-[#189638]" : "text-[#ff383c]"
                          }`}
                        >
                          {row.services.price}
                        </p>
                      ) : null}
                      <p className="mt-2 text-[14px] leading-6 text-[#374151]">
                        <span className={row.services.ok ? "text-[#34c759]" : "text-[#ff383c]"}>
                          {row.services.ok ? "✅" : "❌"}
                        </span>{" "}
                        {row.services.top}
                      </p>
                    </div>

                    <div className="rounded-[16px] bg-[rgba(27,175,65,0.16)] p-4">
                      <p className="text-[12px] font-bold uppercase leading-4 text-[#0f0017]">
                        DraftOut
                      </p>
                      {row.draftout.price ? (
                        <p className="mt-2 text-[14px] font-bold leading-[22px] text-[#189638]">
                          {row.draftout.price}
                        </p>
                      ) : null}
                      <p className="mt-2 text-[14px] leading-6 text-[#374151]">
                        <span className="text-[#34c759]">✅</span> {row.draftout.top}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 hidden overflow-x-auto rounded-[24px] lg:block">
              <div className="min-w-[816px]">
              <div className="grid grid-cols-[204px_204px_204px_204px]">
                <div />
                <div className="px-4 py-4 text-[14px] font-bold leading-5 text-[#0f0017]">
                  ChatGPT
                </div>
                <div className="px-4 py-4 text-[14px] font-bold leading-5 text-[#0f0017]">
                  Essay Services
                </div>
                <div className="rounded-t-[24px] border-t border-[#34c759] bg-[rgba(27,175,65,0.2)] px-4 py-2">
                  <Image
                    src={logoSrc}
                    alt="DraftOut"
                    width={150}
                    height={32}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[204px_204px_204px_204px] ${
                    index < comparisonRows.length - 1 ? "border-b border-[#e5e7eb]" : ""
                  }`}
                >
                  <div className="flex items-center bg-[rgba(255,255,255,0.4)] px-4 text-[14px] leading-4 text-[#0f0017]">
                    {row.label}
                  </div>

                  {[row.chatgpt, row.services].map((cell, cellIndex) => (
                    <div
                      key={`${row.label}-${cellIndex}`}
                      className="flex min-h-[88px] flex-col justify-center bg-[rgba(255,255,255,0.4)] px-4"
                    >
                      <div className={`text-[14px] ${cell.ok ? "" : ""}`}>
                        <span className={cell.ok ? "text-[#34c759]" : "text-[#ff383c]"}>
                          {cell.ok ? "✅" : "❌"}
                        </span>
                      </div>
                      {cell.price ? (
                        <p
                          className={`mt-2 text-[14px] font-bold leading-[22.4px] ${
                            cell.ok ? "text-[#189638]" : "text-[#ff383c]"
                          }`}
                        >
                          {cell.price}
                        </p>
                      ) : null}
                      <p className="mt-1 text-[14px] leading-[22.4px] text-[#374151]">
                        {cell.top}
                      </p>
                    </div>
                  ))}

                  <div
                    className={`flex min-h-[88px] flex-col justify-center px-4 ${
                      index === comparisonRows.length - 1
                        ? "rounded-b-[16px] bg-[rgba(27,175,65,0.2)]"
                        : index % 2 === 0
                          ? "bg-[rgba(27,175,65,0.1)]"
                          : "bg-[rgba(27,175,65,0.2)]"
                    }`}
                  >
                    <div className="text-[14px] text-[#34c759]">✅</div>
                    {row.draftout.price ? (
                      <p className="mt-2 text-[14px] font-bold leading-[22.4px] text-[#189638]">
                        {row.draftout.price}
                      </p>
                    ) : null}
                    <p className="mt-1 text-[14px] leading-[22.4px] text-[#374151]">
                      {row.draftout.top}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <ParallaxButton
                href="#"
                arrowSrc={ctaArrowSrc}
                opensModal
              >
                <span>Get started now</span>
              </ParallaxButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="pricing" className="bg-[#e6e6e6] py-16 scroll-mt-24">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <h2 className="font-display text-[30px] font-bold leading-[36px] tracking-[-0.05em] text-[#313131]">
            Choose your DraftOut plan
          </h2>
          <p className="mt-[7px] max-w-[608px] text-[16px] leading-6 text-[#888888]">
            AI-free verification, source PDFs, and research memo are included in all DraftOut plans
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingPlanShell
                key={plan.name}
                featured={plan.featured}
                badge={plan.badge}
              >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[16px] font-bold leading-5 text-[#0f0017]">
                        {plan.name}
                      </h3>
                      <div className="mt-[14px] space-y-2 text-[14px] leading-5 text-[#313131]">
                        <p>{plan.drafts}</p>
                        <p>{plan.duration}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-[16px] leading-[25.6px] text-[#888888] line-through">
                        {plan.oldPerEssay}
                      </p>
                      <p className="font-display text-[24px] font-bold leading-[30px] text-[#0f0017]">
                        {plan.perEssay}
                      </p>
                      <p className="text-[16px] leading-[25.6px] text-black">
                        per essay
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    <p className="text-[16px] leading-[25.6px] text-[#888888] line-through">
                      {plan.oldTotal}
                    </p>
                    <p className="font-display text-[24px] font-bold leading-[30px] text-[#0f0017]">
                      {plan.total}
                    </p>
                  </div>

                  <div className="mt-3 border-t border-[#938c8c]" />

                  <ul className="mt-[15px] space-y-[14px] text-[14px] leading-[22.4px] text-[#374151]">
                    {planFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-[8px]">
                        <span>✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ParallaxButton
                    href="#"
                    arrowSrc={ctaArrowSrc}
                    opensModal
                    className="mt-[17px]"
                  >
                    <span>{plan.cta}</span>
                  </ParallaxButton>
              </PricingPlanShell>
            ))}
          </div>

          <div className="mt-6 flex min-h-[72px] items-center justify-center rounded-[16px] border-2 border-dashed border-[#34c759] px-4 text-center sm:px-6">
            <p className="font-display text-[16px] font-bold leading-5 text-[#313131]">
              30-day money-back guarantee from DraftOut
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white pb-16">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <TestimonialsCarousel testimonials={testimonials} />
        </Reveal>
      </section>

      <section id="faq" className="relative overflow-hidden bg-[#e6e6e6] pb-16 pt-16 scroll-mt-24">
        <div className="pointer-events-none absolute -left-8 bottom-[72px] h-[96px] w-[96px] rounded-full bg-[#c8dcff]" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-[74px] w-[74px] rounded-full bg-[#c8dcff]" />
        <div className="pointer-events-none absolute -right-6 top-5 h-[74px] w-[74px] rounded-full bg-[#c8dcff]" />
        <div className="pointer-events-none absolute -right-10 top-[78px] h-[96px] w-[96px] rounded-full bg-[#c8dcff]" />

        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="relative mx-auto max-w-[836px]">
            <h2 className="text-center font-display text-[28px] font-bold leading-[34px] tracking-[-0.05em] text-[#0f0017] sm:text-[30px] sm:leading-[36px]">
              DraftOut: Frequently Asked Questions
            </h2>

            <div className="mt-8">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#e6e6e6] pb-10 pt-9">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <ParallaxLayer className="relative overflow-hidden rounded-[24px] border-b-2 border-[#0147ff]" offset={26}>
            <Image
              src={finalCtaBgSrc}
              alt=""
              fill
              className="object-cover"
            />

            <div className="relative px-4 py-8 sm:px-8 lg:px-8 lg:py-9">
              <h2 className="text-center font-display text-[28px] font-bold leading-[34px] tracking-[-0.05em] text-[#0f0017] sm:text-[30px] sm:leading-[36px]">
                Ready to give DraftOut a try?
              </h2>
              <p className="mt-[7px] text-center text-[16px] leading-6 text-[#888888]">
                Get your complete draft in under an hour!
              </p>

              <div className="mt-4 flex justify-center">
                <ParallaxButton
                  href="#"
                  arrowSrc={ctaArrowSrc}
                  opensModal
                >
                  <span>Start your paper</span>
                </ParallaxButton>
              </div>

              <div className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {finalCtaChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="flex min-h-[52px] items-center justify-center rounded-[50px] bg-[rgba(255,255,255,0.4)] px-5 py-3 text-center shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]"
                  >
                    <Image
                      src={chip.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    <span className="ml-3 text-[14px] leading-5 text-[#313131]">
                      {chip.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>
        </Reveal>
      </section>

      <footer className="w-full bg-[rgba(255,255,255,0.4)] pb-8 pt-2">
        <Reveal className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <div className="px-4 py-8 sm:px-6 sm:py-9 lg:px-0 lg:py-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
              <div className="max-w-[820px]">
                <p className="font-sans text-[14px] leading-5 font-normal text-[#313131]">
                  © draftout.ai 2026
                </p>
                <p className="font-sans text-[14px] leading-5 font-normal text-black">
                  For educational purposes only
                </p>

                <p className="mt-6 text-[14px] leading-5 text-[#a0a0a0]">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:help@draftout.ai"
                    className="text-[#2270fd] underline decoration-solid underline-offset-[2px]"
                  >
                    help@draftout.ai
                  </a>
                </p>

                <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:gap-x-6 lg:gap-y-0">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-display text-[12px] leading-[14px] font-bold uppercase whitespace-nowrap text-[#2270fd] underline decoration-solid"
                      style={{ color: "#2270FD", textDecoration: "underline" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="max-w-[275px] text-[14px] leading-5 text-[#313131] lg:pr-1">
                <p className="font-display font-bold">
                  Akademische Unterstützung GmbH
                </p>
                <p className="mt-1">Registration number: CHE-375.454.013</p>
                <p className="mt-1">Legal address:</p>
                <p className="mt-1">Kantonsstrasse 34</p>
                <p className="mt-1">6207 Nottwil, Schweiz</p>
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
      <LandingCtaModal />
    </main>
  );
}
