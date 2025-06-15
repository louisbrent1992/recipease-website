import {
	Star,
	Download,
	Smartphone,
	Brain,
	Users,
	BookOpen,
	Calendar,
	ShoppingCart,
} from "lucide-react";

const Home = () => {
	const features = [
		{
			icon: <Brain className="h-12 w-12 text-orange-500" />,
			title: "AI-Powered Recipe Generation",
			description:
				"Create unique recipes based on your preferences and dietary needs with our advanced AI technology.",
		},
		{
			icon: <BookOpen className="h-12 w-12 text-green-500" />,
			title: "Import Recipes from Social & Web",
			description:
				"Easily import and format recipes from your favorite social media platforms and websites.",
		},
		{
			icon: <Users className="h-12 w-12 text-blue-500" />,
			title: "Save & Organize Recipes",
			description:
				"Keep all your favorite recipes organized in one place with smart categorization and search.",
		},
		{
			icon: <Calendar className="h-12 w-12 text-purple-500" />,
			title: "Weekly Recipe Digest",
			description:
				"Get personalized recipe recommendations delivered to your inbox every week.",
		},
		{
			icon: <ShoppingCart className="h-12 w-12 text-red-500" />,
			title: "Smart Shopping List",
			description:
				"Automatically generate shopping lists from your selected recipes with smart ingredient grouping.",
		},
		{
			icon: <Smartphone className="h-12 w-12 text-indigo-500" />,
			title: "Cross-Platform Sync",
			description:
				"Access your recipes anywhere with seamless synchronization across all your devices.",
		},
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Home Chef",
			content:
				"RecipEase has completely transformed how I cook! The AI suggestions are spot-on, and I love how easy it is to import recipes from Instagram.",
			rating: 5,
		},
		{
			name: "Mike Chen",
			role: "Food Blogger",
			content:
				"As a food blogger, I needed a way to organize my recipes efficiently. RecipEase is perfect for that and more!",
			rating: 5,
		},
		{
			name: "Emily Davis",
			role: "Busy Mom",
			content:
				"The weekly digest feature saves me so much time planning meals. My family loves the variety of recipes we try now!",
			rating: 5,
		},
	];

	return (
		<div className="overflow-hidden">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
									Your Personal
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
										{" "}
										AI-Powered
									</span>
									<br />
									Recipe Assistant
								</h1>
								<p className="text-xl text-gray-600 leading-relaxed">
									Create, import, and organize recipes with the power of AI.
									Join thousands of home chefs who've revolutionized their
									cooking experience.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
									<Download className="h-5 w-5" />
									<span>Download on Google Play</span>
								</button>
								<button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200">
									Watch Demo
								</button>
							</div>

							<div className="flex items-center space-x-6 text-sm text-gray-600">
								<div className="flex items-center space-x-1">
									<div className="flex space-x-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 text-yellow-400 fill-current"
											/>
										))}
									</div>
									<span className="font-medium">4.9/5</span>
								</div>
								<div className="h-4 w-px bg-gray-300"></div>
								<span>10,000+ downloads</span>
								<div className="h-4 w-px bg-gray-300"></div>
								<span>Featured on Google Play</span>
							</div>
						</div>

						<div className="relative">
							<div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-2xl">
								<div className="bg-white rounded-2xl p-6 shadow-lg">
									<div className="text-center space-y-4">
										<div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
											<Brain className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-bold text-gray-900">
											AI Recipe Generator
										</h3>
										<p className="text-gray-600">
											Enter your ingredients and preferences to get personalized
											recipe suggestions
										</p>
										<div className="bg-gray-50 rounded-lg p-4 text-left">
											<div className="text-sm text-gray-500 mb-2">
												Ingredients: chicken, broccoli, rice
											</div>
											<div className="text-sm font-medium text-gray-900">
												Suggested: Teriyaki Chicken Bowl
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
								<Star className="h-6 w-6 fill-current" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-4xl font-bold text-gray-900">
							Everything You Need to Cook Better
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							RecipEase combines the power of AI with intuitive design to make
							cooking more enjoyable and efficient than ever before.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
							>
								<div className="space-y-4">
									<div className="flex justify-center">{feature.icon}</div>
									<h3 className="text-xl font-bold text-gray-900 text-center">
										{feature.title}
									</h3>
									<p className="text-gray-600 text-center leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-4xl font-bold text-gray-900">
							Loved by Home Chefs Everywhere
						</h2>
						<p className="text-xl text-gray-600">
							See what our users have to say about RecipEase
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="bg-white rounded-xl p-8 shadow-lg">
								<div className="space-y-4">
									<div className="flex space-x-1">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="h-5 w-5 text-yellow-400 fill-current"
											/>
										))}
									</div>
									<p className="text-gray-700 italic">
										"{testimonial.content}"
									</p>
									<div>
										<p className="font-semibold text-gray-900">
											{testimonial.name}
										</p>
										<p className="text-gray-600 text-sm">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="space-y-8">
						<h2 className="text-4xl font-bold text-white">
							Ready to Transform Your Cooking?
						</h2>
						<p className="text-xl text-orange-100">
							Join thousands of home chefs who have already discovered the joy
							of cooking with RecipEase.
						</p>
						<button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mx-auto">
							<Download className="h-5 w-5" />
							<span>Download Free Today</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
