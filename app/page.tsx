import Image from "next/image";
import Link from "next/link";

type IconName =
  | "card"
  | "clock"
  | "cross"
  | "globe"
  | "menu"
  | "pin"
  | "shield"
  | "smile"
  | "sparkles"
  | "star";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const services: Array<{
  title: string;
  description: string;
  icon: IconName;
  featured?: boolean;
  accent: string;
  image: string;
  imageAlt: string;
}> = [
  {
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, and preventive care designed to keep your smile healthy and comfortable for years to come.",
    icon: "shield",
    featured: true,
    accent: "bg-brand-teal-soft text-brand-teal",
    image: "/photos/flossing.jpg",
    imageAlt: "Close-up of flossing demonstrating preventive dental care",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Subtle, confidence-building cosmetic treatments tailored to your facial structure and smile goals.",
    icon: "sparkles",
    accent: "bg-brand-sky text-brand-navy",
    image: "/photos/veneers.jpg",
    imageAlt: "Bright cosmetic smile after veneer treatment",
  },
  {
    title: "Whitening and Veneers",
    description:
      "Professional whitening and veneers that brighten your smile without sacrificing a natural look.",
    icon: "smile",
    accent: "bg-brand-slate text-brand-navy",
    image: "/photos/teeth.jpg",
    imageAlt: "Healthy white teeth after professional whitening",
  },
  {
    title: "One Day Crowns",
    description:
      "Fast, durable restorations that let you walk out with a completed crown in a single visit.",
    icon: "clock",
    accent: "bg-brand-teal-soft text-brand-teal",
    image: "/photos/mouthguard.jpg",
    imageAlt: "Custom dental appliance representing same-day restorations",
  },
  {
    title: "Endodontics",
    description:
      "Gentle root canal treatment focused on relieving pain and preserving healthy tooth structure.",
    icon: "cross",
    accent: "bg-brand-rose text-[#8d2d2a]",
    image: "/photos/dental%20emergency.jpg",
    imageAlt: "Patient receiving urgent dental care",
  },
];

const familyHighlights: Array<{ image: string; alt: string; caption: string }> = [
  {
    image: "/photos/happyfamily.jpg",
    alt: "Happy family smiling together",
    caption: "Care the whole family looks forward to",
  },
  {
    image: "/photos/kid-dental.jpg",
    alt: "Child receiving a gentle dental checkup",
    caption: "Gentle visits for our youngest patients",
  },
  {
    image: "/photos/family.jpg",
    alt: "Family together after a dental visit",
    caption: "Generations of trusted Chesterfield smiles",
  },
];

const reviews = [
  {
    quote:
      "Hands down the best dentist. Loyal, caring, thoughtful, and consistently professional from the front desk to the chair.",
    author: "SimplyJules",
  },
  {
    quote:
      "We have been seeing Dr. Morgester for more than 20 years and the quality of care has always been excellent.",
    author: "Beverly C.",
  },
  {
    quote:
      "Our whole family trusts this office. The team is knowledgeable, careful, friendly, and always makes visits easy.",
    author: "Anonymous",
  },
];

const stats = [
  { value: "3", label: "Hygienists" },
  { value: "2", label: "Assistants" },
  { value: "1", label: "Office Staff" },
];

const trustPoints: Array<{ icon: IconName; label: string }> = [
  {
    icon: "pin",
    label: "510 Baxter Road, Suite #1, Chesterfield, MO 63017",
  },
  {
    icon: "globe",
    label: "English Spoken",
  },
  {
    icon: "card",
    label: "Credit and Debit Cards Accepted",
  },
];

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-navy-deep";

