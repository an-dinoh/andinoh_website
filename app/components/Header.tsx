import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-red-700">
          LOGO
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-red-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-red-700 transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="hover:text-red-700 transition-colors">
              How it works
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-red-700 transition-colors">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#faqs" className="hover:text-red-700 transition-colors">
              FAQs
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-sm font-medium text-red-700 border border-red-700 rounded-full hover:bg-red-50 transition-colors">
            Log in
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-red-700 rounded-full hover:bg-red-800 transition-colors">
            Download App
          </button>
        </div>
      </nav>
    </header>
  );
}
