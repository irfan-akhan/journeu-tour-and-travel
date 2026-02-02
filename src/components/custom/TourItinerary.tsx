'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	MapPin,
	Clock,
	Utensils,
	Hotel,
	Camera,
	Mountain,
	X,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import THEME from '@/constants/theme';

interface ItineraryDay {
	day: number;
	title: string;
	location: string;
	image?: string;
	// media?: { type: 'image' | 'video'; url: string; thumbnail?: string; caption?: string }[];
	description: string;
	activities: string[];
	meals: string[];
	accommodation: string;
	highlights: string[];
}

interface TourItineraryProps {
	days: ItineraryDay[];
}

const dayIcons = [MapPin, Mountain, Camera, Hotel, Utensils, Clock];

// Helper to group days into ranges
const groupDays = (days: ItineraryDay[]) => {
	const groups: {
		startDay: number;
		endDay: number;
		location: string;
		days: ItineraryDay[];
	}[] = [];
	let currentGroup: ItineraryDay[] = [];
	let currentLocation = '';

	days.forEach((day, index) => {
		if (currentLocation !== day?.location || currentGroup.length >= 3) {
			if (currentGroup.length > 0) {
				groups.push({
					startDay: currentGroup[0].day,
					endDay: currentGroup[currentGroup.length - 1].day,
					location: currentLocation,
					days: [...currentGroup],
				});
			}
			currentGroup = [day];
			currentLocation = day?.location;
		} else {
			currentGroup.push(day);
		}

		// Push last group
		if (index === days.length - 1 && currentGroup.length > 0) {
			groups.push({
				startDay: currentGroup[0].day,
				endDay: currentGroup[currentGroup.length - 1].day,
				location: currentLocation,
				days: [...currentGroup],
			});
		}
	});

	return groups;
};

