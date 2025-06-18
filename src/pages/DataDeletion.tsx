import React, { useState } from "react";

const DataDeletion: React.FC = () => {
	const [email, setEmail] = useState("");
	const [reason, setReason] = useState("");
	const [confirm, setConfirm] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(false);
		setError("");
		setLoading(true);
		try {
			const data = {
				email,
				reason,
				timestamp: new Date().toISOString(),
				userAgent: navigator.userAgent,
				source: "web_form",
			};
			const response = await fetch(
				"https://flutter-recipe-app.onrender.com/api/data-deletion",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data),
				}
			);
			const result = await response.json();
			if (response.ok && result.success) {
				setSuccess(true);
				setEmail("");
				setReason("");
				setConfirm(false);
			} else {
				throw new Error(result.message || "Failed to submit request");
			}
		} catch (err: any) {
			setError(
				err.message ||
					"There was an error processing your request. Please try again or contact our support team."
			);
		} finally {
			setLoading(false);
		}
	};

	const isEmailValid = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
			<div className="bg-gradient-to-r from-red-400 to-orange-600 text-white p-10 text-center">
				<div className="flex items-center justify-center gap-4 mb-2">
					<img
						src="icons/logo.png"
						alt="RecipEase Logo"
						className="w-14 h-14 object-contain filter invert"
					/>
					<h1 className="text-3xl font-bold">RecipEase</h1>
				</div>
				<p className="text-lg opacity-90">Data Deletion Request</p>
			</div>

			<div className="p-10">
				<div className="mb-10">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
						<svg className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
						</svg>
						Account & Data Deletion
					</h2>
					<p>
						We respect your privacy and your right to control your personal
						data. You can request the complete deletion of your RecipEase
						account and all associated data through this page.
					</p>
				</div>

				<div className="bg-gray-50 rounded-xl p-6 my-6">
					<h3 className="text-red-600 mb-3 text-lg font-semibold">
						📋 Data That Will Be Permanently Deleted:
					</h3>
					<ul className="list-none p-0">
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ Your account profile and personal information
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ All recipes you've created or saved
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ Your recipe collections and favorites
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ Profile pictures and uploaded images
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ App preferences and settings
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ Usage analytics and activity data
						</li>
						<li className="py-2 border-b border-gray-200 flex items-center gap-2 last:border-b-0">
							🗑️ Any subscription or billing information
						</li>
						<li className="py-2 flex items-center gap-2">
							🗑️ Comments, ratings, and shared content
						</li>
					</ul>
				</div>

				<div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-5 my-6">
					<h3 className="text-yellow-800 mb-2 flex items-center gap-2 font-semibold">
						⚠️ Important Notice
					</h3>
					<p className="text-yellow-800 font-medium">
						<strong>This action cannot be undone.</strong> Once your data is
						deleted, it cannot be recovered. Please make sure you have saved any
						recipes or information you want to keep before proceeding.
					</p>
				</div>

				<div className="mb-10">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
						<svg className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
						</svg>
						Request Data Deletion
					</h2>
					<p>
						Please fill out the form below to request deletion of your account
						and data. We will process your request within 30 days as required by
						applicable privacy laws.
					</p>
				</div>

				<div className="bg-gray-50 rounded-xl p-8 my-8">
					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<label
								htmlFor="email"
								className="block mb-2 font-semibold text-gray-800"
							>
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
								placeholder="Enter the email associated with your RecipEase account"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
								disabled={loading}
							/>
						</div>
						<div className="mb-5">
							<label
								htmlFor="reason"
								className="block mb-2 font-semibold text-gray-800"
							>
								Reason for Deletion (Optional)
							</label>
							<textarea
								id="reason"
								name="reason"
								className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 min-h-[100px] resize-y"
								placeholder="Please let us know why you're deleting your account. This helps us improve our service."
								value={reason}
								onChange={(e) => setReason(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className="flex items-start gap-3 my-5">
							<input
								type="checkbox"
								id="confirm"
								name="confirm"
								required
								checked={confirm}
								onChange={(e) => setConfirm(e.target.checked)}
								disabled={loading}
								className="mt-1"
							/>
							<label htmlFor="confirm" className="font-normal cursor-pointer">
								I understand that this action is permanent and cannot be undone.
								I confirm that I want to delete my RecipEase account and all
								associated data.
							</label>
						</div>
						<button
							type="submit"
							className="bg-gradient-to-r from-red-500 to-red-700 text-white border-none py-4 px-8 rounded-lg text-base font-semibold w-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
							disabled={loading || !isEmailValid(email) || !confirm}
						>
							{loading
								? "⏳ Processing Request..."
								: "🗑️ Submit Deletion Request"}
						</button>
					</form>
					{success && (
						<div className="bg-green-100 border-2 border-green-600 rounded-xl p-5 my-6">
							<h3 className="text-green-800 mb-2 font-semibold">
								✅ Request Submitted Successfully
							</h3>
							<p className="text-green-800">
								Your data deletion request has been received. We will process
								your request within 30 days and send you a confirmation email
								once completed.
							</p>
						</div>
					)}
					{error && (
						<div className="bg-red-100 border-2 border-red-600 rounded-xl p-5 my-6">
							<h3 className="text-red-800 mb-2 font-semibold">
								❌ Error Submitting Request
							</h3>
							<p className="text-red-800">{error}</p>
						</div>
					)}
				</div>

				<div className="bg-green-50 rounded-xl p-6 my-8">
					<h3 className="text-green-700 mb-3 text-lg font-semibold">
						📞 Need Help?
					</h3>
					<p>
						If you have questions about data deletion or need assistance, please
						contact us:
					</p>
					<p>
						<strong>Email:</strong>{" "}
						<a
							href="mailto:privacy@recipease.kitchen"
							className="text-green-700 font-semibold hover:underline"
						>
							privacy@recipease.kitchen
						</a>
					</p>
					<p>
						<strong>Support:</strong>{" "}
						<a
							href="mailto:support@recipease.kitchen"
							className="text-green-700 font-semibold hover:underline"
						>
							support@recipease.kitchen
						</a>
					</p>
					<p>
						<strong>Response Time:</strong> We typically respond within 24-48
						hours
					</p>
				</div>
			</div>

			<div className="bg-gray-800 text-white p-8 text-center">
				<p className="mb-2">
					&copy; 2025 Advent Hub Solutions. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default DataDeletion;
