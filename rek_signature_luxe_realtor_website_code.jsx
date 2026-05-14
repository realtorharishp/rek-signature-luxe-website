export default function HarishPatelLuxuryWebsite() {
  const properties = [
    {
      title: '9650 Amberwoods Lane',
      city: 'Frisco, TX',
      price: '$549,999',
      details: '3 Bed • 2.5 Bath • 2,593 Sq Ft',
    },
    {
      title: '14839 Story Lane',
      city: 'Frisco, TX',
      price: '$923,631',
      details: '4 Bed • 3.5 Bath • 3,593 Sq Ft',
    },
    {
      title: '2935 Shetland Drive',
      city: 'Aubrey, TX',
      price: '$318,000',
      details: '3 Bed • 2 Bath • 1,792 Sq Ft',
    },
    {
      title: '400 Stonebrook Pkwy #303',
      city: 'Frisco, TX',
      price: '$429,999',
      details: 'Commercial • 1,225 Sq Ft',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <section className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full tracking-[0.2em] uppercase text-sm mb-6">
              REKonnection Real Estate
            </div>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Reconnecting You
              <span className="block text-yellow-400">To Your Future</span>
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
              Luxury real estate representation for buying, selling, leasing,
              commercial opportunities, and investment properties across North Texas.
            </p>

            <div className="flex gap-4 mb-10 flex-wrap">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold shadow-xl hover:bg-yellow-400 transition-all">
                Schedule Consultation
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all">
                View Listings
              </button>
            </div>

            <div className="flex items-center gap-5">
              <img
                src="https://placehold.co/300x300/png"
                alt="Harish Patel"
                className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
              />

              <div>
                <h3 className="text-2xl font-bold">Harish Patel</h3>
                <p className="text-yellow-400">Realtor®</p>
                <p className="text-zinc-300">972-552-0158</p>
                <p className="text-zinc-300">realtor.harishp@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-[32px] shadow-2xl">
              <img
                src="https://placehold.co/900x700/png"
                alt="Luxury Property"
                className="rounded-[24px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-600 tracking-[0.3em] uppercase text-sm font-semibold mb-4">
              Featured Listings
            </p>

            <h2 className="text-5xl font-bold mb-4">
              Premium North Texas Properties
            </h2>

            <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
              Discover luxury homes, lease opportunities, commercial properties,
              and investment-ready listings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] overflow-hidden shadow-xl border border-zinc-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-64 bg-zinc-200 flex items-center justify-center text-zinc-500">
                  Property Image
                </div>

                <div className="p-6">
                  <div className="text-yellow-600 font-bold text-3xl mb-3">
                    {property.price}
                  </div>

                  <h3 className="font-bold text-xl mb-2">
                    {property.title}
                  </h3>

                  <p className="text-zinc-500 mb-3">{property.city}</p>

                  <p className="text-zinc-600 mb-6">{property.details}</p>

                  <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-600 tracking-[0.3em] uppercase text-sm font-semibold mb-4">
            Services
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Real Estate Services Built Around Your Goals
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {['Buy', 'Sell', 'Lease', 'Invest', 'Commercial'].map((service) => (
              <div
                key={service}
                className="border border-zinc-200 rounded-[28px] p-8 hover:border-yellow-500 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl mx-auto mb-6"></div>

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-zinc-600 leading-relaxed">
                  Personalized real estate guidance tailored to your unique goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 tracking-[0.3em] uppercase text-sm font-semibold mb-4">
            Contact Harish Patel
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Ready To Make Your Next Move?
          </h2>

          <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
            Let’s create a strategy for buying, selling, leasing, or investing in North Texas real estate.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              placeholder="Your Name"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
            />

            <input
              placeholder="Phone Number"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Tell me about your real estate goals"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 mb-6"
          />

          <button className="bg-yellow-500 text-black px-10 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition-all shadow-2xl">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}