export default function TourItinerary({ days }: TourItineraryProps) {
	const dayGroups = groupDays(days);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
	const [currentDayMedia, setCurrentDayMedia] = useState<
		{
			type: 'image' | 'video';
			url: string;
			thumbnail?: string;
			caption?: string;
		}[]
	>([]);

	const openLightbox = (
		media: {
			type: 'image' | 'video';
			url: string;
			thumbnail?: string;
			caption?: string;
		}[],
		index: number
	) => {
		setCurrentDayMedia(media);
		setCurrentMediaIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
	};

	const goToPrevious = () => {
		setCurrentMediaIndex((prev) =>
			prev === 0 ? currentDayMedia.length - 1 : prev - 1
		);
	};

	const goToNext = () => {
		setCurrentMediaIndex((prev) =>
			prev === currentDayMedia.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<div className="space-y-12">
			{dayGroups?.map((group, groupIndex) => (
				<div key={`group-${groupIndex}`}>
					{/* Group Header - Grand Tour Style */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-8"
					>
						<div className="flex items-center gap-4 mb-4">
							<span
								className={`${THEME.section.uniformBlue} px-6 py-3 text-white text-sm font-bold tracking-wider rounded-lg shadow-lg`}
							>
								DAYS {group.startDay}
								{group.endDay > group.startDay
									? `-${group.endDay}`
									: ''}
							</span>
						</div>
						<h3 className="font-ubuntu text-3xl md:text-4xl font-bold text-gray-900 mb-2">
							{group.location}
						</h3>
						<div
							className={`${THEME.section.uniformBlue} to-transparent rounded-full`}
						></div>
					</motion.div>

					{/* Days within this group */}
					<div className="space-y-6">
						{group?.days?.map((day, index) => {
							const Icon = dayIcons[index % dayIcons.length];

							return (
								<motion.div
									key={day?.day}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="group"
								>
									<div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
										{/* Day Header */}
										<div className={`${THEME.section.uniformBlue}  text-white p-6`}>
											<div className="flex items-center gap-4">
												<div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
													<Icon className="w-8 h-8" />
												</div>

												<div className="flex-1">
													<div className="flex items-center gap-3 mb-2">
														<span className="px-4 py-1 bg-[#FFD84D] text-[#0A4D5C] text-sm font-bold rounded-full">
															Day {day.day}
														</span>
														<span className="text-white/80 text-sm">
															{day.location}
														</span>
													</div>
													<h3 className="font-ubuntu text-2xl font-bold">
														{day.title}
													</h3>
												</div>
											</div>
										</div>

										{/* Day Content */}
										<div className="p-6 md:p-8">
											{/* Description */}
											<p className="text-gray-700 text-lg leading-relaxed mb-6">
												{day.description}
											</p>

											{/* Grid Layout */}
											<div className="grid md:grid-cols-2 gap-6">
												{/* Activities */}
												{day.activities?.length > 0 && (
													<div className="bg-gradient-to-br from-[#1BA5B8]/5 to-[#0A4D5C]/5 rounded-2xl p-5">
														<div className="flex items-center gap-2 mb-4">
															<Mountain className="w-5 h-5 text-[#1BA5B8]" />
															<h4 className="font-bold text-gray-900">
																Activities
															</h4>
														</div>
														<ul className="space-y-2">
															{day.activities.map(
																(
																	activity,
																	i
																) => (
																	<li
																		key={i}
																		className="flex items-start gap-2 text-gray-700"
																	>
																		<span className="text-[#1BA5B8] mt-1">
																			•
																		</span>
																		<span>
																			{
																				activity
																			}
																		</span>
																	</li>
																)
															)}
														</ul>
													</div>
												)}

												{/* Highlights */}
												{day.highlights?.length > 0 && (
													<div className="bg-gradient-to-br from-[#FFD84D]/10 to-[#FFC700]/10 rounded-2xl p-5">
														<div className="flex items-center gap-2 mb-4">
															<Camera className="w-5 h-5 text-[#0A4D5C]" />
															<h4 className="font-bold text-gray-900">
																Highlights
															</h4>
														</div>
														<ul className="space-y-2">
															{day.highlights?.map(
																(
																	highlight,
																	i
																) => (
																	<li
																		key={i}
																		className="flex items-start gap-2 text-gray-700"
																	>
																		<span className="text-[#FFD84D] mt-1">
																			★
																		</span>
																		<span>
																			{
																				highlight
																			}
																		</span>
																	</li>
																)
															)}
														</ul>
													</div>
												)}
											</div>

											{/* Footer Info */}
											<div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-200">
												{/* Meals */}
												{day.meals?.length > 0 && (
													<div className="flex items-center gap-2 text-gray-600">
														<Utensils className="w-5 h-5 text-[#1BA5B8]" />
														<span className="font-semibold">
															Meals:
														</span>
														<span>
															{day.meals.join(
																', '
															)}
														</span>
													</div>
												)}

												{/* Accommodation */}
												{day.accommodation && (
													<div className="flex items-center gap-2 text-gray-600">
														<Hotel className="w-5 h-5 text-[#1BA5B8]" />
														<span className="font-semibold">
															Stay:
														</span>
														<span>
															{day.accommodation}
														</span>
													</div>
												)}
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			))}

			{/* Lightbox Modal */}
			<AnimatePresence>
				{lightboxOpen && currentDayMedia.length > 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
						onClick={closeLightbox}
					>
						{/* Close Button */}
						<button
							onClick={closeLightbox}
							className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all z-10"
						>
							<X className="w-6 h-6 text-white" />
						</button>

						{/* Previous Button */}
						{currentDayMedia.length > 1 && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									goToPrevious();
								}}
								className="absolute left-6 p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all z-10"
							>
								<ChevronLeft className="w-8 h-8 text-white" />
							</button>
						)}

						{/* Next Button */}
						{currentDayMedia.length > 1 && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									goToNext();
								}}
								className="absolute right-6 p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all z-10"
							>
								<ChevronRight className="w-8 h-8 text-white" />
							</button>
						)}

						{/* Media Content */}
						<motion.div
							key={currentMediaIndex}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className="relative max-w-7xl max-h-[90vh] w-full"
							onClick={(e) => e.stopPropagation()}
						>
							{currentDayMedia[currentMediaIndex].type ===
							'image' ? (
								<img
									src={currentDayMedia[currentMediaIndex].url}
									alt={
										currentDayMedia[currentMediaIndex]
											.caption ||
										`Media ${currentMediaIndex + 1}`
									}
									className="w-full h-full object-contain rounded-lg"
								/>
							) : (
								<video
									src={currentDayMedia[currentMediaIndex].url}
									poster={
										currentDayMedia[currentMediaIndex]
											.thumbnail
									}
									className="w-full h-full object-contain rounded-lg"
									controls
									autoPlay
								/>
							)}

							{/* Caption */}
							{currentDayMedia[currentMediaIndex].caption && (
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
									<p className="text-white text-lg font-medium text-center">
										{
											currentDayMedia[currentMediaIndex]
												.caption
										}
									</p>
								</div>
							)}

							{/* Counter */}
							<div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md text-white text-sm font-bold rounded-full">
								{currentMediaIndex + 1} /{' '}
								{currentDayMedia.length}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

