import React, { useState } from "react";
import { Mail, Clock, Star, Calendar, Sparkles } from "lucide-react";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [preferences, setPreferences] = useState({
		weeklyDigest: true,
		newFeatures: true,
		cookingTips: true,
		specialOffers: false,
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter signup
		console.log("Newsletter signup:", { email, preferences });
		setEmail("");
	};

	const handlePreferenceChange = (key: string) => {
		setPreferences((prev) => ({
			...prev,
			[key]: !prev[key as keyof typeof prev],
		}));
	};

	const digestFeatures = [
		{
			icon: (
				<img src="/icons/logo.png" alt="RecipEase Logo" className="h-10 w-10" />
			),
			title: "Personalized Recipes",
			description:
				"Recipes tailored to your taste preferences and dietary needs",
		},
		{
			icon: <Star className="h-8 w-8 text-yellow-500" />,
			title: "Trending Dishes",
			description: "Popular recipes from our community of home chefs",
		},
		{
			icon: <Calendar className="h-8 w-8 text-green-500" />,
			title: "Seasonal Suggestions",
			description: "Fresh recipes using seasonal ingredients and flavors",
		},
		{
			icon: <Sparkles className="h-8 w-8 text-purple-500" />,
			title: "Cooking Tips",
			description: "Expert tips and techniques to improve your culinary skills",
		},
	];

	const sampleDigest = [
		{
			title: "Mediterranean Quinoa Bowl",
			description: "A healthy, protein-packed meal perfect for busy weekdays",
			time: "25 minutes",
			difficulty: "Easy",
		},
		{
			title: "Chocolate Lava Cake",
			description: "Indulgent dessert that's surprisingly simple to make",
			time: "20 minutes",
			difficulty: "Medium",
		},
		{
			title: "Thai Green Curry",
			description: "Aromatic and flavorful curry with fresh vegetables",
			time: "35 minutes",
			difficulty: "Medium",
		},
	];

	return (
		<div className="py-16 bg-background">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-secondary-light via-card to-secondary-warm py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-5xl font-bold text-heading">
									Stay Updated with
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-warm">
										{" "}
										RecipEase
									</span>
								</h1>
								<p className="text-xl text-body leading-relaxed">
									Subscribe to our newsletter for weekly recipe inspiration,
									cooking tips, and exclusive content delivered straight to your
									inbox.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-body"
									>
										Email Address
									</label>
									<div className="mt-1">
										<input
											type="email"
											name="email"
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
											placeholder="you@example.com"
											required
										/>
									</div>
								</div>

								<div className="space-y-4">
									<h3 className="text-lg font-medium text-heading">
										Newsletter Preferences
									</h3>
									<div className="space-y-2">
										{Object.entries(preferences).map(([key, value]) => (
											<div key={key} className="flex items-center">
												<input
													type="checkbox"
													id={key}
													checked={value}
													onChange={() => handlePreferenceChange(key)}
													className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
												/>
												<label
													htmlFor={key}
													className="ml-2 block text-sm text-body"
												>
													{key
														.replace(/([A-Z])/g, " $1")
														.replace(/^./, (str) => str.toUpperCase())}
												</label>
											</div>
										))}
									</div>
								</div>

								<button
									type="submit"
									className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
								>
									Subscribe to Newsletter
								</button>
							</form>
						</div>

						<div className="bg-card rounded-2xl shadow-xl overflow-hidden">
							<div className="p-8 bg-gradient-to-br from-primary to-secondary-warm text-white">
								<h2 className="text-2xl font-bold mb-4">What You'll Receive</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{digestFeatures.map((feature, index) => (
										<div key={index} className="space-y-2">
											<div className="flex items-center space-x-2">
												{feature.icon}
												<h3 className="font-semibold">{feature.title}</h3>
											</div>
											<p className="text-secondary-light text-sm">
												{feature.description}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="p-8">
								<div className="space-y-6">
									<div>
										<h4 className="text-lg font-semibold text-heading mb-4">
											This Week's Recommended Recipes
										</h4>
										<div className="space-y-4">
											{sampleDigest.map((recipe, index) => (
												<div
													key={index}
													className="flex items-start space-x-4 p-4 bg-secondary-light rounded-lg"
												>
													<div className="bg-primary text-white p-2 rounded-full">
														<img
															src="/icons/logo.png"
															alt="RecipEase Logo"
															className="h-6 w-6"
														/>
													</div>
													<div className="flex-1">
														<h5 className="font-semibold text-heading">
															{recipe.title}
														</h5>
														<p className="text-body text-sm mb-2">
															{recipe.description}
														</p>
														<div className="flex items-center space-x-4 text-sm text-body">
															<div className="flex items-center space-x-1">
																<Clock className="h-4 w-4" />
																<span>{recipe.time}</span>
															</div>
															<span>•</span>
															<span>{recipe.difficulty}</span>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="border-t border-secondary-light pt-6">
										<h4 className="text-lg font-semibold text-heading mb-2">
											💡 Pro Tip of the Week
										</h4>
										<p className="text-body">
											Add a splash of acid (lemon juice, vinegar, or wine) to
											your dishes just before serving to brighten flavors and
											make them pop!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Newsletter;
