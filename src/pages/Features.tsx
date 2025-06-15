import {
	Brain,
	BookOpen,
	Smartphone,
	Users,
	Calendar,
	ShoppingCart,
	Zap,
	Shield,
	Heart,
	Globe,
} from "lucide-react";

const Features = () => {
	const mainFeatures = [
		{
			icon: <Brain className="h-16 w-16 text-orange-500" />,
			title: "AI-Powered Recipe Generation",
			description:
				"Our advanced AI understands your taste preferences, dietary restrictions, and available ingredients to create personalized recipes just for you.",
			details: [
				"Dietary restriction awareness (vegan, gluten-free, keto, etc.)",
				"Ingredient substitution suggestions",
				"Nutritional information calculation",
				"Cooking time optimization",
			],
		},
		{
			icon: <BookOpen className="h-16 w-16 text-green-500" />,
			title: "Smart Recipe Import",
			description:
				"Seamlessly import recipes from social media, websites, or photos. Our AI automatically formats and organizes everything.",
			details: [
				"Instagram and TikTok recipe extraction",
				"Website recipe parsing",
				"Photo-to-recipe conversion",
				"Automatic ingredient scaling",
			],
		},
		{
			icon: <Users className="h-16 w-16 text-blue-500" />,
			title: "Recipe Organization",
			description:
				"Keep your culinary collection organized with smart categories, tags, and powerful search functionality.",
			details: [
				"Custom recipe collections",
				"Smart tagging system",
				"Advanced search filters",
				"Favorite recipe shortcuts",
			],
		},
		{
			icon: <Calendar className="h-16 w-16 text-purple-500" />,
			title: "Weekly Recipe Digest",
			description:
				"Get personalized recipe recommendations delivered to your inbox every week based on your cooking history and preferences.",
			details: [
				"Personalized recommendations",
				"Seasonal recipe suggestions",
				"Trending recipe alerts",
				"Custom digest scheduling",
			],
		},
		{
			icon: <ShoppingCart className="h-16 w-16 text-red-500" />,
			title: "Smart Shopping Lists",
			description:
				"Automatically generate optimized shopping lists from your selected recipes with smart ingredient grouping and store layout optimization.",
			details: [
				"Automatic ingredient consolidation",
				"Store aisle organization",
				"Price comparison integration",
				"Shared family shopping lists",
			],
		},
		{
			icon: <Smartphone className="h-16 w-16 text-indigo-500" />,
			title: "Cross-Platform Sync",
			description:
				"Access your recipes anywhere with seamless synchronization across all your devices. Cook from your phone, plan on your tablet.",
			details: [
				"Real-time sync across devices",
				"Offline recipe access",
				"Cloud backup and restore",
				"Multi-user account sharing",
			],
		},
	];

	const premiumFeatures = [
		{
			icon: <Zap className="h-8 w-8 text-yellow-500" />,
			title: "Ad-Free Experience",
			description: "Enjoy uninterrupted cooking with no advertisements",
		},
		{
			icon: <Shield className="h-8 w-8 text-green-500" />,
			title: "Priority Support",
			description: "Get premium customer support with faster response times",
		},
		{
			icon: <Heart className="h-8 w-8 text-red-500" />,
			title: "Advanced AI Features",
			description: "Access cutting-edge AI recipe generation and meal planning",
		},
		{
			icon: <Globe className="h-8 w-8 text-blue-500" />,
			title: "International Cuisines",
			description: "Unlock recipes from cuisines around the world",
		},
	];

	return (
		<div className="py-16">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl font-bold text-gray-900 mb-6">
						Powerful Features for
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
							{" "}
							Modern Cooking
						</span>
					</h1>
					<p className="text-xl text-gray-600 leading-relaxed">
						Discover how RecipEase transforms your kitchen experience with
						cutting-edge AI technology and intuitive design.
					</p>
				</div>
			</section>

			{/* Main Features */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="space-y-20">
						{mainFeatures.map((feature, index) => (
							<div
								key={index}
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
									index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
								}`}
							>
								<div
									className={`space-y-6 ${
										index % 2 === 1 ? "lg:col-start-2" : ""
									}`}
								>
									<div className="flex items-center space-x-4">
										{feature.icon}
										<h2 className="text-3xl font-bold text-gray-900">
											{feature.title}
										</h2>
									</div>
									<p className="text-lg text-gray-600 leading-relaxed">
										{feature.description}
									</p>
									<ul className="space-y-3">
										{feature.details.map((detail, detailIndex) => (
											<li
												key={detailIndex}
												className="flex items-start space-x-3"
											>
												<div className="bg-orange-500 rounded-full p-1 mt-1.5">
													<div className="w-2 h-2 bg-white rounded-full"></div>
												</div>
												<span className="text-gray-700">{detail}</span>
											</li>
										))}
									</ul>
								</div>
								<div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
									<div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
										<div className="bg-white rounded-xl p-6 shadow-md">
											<div className="text-center space-y-4">
												<div className="flex justify-center">
													{feature.icon}
												</div>
												<h3 className="text-xl font-bold text-gray-900">
													Feature Showcase
												</h3>
												<div className="bg-gray-50 rounded-lg p-4 text-left">
													<div className="text-sm text-gray-600">
														Interactive demonstration of{" "}
														{feature.title.toLowerCase()} would appear here in
														the actual app.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Premium Features */}
			<section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-4xl font-bold text-gray-900">
							Premium Features
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Upgrade to RecipEase Premium for advanced features and an enhanced
							cooking experience.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{premiumFeatures.map((feature, index) => (
							<div
								key={index}
								className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="space-y-4 text-center">
									<div className="flex justify-center">{feature.icon}</div>
									<h3 className="text-lg font-bold text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600 text-sm">{feature.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12">
						<button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
							Upgrade to Premium
						</button>
					</div>
				</div>
			</section>

			{/* Interactive Demo Section */}
			<section className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="space-y-8">
						<h2 className="text-4xl font-bold text-gray-900">
							See RecipEase in Action
						</h2>
						<p className="text-xl text-gray-600">
							Experience the power of AI-driven recipe creation and management.
						</p>
						<div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 shadow-xl">
							<div className="bg-white rounded-xl p-8 shadow-lg">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Interactive Demo
								</h3>
								<p className="text-gray-600 mb-6">
									A live, interactive demonstration of RecipEase's core features
									would be embedded here, allowing visitors to experience the
									app's functionality firsthand.
								</p>
								<button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200">
									Try Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Features;
