'use client';

import { motion } from 'framer-motion';
import { Zap, MessageSquare, MapPin, Users, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import THEME, {
	SECTION_BACKGROUNDS,
	COMPONENT_GRADIENTS,
	DECORATIVE_GRADIENTS,
} from '@/constants/theme';

interface QuickLink {
	title: string;
	description: string;
	icon: LucideIcon;
	gradient: string;
	count: string;
	link?: string;
}

interface FAQQuickLinksProps {
	eyebrow?: string;
	title?: string;
	description?: string;
	links?: QuickLink[];
}

export default function FAQQuickLinks({
	eyebrow = 'Lightning Fast',
	title = 'Answers In Seconds',
	description = 'Find instant solutions or discover everything Journeu has to offer',
	links = [
		{
			title: 'FAQs',
			description: 'Common questions answered',
			icon: MessageSquare,
			gradient: `${THEME.section.uniformBlue}`,
			count: '10+',
			link: '',
		},
		{
			title: 'Tour Packages',
			description: 'Browse available tours',
			icon: MapPin,
			gradient: `${THEME.section.uniformBlue}`,
			count: '10+',
			link: '/tours',
		},
		{
			title: 'About Us',
			description: 'Learn more about Journeu',
			icon: Users,
			gradient: `${THEME.section.uniformBlue}`,
			count: '',
			link: '/about',
		},
	],
}: FAQQuickLinksProps) {
	return (
		<section
			className={`py-28 ${SECTION_BACKGROUNDS.lightBlue} relative overflow-hidden`}
		>
			{/* Decorative Background */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(27,165,184,0.08)_0%,transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,216,77,0.08)_0%,transparent_50%)]" />

			<div className="container mx-auto px-4 max-w-5xl relative z-10">
				<div className="text-center mb-20">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1BA5B8]/10 to-[#0A4D5C]/10 px-6 py-3 rounded-full border border-[#1BA5B8]/20 mb-6">
							<Zap className="w-5 h-5 text-[#1BA5B8]" />
							<span className="text-[#1BA5B8] font-semibold tracking-[0.2em] uppercase text-xs">
								{eyebrow}
							</span>
						</div>
						<h2 className="text-5xl md:text-7xl font-ubuntu font-bold mb-6 text-gray-900 leading-tight">
							{title}
						</h2>
						<p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
							{description}
						</p>
					</motion.div>
				</div>

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{links.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.15,
									duration: 0.6,
								}}
								whileHover={{ y: -12, scale: 1.03 }}
							>
								<Card className="p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white group relative overflow-hidden">
									{/* Decorative gradient on hover */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
									/>

									{/* Icon */}
									<motion.div
										whileHover={{
											scale: 1.15,
											rotate: 360,
										}}
										transition={{ duration: 0.6 }}
										className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
									>
										<Icon className="w-10 h-10 text-white" />
									</motion.div>

									{/* Count badge */}
									<div className="inline-block bg-gradient-to-r from-[#FFD84D]/20 to-[#FFD84D]/10 px-3 py-1 rounded-full mb-4">
										<span className="text-[#1BA5B8] font-bold text-xs sm:text-sm">
											{item.count
												? `${item.count} Resources`
												: null}
										</span>
									</div>

									<h3 className="font-ubuntu font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
										{item.title}
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 font-light">
										{item.description}
									</p>
									<Link
										href={item.link || '#'}
										className="cursor-pointer"
									>
										<Button className={`${THEME.section.uniformBlue} w-full cursor-pointer hover:shadow-lg transition-all py-6 font-semibold group-hover:scale-105`}>
											Explore Now
										</Button>
									</Link>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

