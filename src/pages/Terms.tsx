import { FileText, Scale, Shield, AlertCircle } from "lucide-react";

const Terms = () => {
	const highlights = [
		{
			icon: <FileText className="h-8 w-8 text-blue-500" />,
			title: "Clear Terms",
			description: "Straightforward terms and conditions for using RecipEase",
		},
		{
			icon: <Scale className="h-8 w-8 text-green-500" />,
			title: "Fair Use",
			description: "Reasonable usage policies that protect all users",
		},
		{
			icon: <Shield className="h-8 w-8 text-purple-500" />,
			title: "User Protection",
			description: "Policies designed to protect your rights and data",
		},
		{
			icon: <AlertCircle className="h-8 w-8 text-orange-500" />,
			title: "Regular Updates",
			description: "Terms are regularly reviewed and updated for clarity",
		},
	];

	return (
		<div className="py-16 bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-6">
						Terms of Service
					</h1>
					<p className="text-lg text-gray-600 leading-relaxed">
						Last updated: March 1, 2025
					</p>
				</div>
			</section>

			{/* Terms Highlights */}
			<section className="py-16">
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

			{/* Terms Content */}
			<section className="pb-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								1. Acceptance of Terms
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									By downloading, accessing, or using the RecipEase mobile
									application and related services (collectively, the
									"Service"), you agree to be bound by these Terms of Service
									("Terms").
								</p>
								<p>
									If you do not agree to these Terms, please do not use our
									Service.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								2. Description of Service
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									RecipEase is an AI-powered recipe management application that
									allows users to:
								</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Generate recipes using artificial intelligence</li>
									<li>Import recipes from various sources</li>
									<li>Organize and manage recipe collections</li>
									<li>Create shopping lists from recipes</li>
									<li>Receive personalized recipe recommendations</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								3. User Accounts
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									To access certain features of the Service, you must create an
									account. You agree to:
								</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Provide accurate and complete information</li>
									<li>Maintain the security of your account credentials</li>
									<li>Promptly update any changes to your information</li>
									<li>
										Accept responsibility for all activities under your account
									</li>
									<li>Notify us immediately of any unauthorized use</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								4. Acceptable Use
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>You agree not to use the Service to:</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Violate any applicable laws or regulations</li>
									<li>Infringe on intellectual property rights</li>
									<li>Upload harmful or malicious content</li>
									<li>Attempt to gain unauthorized access to our systems</li>
									<li>
										Use the Service for commercial purposes without permission
									</li>
									<li>
										Share content that is offensive, discriminatory, or
										inappropriate
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								5. Content and Intellectual Property
							</h2>
							<div className="space-y-4 text-gray-600">
								<h3 className="font-semibold text-gray-900">Your Content:</h3>
								<p>
									You retain ownership of recipes and content you create or
									import. By using our Service, you grant us a license to store,
									process, and display your content to provide the Service.
								</p>

								<h3 className="font-semibold text-gray-900 mt-4">
									Our Content:
								</h3>
								<p>
									The RecipEase application, AI technology, and related
									intellectual property remain the exclusive property of Advent
									Hub Solutions.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								6. Subscription and Payments
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									RecipEase offers both free and premium subscription tiers:
								</p>
								<ul className="list-disc pl-4 space-y-2">
									<li>Free accounts have limited features and usage quotas</li>
									<li>
										Premium subscriptions provide unlimited access to all
										features
									</li>
									<li>Subscriptions auto-renew unless cancelled</li>
									<li>Refunds are handled according to app store policies</li>
									<li>We reserve the right to change pricing with notice</li>
								</ul>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								7. Privacy and Data
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									Your privacy is important to us. Our collection and use of
									personal information is governed by our Privacy Policy, which
									is incorporated into these Terms by reference.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								8. Disclaimers
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
									KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
									INCLUDING WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
									PARTICULAR PURPOSE.
								</p>
								<p>
									We do not guarantee the accuracy of AI-generated recipes or
									imported content. Users should exercise judgment when
									following recipes, especially regarding food safety and
									dietary restrictions.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								9. Limitation of Liability
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									TO THE MAXIMUM EXTENT PERMITTED BY LAW, ADVENT HUB SOLUTIONS
									SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR
									CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								10. Termination
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We may terminate or suspend your account immediately, without
									prior notice, for any reason, including breach of these Terms.
									You may also terminate your account at any time.
								</p>
								<p>
									Upon termination, your right to use the Service ceases
									immediately, but your data will be handled according to our
									Privacy Policy.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								11. Changes to Terms
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									We reserve the right to modify these Terms at any time. We
									will notify users of material changes through the app or by
									email. Continued use of the Service after changes constitutes
									acceptance of the new Terms.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								12. Governing Law
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									These Terms are governed by the laws of the State of
									California, without regard to conflict of law principles. Any
									disputes will be resolved in the courts of San Francisco,
									California.
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								13. Contact Information
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									If you have questions about these Terms, please contact us:
								</p>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p>
										<strong>Email:</strong> legal@recipease.kitchen
									</p>
									<p>
										<strong>Company:</strong> Advent Hub Solutions
									</p>
									<p>
										<strong>Address:</strong> San Francisco, California
									</p>
								</div>
							</div>
						</div>

						<div className="border-t pt-8">
							<p className="text-sm text-gray-500 text-center">
								These Terms of Service are effective as of March 1, 2025. By
								using RecipEase, you acknowledge that you have read and
								understood these Terms.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Terms;
