import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const Privacy = () => {
	const highlights = [
		{
			icon: <Shield className="h-8 w-8 text-green-500" />,
			title: "Data Protection",
			description: "Your personal information is encrypted and securely stored",
		},
		{
			icon: <Eye className="h-8 w-8 text-blue-500" />,
			title: "No Data Selling",
			description: "We never sell your personal data to third parties",
		},
		{
			icon: <Lock className="h-8 w-8 text-purple-500" />,
			title: "Secure Processing",
			description: "All data processing follows industry security standards",
		},
		{
			icon: <UserCheck className="h-8 w-8 text-orange-500" />,
			title: "User Control",
			description: "You have full control over your data and privacy settings",
		},
	];

	return (
		<div className="py-16 bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-6">
						Privacy Policy
					</h1>
					<p className="text-lg text-gray-600 leading-relaxed">
						Last updated: March 1, 2025
					</p>
				</div>
			</section>

			{/* Privacy Highlights */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						{highlights.map((item, index) => (
							<div
								key={index}
								className="bg-white rounded-lg p-6 shadow-sm text-center"
							>
								<div className="flex justify-center mb-4">{item.icon}</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Privacy Policy Content */}
			<section className="pb-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								1. Information We Collect
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We collect information you provide directly to us, such as
									when you create an account, use our services, or contact us
									for support.
								</p>
								<div className="pl-4">
									<h3 className="font-semibold text-gray-900 mb-2">
										Personal Information:
									</h3>
									<ul className="list-disc pl-4 space-y-1">
										<li>Name and email address</li>
										<li>Account preferences and settings</li>
										<li>Recipe content you create or import</li>
										<li>Usage patterns and preferences</li>
									</ul>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								2. How We Use Your Information
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>We use the information we collect to:</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Provide, maintain, and improve our services</li>
									<li>Generate personalized recipe recommendations</li>
									<li>Send you weekly recipe digests (if subscribed)</li>
									<li>
										Respond to your comments, questions, and support requests
									</li>
									<li>Analyze usage patterns to improve user experience</li>
									<li>Protect against fraud and abuse</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								3. Information Sharing
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We do not sell, trade, or otherwise transfer your personal
									information to third parties, except:
								</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>With your explicit consent</li>
									<li>
										To trusted service providers who assist in operating our
										platform
									</li>
									<li>When required by law or to protect our rights</li>
									<li>In connection with a business transfer or acquisition</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								4. Data Security
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We implement appropriate security measures to protect your
									personal information against unauthorized access, alteration,
									disclosure, or destruction.
								</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Industry-standard encryption for data transmission</li>
									<li>Secure servers and databases</li>
									<li>Regular security audits and updates</li>
									<li>Limited access to personal information by employees</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								5. Your Privacy Rights
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>You have the right to:</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Access and update your personal information</li>
									<li>Delete your account and associated data</li>
									<li>Opt-out of email communications</li>
									<li>Request a copy of your data</li>
									<li>Restrict how we process your information</li>
								</ul>
								<p>
									To exercise these rights, please contact us at{" "}
									<a
										href="mailto:admin@recipease.kitchen"
										className="text-orange-500 hover:underline"
									>
										admin@recipease.kitchen
									</a>
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								6. Cookies and Tracking
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We use cookies and similar technologies to enhance your
									experience, analyze usage, and provide personalized content.
									You can control cookie settings in your browser.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								7. Children's Privacy
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									RecipEase is not intended for children under 13 years of age.
									We do not knowingly collect personal information from children
									under 13.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								8. Changes to This Policy
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We may update this Privacy Policy from time to time. We will
									notify you of any changes by posting the new policy on this
									page and updating the "Last updated" date.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								9. Contact Us
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									If you have any questions about this Privacy Policy, please
									contact us:
								</p>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p>
										<strong>Email:</strong> admin@recipease.kitchen
									</p>
									<p>
										<strong>Company:</strong> Advent Hub Solutions
									</p>
									<p>
										<strong>Address:</strong> Los Angeles, California
									</p>
								</div>
							</div>
						</div>

						<div className="border-t pt-8">
							<p className="text-sm text-gray-500 text-center">
								This Privacy Policy is effective as of March 1, 2025, and will
								remain in effect except with respect to any changes in its
								provisions in the future.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Privacy;
