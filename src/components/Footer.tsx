import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-heading text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2 text-2xl font-bold text-secondary-warm">
							<img
								src="/icons/logo.png"
								alt="RecipEase Logo"
								className="h-10 w-10"
							/>
							<span>RecipEase</span>
						</div>
						<p className="text-secondary-light">
							Your personal AI-powered recipe assistant. Create, import, and
							organize recipes with ease.
						</p>
						<div className="flex space-x-4">
							<div className="bg-primary p-2 rounded-full">
								<Mail className="h-4 w-4" />
							</div>
							<div className="bg-primary p-2 rounded-full">
								<Phone className="h-4 w-4" />
							</div>
							<div className="bg-primary p-2 rounded-full">
								<MapPin className="h-4 w-4" />
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-secondary-warm">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/features"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									to="/gallery"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									to="/support"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Support
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-secondary-warm">
							Company
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/newsletter"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Newsletter
								</Link>
							</li>
							<li>
								<a
									href="mailto:admin@adventhubsolutions.com"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-secondary-warm">
							Legal
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/privacy"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									to="/cookies"
									className="text-secondary-light hover:text-secondary-warm transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-secondary-light mt-8 pt-8 text-center">
					<p className="text-secondary-light">
						© 2025 Advent Hub Solutions. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
