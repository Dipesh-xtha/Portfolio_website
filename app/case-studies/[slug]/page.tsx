import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return [
        { slug: 'vigorous-hospital' },
    ];
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    if (resolvedParams.slug !== 'vigorous-hospital') {
        notFound();
    }

    const projectContext = {
        title: "Vigorous Hospital",
        description: "A compassionate, transparent, and user-centric hospital website designed to bridge the gap between patients and medical care in Nepal. Focused on reducing anxiety through clarity and accessibility.",
        role: "Lead UI/UX Designer",
        duration: "4 Weeks",
        type: "Responsive Web",
        status: "Shipped",
    };

    return (
        <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-teal-900/30">
            {/* Header / Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-teal-900 mb-6 leading-[1.1]">
                        {projectContext.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed max-w-3xl mb-12">
                        {projectContext.description}
                    </p>
                </div>

                {/* Meta details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200">
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Role</p>
                        <p className="text-lg font-medium text-teal-900">{projectContext.role}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Duration</p>
                        <p className="text-lg font-medium text-teal-900">{projectContext.duration}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Type</p>
                        <p className="text-lg font-medium text-teal-900">{projectContext.type}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Status</p>
                        <p className="text-lg font-medium text-teal-900">{projectContext.status}</p>
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-16 bg-white px-6 md:px-12 border-y border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Project Timeline</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <span className="text-teal-900 font-bold block mb-2">Week 1</span>
                            <span className="text-zinc-600 text-sm">Research & Competitor Analysis</span>
                        </div>
                        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <span className="text-teal-900 font-bold block mb-2">Week 2</span>
                            <span className="text-zinc-600 text-sm">User Personas & Site Mapping</span>
                        </div>
                        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <span className="text-teal-900 font-bold block mb-2">Week 3</span>
                            <span className="text-zinc-600 text-sm">Wireframing & Visual Direction</span>
                        </div>
                        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <span className="text-teal-900 font-bold block mb-2">Week 4</span>
                            <span className="text-zinc-600 text-sm">High-Fidelity Design & Prototyping</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-24 bg-zinc-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">Problem Statement</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl">Understanding the challenges from all perspectives.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-[2rem] p-10 border border-zinc-200/50 shadow-sm">
                            <div className="w-12 h-12 bg-red-50 text-red-500 flex items-center justify-center rounded-xl mb-6 text-xl">🤒</div>
                            <h3 className="text-xl font-bold text-teal-900 mb-4">Patient Challenges</h3>
                            <ul className="space-y-3 text-zinc-600">
                                <li className="flex gap-2"><span className="text-red-400 mt-1">•</span> <span><b>Hidden Costs:</b> No visibility on consultation fees.</span></li>
                                <li className="flex gap-2"><span className="text-red-400 mt-1">•</span> <span><b>Complex Nav:</b> Hard to find specialists or Emergency info.</span></li>
                                <li className="flex gap-2"><span className="text-red-400 mt-1">•</span> <span><b>Lack of Trust:</b> Generic photos create hesitation.</span></li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-[2rem] p-10 border border-zinc-200/50 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 flex items-center justify-center rounded-xl mb-6 text-xl">🩺</div>
                            <h3 className="text-xl font-bold text-teal-900 mb-4">Doctor Challenges</h3>
                            <ul className="space-y-3 text-zinc-600">
                                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span> <span><b>Scheduling:</b> Manual booking leads to double-booking.</span></li>
                                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span> <span><b>Low Visibility:</b> Poor profile pages for skilled doctors.</span></li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-[2rem] p-10 border border-zinc-200/50 shadow-sm">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center rounded-xl mb-6 text-xl">📋</div>
                            <h3 className="text-xl font-bold text-teal-900 mb-4">Admin Challenges</h3>
                            <ul className="space-y-3 text-zinc-600">
                                <li className="flex gap-2"><span className="text-amber-400 mt-1">•</span> <span><b>Call Volume:</b> Overwhelmed by basic questions.</span></li>
                                <li className="flex gap-2"><span className="text-amber-400 mt-1">•</span> <span><b>Data Fragmentation:</b> Records not easily accessible.</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* The Unified Solution */}
                    <div className="bg-teal-900 rounded-[2.5rem] p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="col-span-full mb-4">
                            <h3 className="text-3xl font-bold text-teal-50">The Unified Solution</h3>
                        </div>
                        <div>
                            <div className="h-10 w-10 border-2 border-teal-500 rounded-full flex items-center justify-center mb-4 text-teal-300">1</div>
                            <h4 className="font-bold text-lg mb-2">Transparent Pricing</h4>
                            <p className="text-teal-100/70 text-sm leading-relaxed">Upfront fees displayed directly on consultation cards.</p>
                        </div>
                        <div>
                            <div className="h-10 w-10 border-2 border-teal-500 rounded-full flex items-center justify-center mb-4 text-teal-300">2</div>
                            <h4 className="font-bold text-lg mb-2">Real-Time Availability</h4>
                            <p className="text-teal-100/70 text-sm leading-relaxed">"Available Today" indicators for immediate care.</p>
                        </div>
                        <div>
                            <div className="h-10 w-10 border-2 border-teal-500 rounded-full flex items-center justify-center mb-4 text-teal-300">3</div>
                            <h4 className="font-bold text-lg mb-2">Empathetic UI</h4>
                            <p className="text-teal-100/70 text-sm leading-relaxed">Calming colors & human copy to reduce anxiety.</p>
                        </div>
                        <div>
                            <div className="h-10 w-10 border-2 border-teal-500 rounded-full flex items-center justify-center mb-4 text-teal-300">4</div>
                            <h4 className="font-bold text-lg mb-2">Seamless Booking</h4>
                            <p className="text-teal-100/70 text-sm leading-relaxed">3-click flow with no login wall to reduce friction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Research & Key Insights */}
            <section className="py-24 bg-white px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">User Research & Insights</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-teal-900 mb-4 border-b border-zinc-100 pb-2">Demographics</h3>
                                <ul className="space-y-4 text-zinc-600">
                                    <li><b>Age:</b> 25–65 Years</li>
                                    <li><b>Location:</b> Kathmandu Valley & Provinces</li>
                                    <li><b>Tech Lit:</b> Mixed (High to Low)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-teal-900 mb-4 border-b border-zinc-100 pb-2">User Needs</h3>
                                <ul className="space-y-4 text-zinc-600 italic border-l-4 border-teal-500 pl-4 py-2 bg-zinc-50 rounded-r-xl">
                                    <li>"I need a doctor now, not next week."</li>
                                    <li>"Does this hospital take my insurance?"</li>
                                    <li>"Is this doctor qualified?"</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">Anxiety Drivers</h3>
                                <p className="text-zinc-600 leading-relaxed">Users are stressed. The UI must be calming, not cluttered.</p>
                            </div>
                            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">The "Trust" Metric</h3>
                                <p className="text-zinc-600 leading-relaxed">Users trust faces over logos. Profiles need headshots & reviews.</p>
                            </div>
                            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 sm:col-span-2">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">Mobile First</h3>
                                <p className="text-zinc-600 leading-relaxed">70% of users access the site while in transit to the hospital.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Personas */}
            <section className="py-24 bg-teal-50/50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">User Personas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Persona 1 */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-teal-100 shadow-xl shadow-teal-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-[100px] -z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-teal-900 mb-1">Nisha Shrestha</h3>
                                <p className="text-teal-600 font-medium mb-8">32 • Marketing Manager • High Tech Comfort</p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Goals</h4>
                                    <ul className="space-y-2 text-zinc-700">
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Book cardiologist for father immediately.</li>
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Find parking & wheelchair access.</li>
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Pay digitally.</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Pain Points</h4>
                                    <ul className="space-y-2 text-zinc-700">
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Hates being put on hold.</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Worried about hidden charges.</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Frustrated by outdated schedules.</li>
                                    </ul>
                                </div>
                                <blockquote className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-900 font-medium italic">
                                    "My father is unwell. I need a website that acts like a concierge—quick, clear, and reassuring."
                                </blockquote>
                            </div>
                        </div>

                        {/* Persona 2 */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-teal-100 shadow-xl shadow-teal-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-[100px] -z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-teal-900 mb-1">Ram Kumar</h3>
                                <p className="text-teal-600 font-medium mb-8">55 • Government Officer • Low Tech Comfort</p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Goals</h4>
                                    <ul className="space-y-2 text-zinc-700">
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Find specialist for knee pain.</li>
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Read reviews to see if doctor is friendly.</li>
                                        <li className="flex gap-2"><span className="text-teal-500">✓</span> Find phone number easily.</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Pain Points</h4>
                                    <ul className="space-y-2 text-zinc-700">
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Lost in complex menus.</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Small fonts are hard to read.</li>
                                        <li className="flex gap-2"><span className="text-red-400">✕</span> Afraid of booking the wrong thing.</li>
                                    </ul>
                                </div>
                                <blockquote className="p-6 bg-teal-50 rounded-2xl border border-teal-100 text-teal-900 font-medium italic">
                                    "I want to handle my health myself without asking my children. I need a simple way to see a doctor."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Identity & Design System */}
            <section className="py-24 bg-zinc-50 px-6 md:px-12 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">Visual Identity & Design System</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl">Establishing trust through calming aesthetics.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Typography */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-200 shadow-sm">
                            <h3 className="text-xs font-bold text-zinc-400 mb-8 uppercase tracking-widest">Typography: Roboto</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-5xl font-black text-zinc-900 mb-2 tracking-tight">Health is Happiness</p>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Headline (Roboto Bold)</p>
                                </div>
                                <div className="border-t border-zinc-100 pt-6">
                                    <p className="text-2xl font-bold text-teal-900 mb-2">Core Commitment</p>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Subheadline (Roboto Medium)</p>
                                </div>
                                <div className="border-t border-zinc-100 pt-6">
                                    <p className="text-lg text-zinc-600 leading-relaxed mb-2">We are dedicated to providing compassionate, patient-centered care through clinical excellence.</p>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Body Copy (Roboto Regular)</p>
                                </div>
                            </div>
                        </div>

                        {/* Color Palette */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-zinc-200 shadow-sm">
                            <h3 className="text-xs font-bold text-zinc-400 mb-8 uppercase tracking-widest">Color Palette</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-24 rounded-2xl bg-[#0E4D5F] shadow-sm mb-3"></div>
                                    <p className="text-sm font-bold text-zinc-800">Deep Teal</p>
                                    <p className="text-xs text-zinc-500 uppercase">#0E4D5F</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-24 rounded-2xl bg-[#2D8FA6] shadow-sm mb-3"></div>
                                    <p className="text-sm font-bold text-zinc-800">Mid Teal</p>
                                    <p className="text-xs text-zinc-500 uppercase">#2D8FA6</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-24 rounded-2xl bg-[#E0F2F7] shadow-sm mb-3"></div>
                                    <p className="text-sm font-bold text-zinc-800">Light Teal</p>
                                    <p className="text-xs text-zinc-500 uppercase">#E0F2F7</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-24 rounded-2xl bg-[#D97706] shadow-sm mb-3"></div>
                                    <p className="text-sm font-bold text-zinc-800">Amber</p>
                                    <p className="text-xs text-zinc-500 uppercase">#D97706</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-24 rounded-2xl bg-[#FEF3C7] shadow-sm mb-3 border border-zinc-200"></div>
                                    <p className="text-sm font-bold text-zinc-800">Light Yellow</p>
                                    <p className="text-xs text-zinc-500 uppercase">#FEF3C7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Flow & Architecture */}
            <section className="py-24 bg-white px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">User Flow: "Find & Book"</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl">Goal: Minimize friction between "I feel sick" and "Appointment Confirmed".</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 mb-20 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                        <div className="text-center w-full md:w-auto">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 mb-3 text-2xl">📱</div>
                            <p className="font-bold text-teal-900">Home Page</p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Entry</p>
                        </div>
                        <div className="text-zinc-300 hidden md:block">➔</div>
                        <div className="text-center w-full md:w-auto">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 mb-3 text-2xl">🔍</div>
                            <p className="font-bold text-teal-900">Search "Pain"</p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Action</p>
                        </div>
                        <div className="text-zinc-300 hidden md:block">➔</div>
                        <div className="text-center w-full md:w-auto">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 mb-3 text-2xl">⏱️</div>
                            <p className="font-bold text-teal-900">Filter: "Today"</p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Decision</p>
                        </div>
                        <div className="text-zinc-300 hidden md:block">➔</div>
                        <div className="text-center w-full md:w-auto">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 mb-3 text-2xl">📅</div>
                            <p className="font-bold text-teal-900">Book Appt.</p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Selection</p>
                        </div>
                        <div className="text-zinc-300 hidden md:block">➔</div>
                        <div className="text-center w-full md:w-auto">
                            <div className="w-16 h-16 mx-auto bg-teal-500 text-white rounded-full flex items-center justify-center shadow-sm border border-teal-600 mb-3 text-2xl">✓</div>
                            <p className="font-bold text-teal-900">SMS Confirm</p>
                            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Success</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Design & Prototypes */}
            <section className="py-24 bg-zinc-50 px-6 md:px-12 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:w-1/2">
                        <h2 className="text-4xl font-bold text-teal-900 tracking-tight mb-4">Visual Design</h2>
                        <p className="text-xl text-zinc-500">The final high-fidelity screens showcasing the complete, transparent user journey.</p>
                    </div>

                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200 bg-white lg:p-4">
                        <div className="rounded-[2rem] overflow-hidden bg-zinc-100 flex items-center justify-center min-h-[400px]">
                            <Image
                                src="/UX research.png"
                                alt="Vigorous Hospital Visual Design Collage"
                                width={1600}
                                height={2000}
                                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Next Steps */}
            <section className="py-32 bg-teal-950 text-center px-6">
                <p className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-6">Designed with ❤️ by Dipesh Shrestha</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 hover:text-teal-200 transition-colors cursor-pointer">
                    Thank You for Watching!
                </h2>
            </section>
        </main>
    );
}