const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-3 text-sm font-semibold tracking-[0.18em] text-brand-navy uppercase transition hover:bg-brand-navy/5";

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line/80 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-10">
          <Link
            href="#home"
            className="font-serif text-xl font-semibold text-brand-navy sm:text-2xl"
          >
            Morgester Dental
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`border-b-2 pb-1 font-serif text-base font-semibold transition xl:text-lg ${
                  index === 0
                    ? "border-brand-teal text-brand-navy"
                    : "border-transparent text-brand-muted hover:text-brand-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a className={primaryButton} href="#contact">
              Schedule Appointment
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 list-none items-center justify-center rounded-full border border-brand-line bg-white text-brand-navy marker:hidden">
              <span className="sr-only">Open navigation menu</span>
              <Icon className="h-5 w-5" name="menu" />
            </summary>
            <div className="absolute right-0 mt-4 w-64 rounded-3xl border border-brand-line bg-white p-5 shadow-[0_24px_60px_rgba(13,39,72,0.12)]">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-serif text-lg font-semibold text-brand-navy"
                  >
                    {item.label}
                  </Link>
                ))}
                <a className={`${primaryButton} mt-2`} href="#contact">
                  Schedule Appointment
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <main className="overflow-x-hidden pt-20">
        <section
          id="home"
          className="relative isolate overflow-hidden px-6 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32 lg:pt-20"
        >
          <div className="absolute inset-0">
            <Image
              src="/photos/happyfamily.jpg"
              alt="Smiling family enjoying time together after a dental visit"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-panel via-brand-panel/95 to-brand-panel/30" />
          </div>

          <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center">
            <div className="max-w-[640px] space-y-6 py-8 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                Chesterfield, Missouri
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-brand-navy sm:text-6xl lg:text-7xl">
                Top Rated Dentistry in St. Louis
              </h1>
              <p className="max-w-xl text-lg leading-8 text-brand-muted sm:text-xl">
                Dentist in Chesterfield, MO. Providing modern, family-friendly
                care with a warm office experience and a calm clinical approach.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a className={primaryButton} href="#contact">
                  Schedule Appointment
                </a>
                <Link className={secondaryButton} href="#services">
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_28px_80px_rgba(13,39,72,0.14)]">
                <Image
                  src="/photos/family.jpg"
                  alt="Warm family moment representing the friendly atmosphere at Morgester Dental"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-10 left-[-2.5rem] hidden items-center gap-4 rounded-[1.25rem] border border-brand-line bg-white px-6 py-5 shadow-[0_18px_50px_rgba(13,39,72,0.12)] xl:flex">
                <StarRow />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
                    99 Patient Reviews
                  </p>
                  <p className="mt-1 text-sm text-brand-muted">5.0 average rating</p>
                </div>
              </div>

              <div className="absolute -right-6 -top-8 hidden h-40 w-40 overflow-hidden rounded-3xl border-4 border-white shadow-[0_18px_50px_rgba(13,39,72,0.18)] xl:block">
                <Image
                  src="/photos/kid-dental.jpg"
                  alt="Child smiling during a gentle dental checkup"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-navy px-6 py-5 text-white sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-5 text-center md:flex-row md:text-left">
            {trustPoints.map((item, index) => (
              <div key={item.label} className="contents">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-2 text-[#89d3d4]">
                    <Icon className="h-5 w-5" name={item.icon} />
                  </div>
                  <span className="text-sm leading-6 text-white/90 sm:text-base">
                    {item.label}
                  </span>
                </div>
                {index < trustPoints.length - 1 ? (
                  <div className="hidden h-6 w-px bg-white/20 md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                Our Services
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-navy sm:text-5xl">
                Comprehensive care for every smile
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-muted">
                The mock&rsquo;s layout is preserved here, but implemented as a
                responsive Next.js page with optimized typography and image delivery.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-brand-line bg-brand-surface shadow-[0_12px_36px_rgba(13,39,72,0.06)] transition hover:-translate-y-1 ${
                    service.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      service.featured ? "h-64 sm:h-80" : "h-48"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${service.accent}`}
                    >
                      <Icon className="h-6 w-6" name={service.icon} />
                    </div>
                    <h3
                      className={`font-serif font-semibold text-brand-navy ${
                        service.featured ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-brand-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-brand-panel-soft px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_18px_55px_rgba(13,39,72,0.12)]">
              <Image
                src="/photos/teeth.jpg"
                alt="Close-up of healthy teeth representing modern dental care"
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
              />
            </div>

            <div className="rounded-[2rem] border border-brand-line bg-white p-8 shadow-[0_12px_40px_rgba(13,39,72,0.06)] sm:p-10 lg:-ml-16 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                About Our Office
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-navy sm:text-5xl">
                Experienced care with a personal pace
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-muted">
                With more than 20 years of experience, Dr. Morgester and the team
                focus on clear communication, modern equipment, and a comfortable
                setting for every patient.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-brand-line pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-5xl font-semibold text-brand-teal">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                A Family Practice
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-navy sm:text-5xl">
                Smiles at every stage of life
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {familyHighlights.map((item) => (
                <figure
                  key={item.image}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-brand-line shadow-[0_12px_36px_rgba(13,39,72,0.06)]"
                >
                  <div className="relative h-72 w-full sm:h-80">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 font-serif text-xl font-semibold text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                Patient Reviews
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-navy sm:text-5xl">
                Trusted by families across Chesterfield
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-muted">
                Real feedback from long-term patients who value consistency,
                comfort, and thoughtful care.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.author}
                  className="rounded-[1.5rem] border border-brand-line bg-white p-8 shadow-[0_10px_30px_rgba(13,39,72,0.06)]"
                >
                  <StarRow />
                  <p className="mt-5 text-lg leading-8 text-brand-ink">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-navy">
                    {review.author}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-white/10 bg-brand-navy px-6 pb-8 pt-16 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-semibold">Morgester Dental</p>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/70">
              Top rated dentistry in St. Louis providing modern and family-friendly care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-white/70">
              <a href="#about">About Us</a>
              <a href="#services">Patient Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Office Information</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-white/70">
              <p>510 Baxter Road, Suite #1</p>
              <p>Chesterfield, MO 63017</p>
              <a className="inline-block hover:text-white" href="tel:5551234567">
                (555) 123-4567
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Hours
            </h3>
            <div className="mt-4 space-y-3 text-white/70">
              <p>Mon - Thu: 8am - 5pm</p>
              <p>Fri: 8am - 12pm</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1280px] border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2026 Morgester Dental. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-brand-gold" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon key={index} className="h-5 w-5 fill-current" name="star" />
      ))}
    </div>
  );
}

function Icon({
  className,
  name,
}: {
  className?: string;
  name: IconName;
}) {
  const shared = {
    "aria-hidden": "true" as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "menu":
      return (
        <svg {...shared}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m12 3.6 2.55 5.18 5.72.83-4.14 4.03.98 5.69L12 16.65l-5.11 2.68.98-5.69-4.14-4.03 5.72-.83L12 3.6Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...shared}>
          <path d="M12 20s6-4.85 6-10a6 6 0 1 0-12 0c0 5.15 6 10 6 10Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18" />
        </svg>
      );
    case "card":
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="18" height="12" rx="2.5" />
          <path d="M3 10.5h18M7 15h4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3 6 5.7v5.74c0 3.92 2.55 7.56 6 8.56 3.45-1 6-4.64 6-8.56V5.7L12 3Z" />
          <path d="M9.5 12h5M12 9.5v5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...shared}>
          <path d="m12 3 1.25 3.75L17 8l-3.75 1.25L12 13l-1.25-3.75L7 8l3.75-1.25L12 3Z" />
          <path d="m18.5 13 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" />
          <path d="m5.5 14 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" />
        </svg>
      );
    case "smile":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 14.2a4.5 4.5 0 0 0 7 0M9 10h.01M15 10h.01" />
        </svg>
      );
    case "clock":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "cross":
      return (
        <svg {...shared}>
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}
