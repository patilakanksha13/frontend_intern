export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-10 py-6 shadow-sm">
      <h1 className="text-2xl font-semibold">Logo</h1>

      <nav className="flex gap-8 text-lg font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
