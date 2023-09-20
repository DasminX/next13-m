import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/ui/organisms/Nav";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shoppp - products",
	description: "Website contains simple products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Nav />
				<main id="mainContainer" className="mx-auto my-4 h-auto min-h-screen max-w-5xl">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
