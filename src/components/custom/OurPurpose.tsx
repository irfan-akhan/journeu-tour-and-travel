'use client';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Globe } from 'lucide-react';

export default function OurPurpose() {
	const purposes = [
		{
			icon: Heart,
			title: 'Community First',
			description:
				"We work directly with local communities, ensuring your travel creates positive economic impact for Kashmir's people.",
			color: 'from-[#FFD84D] to-[#FFA500]',
		},
		{
			icon: Leaf,
			title: 'Sustainable Travel',
			description:
				"Committed to preserving Kashmir's natural beauty for future generations through responsible tourism practices.",
			color: 'from-[#FFD84D] to-[#FFA500]',
		},
		{
			icon: Users,
			title: 'Cultural Connection',
			description:
				'Authentic experiences that connect you with local traditions, crafts, and the warm hospitality of Kashmiri people.',
			color: 'from-[#FFD84D] to-[#FFA500]',
		},
		{
			icon: Globe,
			title: 'Travel for Good',
			description:
				'Every tour contributes to local schools, environmental conservation, and supporting Kashmiri artisans and businesses.',
			color: 'from-[#FFD84D] to-[#FFA500]',
		},
	];

	return (
		<section className="py-20 bg-white relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
							Our Purpose
						</span>
						<h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-6 leading-tight">
							Travel That{' '}
							<span className="text-[#1BA5B8]">Gives Back</span>
						</h2>
						<p className="text-lg text-gray-600 mb-6 leading-relaxed">
							Since the very beginning, we've been about creating
							positive change through the joy of travel. We
							believe that tourism should benefit
							everyone—travelers, local communities, and the
							environment.
						</p>
						<p className="text-gray-600 mb-8 leading-relaxed">
							Our commitment goes beyond just showing you
							beautiful places. We're dedicated to responsible
							tourism that preserves Kashmir's cultural heritage,
							protects its pristine environment, and empowers
							local communities through sustainable economic
							opportunities.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-6">
							{/* <div className="border-l-4 border-[#1BA5B8] pl-4">
                <div className="text-3xl font-bold text-[#0A4D5C] mb-1">₹2M+</div>
                <div className="text-sm text-gray-600">Contributed to Local Communities</div>
              </div> */}
							<div className="border-l-4 border-[#FFD84D] pl-4">
								<div className="text-3xl font-bold text-[#0A4D5C] mb-1">
									50+
								</div>
								<div className="text-sm text-gray-600">
									Local Businesses Partnered
								</div>
							</div>
						</div>
					</motion.div>

					{/* Purpose Cards */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="grid grid-cols-2 gap-6"
					>
						{purposes.map((purpose, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="group"
							>
								<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
									<div
										className={`w-14 h-14 bg-gradient-to-br ${purpose.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
									>
										<purpose.icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="font-ubuntu text-lg font-bold text-[#0A4D5C] mb-2">
										{purpose.title}
									</h3>
									<p className="text-sm text-gray-600 leading-relaxed">
										{purpose.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

