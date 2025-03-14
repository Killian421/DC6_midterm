import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Project Title */}
          <h1 className="text-4xl font-bold tracking-wide cursor-pointer">
            <Link href="/" className="text-black hover:text-black">
              <span className="text-yellow-500">Kil</span>
              <span className="text-orange-500">lian</span>
            </Link>
          </h1>

          {/* Navigation Links */}
          <div className="space-x-6">
            <Link
              href="/products"
              className="text-orange-500 font-bold hover:text-orange-400 transition duration-200"
            >
              Products
            </Link>
            <Link
              href="/todos"
              className="text-orange-500 font-bold hover:text-orange-400 transition duration-200"
            >
              ToDos
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-6">
        {children}
      </div>
    </>
  );
};

export default Layout;