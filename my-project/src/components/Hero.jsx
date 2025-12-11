export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center py-20 px-6 bg-white">
      <h1 className="text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
        Welcome to Our Website
      </h1>

      <p className="text-lg text-gray-600 mt-6 max-w-2xl">
        This is your hero section. We will replace this with exact text & design
        from your Figma once you share the exact content.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all">
        Get Started
      </button>
    </section>
  );
}
