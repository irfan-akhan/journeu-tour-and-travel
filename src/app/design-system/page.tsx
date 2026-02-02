"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, Play, MapPin, Calendar, Users, Star, Heart, Share2, AlertCircle, CheckCircle2, Info, XCircle, Plane, Hotel, Compass, Shield, Clock, Award, TrendingUp, Globe, Instagram } from "lucide-react";
import { useState } from "react";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Journeu Design System
          </h1>
          <p className="text-gray-600 mt-2">
            A comprehensive design system for luxury adventure travel
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Navigation */}
        <nav className="mb-12 flex gap-4 flex-wrap">
          <a href="#colors" className="text-sm font-medium hover:underline">Colors</a>
          <a href="#typography" className="text-sm font-medium hover:underline">Typography</a>
          <a href="#buttons" className="text-sm font-medium hover:underline">Buttons</a>
          <a href="#cards" className="text-sm font-medium hover:underline">Cards</a>
          <a href="#forms" className="text-sm font-medium hover:underline">Forms</a>
          <a href="#navbar" className="text-sm font-medium hover:underline">Navbar</a>
          <a href="#hero" className="text-sm font-medium hover:underline">Hero</a>
          <a href="#search" className="text-sm font-medium hover:underline">Search</a>
          <a href="#tour-cards" className="text-sm font-medium hover:underline">Tour Cards</a>
          <a href="#destinations" className="text-sm font-medium hover:underline">Destinations</a>
          <a href="#testimonials" className="text-sm font-medium hover:underline">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:underline">Pricing</a>
          <a href="#booking" className="text-sm font-medium hover:underline">Booking</a>
          <a href="#stats" className="text-sm font-medium hover:underline">Stats</a>
          <a href="#highlights" className="text-sm font-medium hover:underline">Highlights</a>
          <a href="#why-us" className="text-sm font-medium hover:underline">Why Us</a>
          <a href="#cta" className="text-sm font-medium hover:underline">CTA</a>
          <a href="#trust" className="text-sm font-medium hover:underline">Trust</a>
          <a href="#guides" className="text-sm font-medium hover:underline">Guides</a>
          <a href="#map" className="text-sm font-medium hover:underline">Map</a>
          <a href="#breadcrumbs" className="text-sm font-medium hover:underline">Breadcrumbs</a>
          <a href="#comparison" className="text-sm font-medium hover:underline">Comparison</a>
          <a href="#newsletter" className="text-sm font-medium hover:underline">Newsletter</a>
          <a href="#blog" className="text-sm font-medium hover:underline">Blog</a>
          <a href="#requirements" className="text-sm font-medium hover:underline">Requirements</a>
          <a href="#policy" className="text-sm font-medium hover:underline">Policy</a>
          <a href="#related" className="text-sm font-medium hover:underline">Related</a>
          <a href="#tabs" className="text-sm font-medium hover:underline">Tabs</a>
          <a href="#modals" className="text-sm font-medium hover:underline">Modals</a>
          <a href="#date-picker" className="text-sm font-medium hover:underline">Date Picker</a>
          <a href="#notifications" className="text-sm font-medium hover:underline">Notifications</a>
          <a href="#loading" className="text-sm font-medium hover:underline">Loading</a>
          <a href="#interactive" className="text-sm font-medium hover:underline">Interactive</a>
          <a href="#enhanced-hero" className="text-sm font-medium hover:underline">Enhanced Hero</a>
          <a href="#services" className="text-sm font-medium hover:underline">Services</a>
          <a href="#partners" className="text-sm font-medium hover:underline">Partners</a>
          <a href="#instagram" className="text-sm font-medium hover:underline">Instagram</a>
          <a href="#advanced-destinations" className="text-sm font-medium hover:underline">Destinations+</a>
          <a href="#features-list" className="text-sm font-medium hover:underline">Features</a>
          <a href="#enhanced-tours" className="text-sm font-medium hover:underline">Tours+</a>
          <a href="#carousel" className="text-sm font-medium hover:underline">Carousel</a>
          <a href="#gallery" className="text-sm font-medium hover:underline">Gallery</a>
          <a href="#accordion" className="text-sm font-medium hover:underline">Accordion</a>
          <a href="#itinerary" className="text-sm font-medium hover:underline">Itinerary</a>
          <a href="#footer" className="text-sm font-medium hover:underline">Footer</a>
        </nav>

        {/* Colors Section */}
        <section id="colors" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Colors</h2>
          
          {/* Brand Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch 
                color="#1BA5B8" 
                name="Brand Blue" 
                variable="--color-brand-blue"
              />
              <ColorSwatch 
                color="#FFD84D" 
                name="Brand Yellow" 
                variable="--color-brand-yellow"
              />
              <ColorSwatch 
                color="#0A4D5C" 
                name="Deep Blue" 
                variable="--color-deep-blue"
              />
              <ColorSwatch 
                color="#FFF4CC" 
                name="Soft Yellow" 
                variable="--color-soft-yellow"
              />
            </div>
          </div>

          {/* Gray Scale */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Gray Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch color="#F8FAFB" name="Gray 50" />
              <ColorSwatch color="#DFE6E9" name="Gray 200" />
              <ColorSwatch color="#636E72" name="Gray 400" />
              <ColorSwatch color="#2D3436" name="Gray 600" />
              <ColorSwatch color="#0D0F10" name="Gray 900" />
            </div>
          </div>

          {/* Semantic Colors */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch color="#00B894" name="Success" />
              <ColorSwatch color="#FDCB6E" name="Warning" />
              <ColorSwatch color="#FF7675" name="Error" />
              <ColorSwatch color="#74B9FF" name="Info" />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>
          
          <div className="space-y-6 bg-white p-8 rounded-lg mb-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Display Large - 72px</p>
              <h1 className="text-7xl font-bold font-serif">Your Himalayan Adventure</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 1 - 48px</p>
              <h1 className="text-5xl font-bold">Discover Kashmir</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 2 - 40px</p>
              <h2 className="text-4xl font-bold">Featured Tours</h2>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 3 - 32px</p>
              <h3 className="text-3xl font-semibold">5 Day Gulmarg Adventure</h3>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Body Large - 18px</p>
              <p className="text-lg">Experience the magic of Kashmir&apos;s valleys, where ancient traditions meet breathtaking landscapes.</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Body - 16px</p>
              <p className="text-base">This 5-day journey takes you through pristine alpine meadows, snow-capped peaks, and authentic Kashmiri culture.</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Small - 14px</p>
              <p className="text-sm text-gray-600">Starting from ₹45,000 per person | Available year-round</p>
            </div>
          </div>

          {/* Cinzel Font Showcase */}
          <div className="space-y-6 bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Cinzel Font (All Weights)</h3>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel Regular (400)</p>
              <h1 className="text-5xl font-ubuntu font-normal">Your Himalayan Adventure</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel Medium (500)</p>
              <h1 className="text-5xl font-ubuntu font-medium">Discover Kashmir Valley</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel SemiBold (600)</p>
              <h1 className="text-5xl font-ubuntu font-semibold">Luxury Travel Experience</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel Bold (700)</p>
              <h1 className="text-5xl font-ubuntu font-bold">Explore The Himalayas</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel ExtraBold (800)</p>
              <h1 className="text-5xl font-ubuntu font-extrabold">Journeu Adventures</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">Cinzel Black (900)</p>
              <h1 className="text-5xl font-ubuntu font-black">Premium Tours</h1>
            </div>

            {/* Different Sizes */}
            <div className="mt-8 pt-8 border-t">
              <h4 className="text-lg font-bold mb-4">Cinzel at Different Sizes (Weight 700)</h4>
              <div className="space-y-4">
                <p className="text-6xl font-ubuntu font-bold">72px Heading</p>
                <p className="text-5xl font-ubuntu font-bold">60px Heading</p>
                <p className="text-4xl font-ubuntu font-bold">48px Heading</p>
                <p className="text-3xl font-ubuntu font-bold">36px Heading</p>
                <p className="text-2xl font-ubuntu font-bold">24px Heading</p>
                <p className="text-xl font-ubuntu font-bold">20px Text</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section id="spacing" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
          <div className="bg-white p-8 rounded-lg">
            <div className="space-y-4">
              {[
                { size: '4px', name: 'space-1', class: 'w-1' },
                { size: '8px', name: 'space-2', class: 'w-2' },
                { size: '12px', name: 'space-3', class: 'w-3' },
                { size: '16px', name: 'space-4', class: 'w-4' },
                { size: '24px', name: 'space-6', class: 'w-6' },
                { size: '32px', name: 'space-8', class: 'w-8' },
                { size: '48px', name: 'space-12', class: 'w-12' },
                { size: '64px', name: 'space-16', class: 'w-16' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className={`${item.class} h-8 bg-[#1BA5B8]`} />
                  <span className="text-sm font-mono">{item.name}</span>
                  <span className="text-sm text-gray-500">({item.size})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small Button</Button>
                <Button size="default">Default Button</Button>
                <Button size="lg">Large Button</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Outline Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="outline" size="lg">Large</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Ghost Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="ghost" size="sm">Small</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghost" size="lg">Large</Button>
              </div>
            </div>

            {/* Destructive Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Destructive Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="destructive" size="sm">Delete</Button>
                <Button variant="destructive">Cancel Booking</Button>
                <Button variant="destructive" size="lg">Remove</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Cards</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
              <p className="text-gray-600">This is a basic card with padding and shadow.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Hover Card</h3>
              <p className="text-gray-600">This card has a hover effect with enhanced shadow.</p>
            </Card>
            
            <Card className="p-0 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Image Card</h3>
                <p className="text-gray-600">Card with image header.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Forms Section */}
        <section id="forms" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Form Elements</h2>
          
          <div className="bg-white p-8 rounded-lg max-w-2xl">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Text Input</label>
                <Input type="text" placeholder="Enter your name" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Input</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Disabled Input</label>
                <Input type="text" placeholder="Disabled" disabled />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">With Helper Text</label>
                <Input type="text" placeholder="Username" />
                <p className="text-sm text-gray-500 mt-1">Choose a unique username</p>
              </div>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section id="badges" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Badges</h2>
          
          <div className="bg-white p-8 rounded-lg">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge className="bg-[#1BA5B8]">Brand Blue</Badge>
              <Badge className="bg-[#FFD84D] text-gray-900">Brand Yellow</Badge>
              <Badge className="bg-[#00B894]">Success</Badge>
              <Badge className="bg-[#FDCB6E] text-gray-900">Warning</Badge>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section id="shadows" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Shadows</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Shadow SM</h3>
              <p className="text-sm text-gray-600">Subtle shadow</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Shadow MD</h3>
              <p className="text-sm text-gray-600">Medium shadow</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">Shadow LG</h3>
              <p className="text-sm text-gray-600">Large shadow</p>
            </div>
          </div>
        </section>

        {/* Navbar Section */}
        <section id="navbar" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Navigation Bar</h2>
          <NavbarExample />
        </section>

        {/* Hero Sections */}
        <section id="hero" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Hero Sections</h2>
          <div className="space-y-8">
            <HeroWithSearch />
            <HeroWithVideo />
          </div>
        </section>

        {/* Search & Filter Section */}
        <section id="search" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Search & Filter Bar</h2>
          <SearchFilterExample />
        </section>

        {/* Tour Cards Section */}
        <section id="tour-cards" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Tour Package Cards</h2>
          <TourCardsExample />
        </section>

        {/* Destination Cards Section */}
        <section id="destinations" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Destination Cards</h2>
          <DestinationCardsExample />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Testimonials & Reviews</h2>
          <TestimonialsExample />
        </section>

        {/* Pricing Tables Section */}
        <section id="pricing" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Pricing Tables</h2>
          <PricingTableExample />
        </section>

        {/* Booking Widget Section */}
        <section id="booking" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Booking Widget</h2>
          <BookingWidgetExample />
        </section>

        {/* Stats Section */}
        <section id="stats" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Stats & Social Proof</h2>
          <StatsExample />
        </section>

        {/* Tour Highlights Section */}
        <section id="highlights" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
          <TourHighlightsExample />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <WhyChooseUsExample />
        </section>

        {/* CTA Banners Section */}
        <section id="cta" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Call-to-Action Banners</h2>
          <CTABannersExample />
        </section>

        {/* Trust Badges Section */}
        <section id="trust" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Payment Methods & Trust Badges</h2>
          <TrustBadgesExample />
        </section>

        {/* Tour Guides Section */}
        <section id="guides" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Tour Guide Profiles</h2>
          <TourGuidesExample />
        </section>

        {/* Map Section */}
        <section id="map" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Map Integration</h2>
          <MapExample />
        </section>

        {/* Breadcrumbs Section */}
        <section id="breadcrumbs" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Breadcrumbs</h2>
          <BreadcrumbsExample />
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Tour Comparison</h2>
          <ComparisonTableExample />
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Newsletter Signup</h2>
          <NewsletterExample />
        </section>

        {/* Blog Cards Section */}
        <section id="blog" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Blog Post Cards</h2>
          <BlogCardsExample />
        </section>

        {/* Travel Requirements Section */}
        <section id="requirements" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Travel Requirements</h2>
          <TravelRequirementsExample />
        </section>

        {/* Policy Section */}
        <section id="policy" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Safety & Cancellation Policy</h2>
          <PolicyExample />
        </section>

        {/* Related Tours Section */}
        <section id="related" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Related Tours</h2>
          <RelatedToursExample />
        </section>

        {/* Tabs Section */}
        <section id="tabs" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Tabs Component</h2>
          <TabsExample />
        </section>

        {/* Modals Section */}
        <section id="modals" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Modals & Dialogs</h2>
          <ModalsExample />
        </section>

        {/* Date Picker Section */}
        <section id="date-picker" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Date Picker & Calendar</h2>
          <DatePickerExample />
        </section>

        {/* Notifications Section */}
        <section id="notifications" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Toast Notifications</h2>
          <NotificationsExample />
        </section>

        {/* Loading States Section */}
        <section id="loading" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Loading States</h2>
          <LoadingStatesExample />
        </section>

        {/* Interactive Elements Section */}
        <section id="interactive" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Interactive Elements</h2>
          <InteractiveElementsExample />
        </section>

        {/* Enhanced Hero Section */}
        <section id="enhanced-hero" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Enhanced Hero with Decorative Elements</h2>
          <EnhancedHeroExample />
        </section>

        {/* Service Cards Section */}
        <section id="services" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Service Cards with Icons</h2>
          <ServiceCardsExample />
        </section>

        {/* Partner Logos Section */}
        <section id="partners" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Partner & Brand Logos</h2>
          <PartnerLogosExample />
        </section>

        {/* Instagram Feed Section */}
        <section id="instagram" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Instagram Feed Integration</h2>
          <InstagramFeedExample />
        </section>

        {/* Advanced Destination Cards Section */}
        <section id="advanced-destinations" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Advanced Destination Cards</h2>
          <AdvancedDestinationCardsExample />
        </section>

        {/* Features List Section */}
        <section id="features-list" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Features List with Icons</h2>
          <FeaturesListExample />
        </section>

        {/* Enhanced Tour Cards Section */}
        <section id="enhanced-tours" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Enhanced Tour Cards</h2>
          <EnhancedTourCardsExample />
        </section>

        {/* Carousel Section */}
        <section id="carousel" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Image Carousel</h2>
          <CarouselExample />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Video & Image Gallery</h2>
          <GalleryExample />
        </section>

        {/* Accordion Section */}
        <section id="accordion" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Accordion</h2>
          <AccordionExample />
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Itinerary Details</h2>
          <ItineraryExample />
        </section>

        {/* Footer Section */}
        <section id="footer" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Footer</h2>
          <FooterExample />
        </section>
      </div>
    </div>
  );
}

// Navbar Component
function NavbarExample() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-lg" />
            <span className="text-xl font-bold">Journeu</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Tours', 'Destinations', 'Blog', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-[#1BA5B8] transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
            <Button size="sm">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-3"
          >
            {['Tours', 'Destinations', 'Blog', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-gray-700 hover:text-[#1BA5B8]"
              >
                {item}
              </a>
            ))}
            <Button className="w-full">Book Now</Button>
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
}

// Hero with Search
function HeroWithSearch() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-[500px] rounded-xl overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#1BA5B8]" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-center mb-4"
        >
          Your Himalayan Adventure Awaits
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-center mb-8 max-w-2xl"
        >
          Experience the magic of Kashmir&apos;s valleys, where ancient traditions meet breathtaking landscapes
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl bg-white rounded-xl p-4 shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <Input placeholder="Where to?" className="md:col-span-1" />
            <Input type="date" className="md:col-span-1" />
            <Input placeholder="2 Travelers" className="md:col-span-1" />
            <Button className="md:col-span-1 bg-[#1BA5B8] hover:bg-[#0A4D5C]">Search Tours</Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Hero with Video Background
function HeroWithVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-[400px] rounded-xl overflow-hidden bg-gray-900"
    >
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
        >
          <Play className="w-8 h-8 text-white ml-1" />
        </motion.div>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Watch Our Story</h2>
          <p className="text-lg">Discover why travelers choose Journeu</p>
        </div>
      </div>
    </motion.div>
  );
}

// Carousel Component
function CarouselExample() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { title: "Gulmarg Snow Paradise", color: "from-blue-500 to-cyan-500" },
    { title: "Kashmir Valley Views", color: "from-green-500 to-teal-500" },
    { title: "Pahalgam Adventures", color: "from-purple-500 to-pink-500" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
      {/* Carousel Container */}
      <div className="relative h-[400px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-br ${image.color} flex items-center justify-center`}
            style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
          >
            <h3 className="text-4xl font-bold text-white">{image.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
      >
        <ChevronLeft />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
      >
        <ChevronRight />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Gallery Component
function GalleryExample() {
  const galleryItems = [
    { type: 'image', title: 'Mountain View', color: 'from-blue-400 to-blue-600' },
    { type: 'video', title: 'Trek Video', color: 'from-green-400 to-green-600' },
    { type: 'image', title: 'Local Culture', color: 'from-orange-400 to-orange-600' },
    { type: 'image', title: 'Adventure', color: 'from-purple-400 to-purple-600' },
    { type: 'video', title: 'Tour Highlights', color: 'from-pink-400 to-pink-600' },
    { type: 'image', title: 'Landscapes', color: 'from-cyan-400 to-cyan-600' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative h-48 rounded-lg overflow-hidden bg-gradient-to-br ${item.color} cursor-pointer group`}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            {item.type === 'video' && (
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </motion.div>
            )}
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              {item.title}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Accordion Component
function AccordionExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            What&apos;s included in the tour package?
          </AccordionTrigger>
          <AccordionContent>
            Our tour packages include accommodation, meals (breakfast, lunch, dinner), 
            private transportation, professional guide services, activity equipment, 
            and all entrance fees to attractions mentioned in the itinerary.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            What is the cancellation policy?
          </AccordionTrigger>
          <AccordionContent>
            Free cancellation up to 30 days before departure. 50% refund for cancellations 
            15-30 days before. No refund for cancellations within 15 days of departure. 
            Travel insurance is highly recommended.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            Is travel insurance included?
          </AccordionTrigger>
          <AccordionContent>
            Travel insurance is not included but highly recommended. We can help you 
            arrange comprehensive travel insurance that covers medical emergencies, 
            trip cancellation, and lost baggage.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            What is the best time to visit Kashmir?
          </AccordionTrigger>
          <AccordionContent>
            Kashmir is beautiful year-round. March-May offers pleasant weather and blooming flowers. 
            June-August is peak summer season. September-November has stunning autumn colors. 
            December-February is perfect for snow activities and skiing in Gulmarg.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}

// Itinerary Component
function ItineraryExample() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar",
      description: "Pick up from airport, drive to hotel, check-in and welcome dinner",
      activities: ["Airport transfer", "Hotel check-in", "Welcome dinner", "Evening at leisure"],
      meals: ["Dinner"],
      media: { type: 'image', color: 'from-blue-400 to-cyan-500' },
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg",
      description: "Scenic drive through mountains, gondola ride, skiing activities",
      activities: ["Mountain drive", "Gondola ride", "Skiing lesson", "Evening bonfire"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      media: { type: 'video', color: 'from-green-400 to-teal-500' },
    },
    {
      day: 3,
      title: "Gulmarg Exploration",
      description: "Full day of adventure activities and mountain exploration",
      activities: ["Morning trek", "Local village visit", "Photography session", "Traditional music"],
      meals: ["Breakfast", "Lunch", "Dinner"],
      media: { type: 'image', color: 'from-purple-400 to-pink-500' },
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md space-y-8">
      {itinerary.map((day, index) => (
        <motion.div
          key={day.day}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 pb-8 border-l-2 border-[#1BA5B8] last:pb-0 last:border-l-0"
        >
          {/* Day Marker */}
          <div className="absolute -left-4 top-0 w-8 h-8 bg-[#1BA5B8] rounded-full flex items-center justify-center text-white font-bold text-sm">
            {day.day}
          </div>

          {/* Content */}
          <div className="ml-4">
            <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
            <p className="text-gray-600 mb-4">{day.description}</p>

            {/* Media - Image or Video */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`relative h-48 rounded-lg overflow-hidden bg-gradient-to-br ${day.media.color} mb-4 group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                {day.media.type === 'video' && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                )}
              </div>
              <div className="absolute bottom-3 left-3 text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                {day.media.type === 'video' ? 'Video Highlights' : 'Day Photos'}
              </div>
            </motion.div>

            {/* Activities */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Activities:</h4>
              <div className="flex flex-wrap gap-2">
                {day.activities.map((activity, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Meals */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">Meals:</span>
              {day.meals.join(", ")}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Footer Component
function FooterExample() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#0A4D5C] text-white rounded-lg overflow-hidden w-full h-[80vh]"
    >
      <div className="h-full px-8 py-16 flex flex-col justify-between">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1BA5B8] to-[#FFD84D] rounded-lg" />
              <span className="text-2xl font-bold">Journeu</span>
            </div>
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              Travel Finds You. Experience luxury adventure tours in Kashmir and the Himalayas.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base text-gray-300">
              {['About Us', 'Tours', 'Destinations', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="hover:text-[#FFD84D] transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Tours</h4>
            <ul className="space-y-3 text-base text-gray-300">
              {['Gulmarg 5 Days', 'Kashmir Valley Tour', 'Ladakh Expedition', 'Pahalgam Trek', 'Srinagar Houseboat'].map((tour) => (
                <li key={tour}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="hover:text-[#FFD84D] transition-colors"
                  >
                    {tour}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Srinagar, Kashmir, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>contact@journeu.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 6005 571959</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-gray-300">
          <p>© 2025 Journeu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFD84D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFD84D] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FFD84D] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

// Tabs Component
function TabsExample() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "reviews", label: "Reviews (124)" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Tab Headers */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-[#1BA5B8] border-b-2 border-[#1BA5B8]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1BA5B8]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4">Tour Overview</h3>
            <p className="text-gray-600">
              Experience the breathtaking beauty of Kashmir with our carefully curated 5-day tour package.
              Visit iconic destinations, enjoy local cuisine, and create unforgettable memories.
            </p>
          </motion.div>
        )}
        {activeTab === "itinerary" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4">Day-by-Day Itinerary</h3>
            <p className="text-gray-600">Detailed schedule of activities for each day of your tour...</p>
          </motion.div>
        )}
        {activeTab === "reviews" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <p className="text-gray-600">See what our travelers are saying about this tour...</p>
          </motion.div>
        )}
        {activeTab === "faq" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">Find answers to common questions about this tour...</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Modals Component
function ModalsExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Quick View Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Quick View</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Gulmarg Snow Paradise</DialogTitle>
            <DialogDescription>5 Days • Starting from ₹45,000</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-4" />
            <p className="text-gray-600">Experience the magic of Gulmarg with skiing, gondola rides, and stunning mountain views.</p>
          </div>
          <DialogFooter>
            <Button variant="outline">Learn More</Button>
            <Button>Book Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Login Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In to Journeu</DialogTitle>
            <DialogDescription>Enter your credentials to access your account</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button className="w-full">Sign In</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Confirmation</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your booking.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Date Picker Component
function DatePickerExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: undefined,
  });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Single Date Picker */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Single Date Selection</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? date.toLocaleDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <p className="text-sm text-gray-500 mt-4">Select your preferred tour start date</p>
        </Card>
      </motion.div>

      {/* Date Range Picker */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Date Range Selection</h3>
          <div className="space-y-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  {dateRange.from ? dateRange.from.toLocaleDateString() : "Start date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={dateRange.from}
                  onSelect={(date) => setDateRange({ ...dateRange, from: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  {dateRange.to ? dateRange.to.toLocaleDateString() : "End date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={dateRange.to}
                  onSelect={(date) => setDateRange({ ...dateRange, to: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-sm text-gray-500 mt-4">Select your travel dates</p>
        </Card>
      </motion.div>
    </div>
  );
}

// Notifications Component
function NotificationsExample() {
  const notifications = [
    { type: "success", icon: CheckCircle2, title: "Booking Confirmed", description: "Your tour has been successfully booked!", color: "text-green-600" },
    { type: "error", icon: XCircle, title: "Payment Failed", description: "Unable to process payment. Please try again.", color: "text-red-600" },
    { type: "warning", icon: AlertCircle, title: "Limited Availability", description: "Only 3 spots left for this tour!", color: "text-yellow-600" },
    { type: "info", icon: Info, title: "New Destination", description: "Check out our new Ladakh tour packages.", color: "text-blue-600" },
  ];

  return (
    <div className="space-y-4">
      {notifications.map((notif, index) => {
        const Icon = notif.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4"
          >
            <div className={`${notif.color} flex-shrink-0`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{notif.title}</h4>
              <p className="text-sm text-gray-600">{notif.description}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

// Loading States Component
function LoadingStatesExample() {
  return (
    <div className="space-y-8">
      {/* Skeleton Card */}
      <div>
        <h3 className="text-lg font-bold mb-4">Loading Tour Cards</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Loading Spinner */}
      <div>
        <h3 className="text-lg font-bold mb-4">Loading Spinners</h3>
        <div className="flex items-center gap-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#1BA5B8] border-t-transparent rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-[#FFD84D] border-t-transparent rounded-full"
          />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                className="w-3 h-3 bg-[#1BA5B8] rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <h3 className="text-lg font-bold mb-4">Progress Indicators</h3>
        <Card className="p-6 space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Booking Progress</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1 }}
                className="h-full bg-[#1BA5B8]"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Profile Completion</span>
              <span>45%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 1 }}
                className="h-full bg-[#FFD84D]"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// Interactive Elements Component
function InteractiveElementsExample() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Social Share */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Social Share Buttons</h3>
        <div className="flex gap-3">
          {['Facebook', 'Twitter', 'WhatsApp', 'Email'].map((platform) => (
            <motion.button
              key={platform}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#1BA5B8] hover:text-white transition-colors flex items-center justify-center"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          ))}
        </div>
      </Card>

      {/* Wishlist & Like */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Wishlist & Favorites</h3>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              liked ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-300 hover:border-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            {liked ? 'Liked' : 'Like'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              saved ? 'border-[#1BA5B8] bg-blue-50 text-[#1BA5B8]' : 'border-gray-300 hover:border-[#1BA5B8]'
            }`}
          >
            <Star className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved' : 'Save'}
          </motion.button>
        </div>
      </Card>

      {/* Image Lightbox Preview */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Image Lightbox</h3>
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg cursor-pointer flex items-center justify-center text-white font-semibold"
            >
              Click to View Full Screen
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Full Screen Image</DialogTitle>
            </DialogHeader>
            <div className="h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg" />
          </DialogContent>
        </Dialog>
      </Card>

      {/* Live Chat Widget */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Live Chat Widget</h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#1BA5B8] rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer"
        >
          <span className="text-2xl">💬</span>
        </motion.div>
        <p className="text-sm text-gray-600">Floating chat button (positioned at bottom-right)</p>
      </Card>
    </div>
  );
}

// Enhanced Hero Component
function EnhancedHeroExample() {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#1BA5B8]">
      {/* Decorative Background Shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFD84D]/20 rounded-full blur-3xl"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#FFD84D] font-semibold mb-3"
            >
              Making The World Your Playground
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Unrivaled expertise for unique travel experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-white/90"
            >
              We're here to take you there dream travels
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-white text-[#1BA5B8] hover:bg-gray-100">
                Let's Explore
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Packages
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative z-10 w-full h-96 bg-gradient-to-br from-blue-300 to-purple-400 rounded-2xl shadow-2xl" />
            {/* Floating Decorative Shape */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-32 h-32 bg-[#FFD84D] rounded-full opacity-30 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-white rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Service Cards Component
function ServiceCardsExample() {
  const services = [
    { number: "01", icon: Users, title: "Group Tour Planning", description: "Arrange various types of tour for our customers with adventure" },
    { number: "02", icon: Plane, title: "Rail Passes", description: "We arrange various types of tour and trip around the world" },
    { number: "03", icon: Hotel, title: "Flight Reservations", description: "Our Professional guides are always ready to guide you professionally" },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1BA5B8] font-semibold mb-2"
        >
          World Class Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Which Services We Provide
        </motion.h2>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 text-center relative overflow-hidden group cursor-pointer">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#1BA5B8]/10 rounded-full flex items-center justify-center font-bold text-[#1BA5B8] group-hover:bg-[#1BA5B8] group-hover:text-white transition-colors">
                  {service.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1BA5B8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                {/* Decorative Shape */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FFD84D]/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Partner Logos Component
function PartnerLogosExample() {
  const partners = [
    { name: "TripAdvisor", color: "from-green-400 to-green-600" },
    { name: "Booking.com", color: "from-blue-500 to-blue-700" },
    { name: "Expedia", color: "from-yellow-400 to-orange-500" },
    { name: "Airbnb", color: "from-pink-400 to-red-500" },
    { name: "Kayak", color: "from-orange-400 to-red-600" },
    { name: "Agoda", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="bg-white rounded-lg p-12">
      <h3 className="text-center text-lg text-gray-600 mb-8">Trusted By Leading Travel Brands</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`aspect-square bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-sm text-center p-4 cursor-pointer`}
          >
            {partner.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Instagram Feed Component
function InstagramFeedExample() {
  const posts = [
    { color: "from-pink-400 to-purple-500" },
    { color: "from-blue-400 to-cyan-500" },
    { color: "from-green-400 to-teal-500" },
    { color: "from-orange-400 to-red-500" },
    { color: "from-purple-400 to-pink-500" },
    { color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Follow Us on Instagram</h3>
          <p className="text-gray-600">@journeu_travels</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Instagram className="w-5 h-5" />
          Follow
        </Button>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`aspect-square bg-gradient-to-br ${post.color} rounded-lg cursor-pointer relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Advanced Destination Cards Component
function AdvancedDestinationCardsExample() {
  const destinations = [
    { name: "Spain", places: 6, image: "from-orange-400 to-red-500" },
    { name: "India", places: 10, image: "from-green-400 to-teal-600" },
    { name: "Japan", places: 8, image: "from-pink-400 to-purple-500" },
    { name: "Thailand", places: 12, image: "from-blue-400 to-cyan-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1BA5B8] font-semibold mb-2"
        >
          Most Visited Locations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Choose Your Locations
        </motion.h2>
      </div>

      {/* Destination Carousel */}
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-6">
          {destinations.slice(currentIndex, currentIndex + 2).map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.image}`} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-lg">{dest.places} Visited Place{dest.places > 1 ? 's' : ''}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 2))}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentIndex(Math.min(destinations.length - 2, currentIndex + 2))}
            disabled={currentIndex >= destinations.length - 2}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="text-center mt-6">
          <Button variant="outline">Discover More Cities</Button>
        </div>
      </div>
    </div>
  );
}

// Features List Component
function FeaturesListExample() {
  const features = [
    { icon: Shield, title: "No Booking Fee Rate Guarantee", description: "Best price guarantee on all bookings" },
    { icon: Clock, title: "24/7 Emergency Helpline", description: "Round the clock customer support" },
    { icon: Award, title: "Expert Travel Guides", description: "Professional and certified tour guides" },
    { icon: TrendingUp, title: "Best Price Guarantee", description: "Competitive pricing without compromising quality" },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Discover The Beauty Of Nature
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Journeu is one of the most popular Travel agency for those who want to explore the world and try to make adventure
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#1BA5B8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Button size="lg">Get In Touch</Button>
      </div>
    </div>
  );
}

// Enhanced Tour Cards Component
function EnhancedTourCardsExample() {
  const tours = [
    { title: "Japan's Golden Route: 10-Day Cultural Journey", rating: 4.8, reviews: 30, price: 550, image: "from-red-400 to-pink-500" },
    { title: "London In 5 Days: Royal Highlights Tour", rating: 4.8, reviews: 30, price: 213, image: "from-blue-400 to-indigo-500" },
    { title: "Peru In 7 Days: Machu Picchu And Sacred Valley", rating: 4.8, reviews: 30, price: 364, image: "from-green-400 to-emerald-500" },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1BA5B8] font-semibold mb-2"
        >
          Featured Tour
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Most Popular Tours
        </motion.h2>
      </div>

      {/* Tour Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden cursor-pointer group">
              {/* Image */}
              <div className={`h-56 bg-gradient-to-br ${tour.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                    <span className="font-bold">{tour.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">Overall Reviews</span>
                  <Badge variant="outline" className="text-xs">({tour.reviews} Reviews)</Badge>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-4 line-clamp-2 group-hover:text-[#1BA5B8] transition-colors">
                  {tour.title}
                </h3>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#1BA5B8]">${tour.price}</span>
                    <span className="text-gray-500"> /Person</span>
                  </div>
                  <Button size="sm">Book Now</Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg">More Listings</Button>
      </div>
    </div>
  );
}

// Search & Filter Component
function SearchFilterExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="space-y-4">
        <div className="grid md:grid-cols-4 gap-4">
          <Input placeholder="Search destinations..." />
          <Input type="date" placeholder="Start Date" />
          <Input type="date" placeholder="End Date" />
          <Input placeholder="Budget" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">All Tours</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">Adventure</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">Cultural</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">Family</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">Luxury</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#1BA5B8] hover:text-white">Budget</Badge>
        </div>
        <Button className="w-full md:w-auto">Apply Filters</Button>
      </div>
    </motion.div>
  );
}

// Tour Cards Component
function TourCardsExample() {
  const tours = [
    { title: "Gulmarg Snow Paradise", destination: "Kashmir", duration: "5 Days", price: "₹45,000", rating: 4.8, reviews: 124, image: "from-blue-500 to-cyan-500" },
    { title: "Kashmir Valley Explorer", destination: "Kashmir", duration: "7 Days", price: "₹62,000", rating: 4.9, reviews: 89, image: "from-green-500 to-teal-500" },
    { title: "Himalayan Adventure Trek", destination: "Himachal", duration: "6 Days", price: "₹55,000", rating: 4.7, reviews: 156, image: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tours.map((tour, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden cursor-pointer group">
            <div className={`h-48 bg-gradient-to-br ${tour.image} relative`}>
              <div className="absolute top-3 right-3">
                <Badge className="bg-[#FFD84D] text-gray-900">Bestseller</Badge>
              </div>
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-white/90 text-gray-900">{tour.destination}</Badge>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#1BA5B8] transition-colors">{tour.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(tour.rating) ? 'fill-[#FFD84D] text-[#FFD84D]' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{tour.rating} ({tour.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{tour.duration}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Starting from</span>
                  <p className="text-2xl font-bold text-[#1BA5B8]">{tour.price}</p>
                </div>
                <Button size="sm">View Details</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Destination Cards Component
function DestinationCardsExample() {
  const destinations = [
    { name: "Kashmir Valley", tours: 24, image: "from-blue-400 to-blue-600" },
    { name: "Gulmarg", tours: 18, image: "from-green-400 to-green-600" },
    { name: "Ladakh", tours: 15, image: "from-orange-400 to-orange-600" },
    { name: "Pahalgam", tours: 12, image: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {destinations.map((dest, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative h-64 rounded-lg overflow-hidden bg-gradient-to-br ${dest.image} cursor-pointer group`}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
            <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
            <p className="text-sm">{dest.tours} Tours Available</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Testimonials Component
function TestimonialsExample() {
  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Amazing experience! The tour was well-organized, and our guide was incredibly knowledgeable. Kashmir is truly paradise on Earth.", tour: "Kashmir Valley Tour", verified: true },
    { name: "Rajesh Kumar", location: "Delhi", rating: 5, text: "Best vacation ever! From accommodation to activities, everything was perfect. Highly recommend Journeu for Himalayan adventures.", tour: "Gulmarg Adventure", verified: true },
    { name: "Anita Desai", location: "Bangalore", rating: 4, text: "Wonderful family trip. Our kids loved every moment. The itinerary was well-paced and included activities for all ages.", tour: "Family Kashmir Package", verified: true },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-[#FFD84D] text-[#FFD84D]' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center text-white font-bold">
                {testimonial.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{testimonial.name}</p>
                  {testimonial.verified && <Badge variant="outline" className="text-xs">✓ Verified</Badge>}
                </div>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs text-gray-400">{testimonial.tour}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Pricing Table Component
function PricingTableExample() {
  const plans = [
    { name: "Standard", price: "₹45,000", features: ["3-Star Hotels", "Breakfast Included", "Group Transport", "Basic Activities", "Tour Guide"], popular: false },
    { name: "Deluxe", price: "₹65,000", features: ["4-Star Hotels", "All Meals Included", "Private Transport", "Premium Activities", "Personal Guide", "Travel Insurance"], popular: true },
    { name: "Luxury", price: "₹95,000", features: ["5-Star Hotels", "Fine Dining", "Luxury Transport", "Exclusive Activities", "Personal Concierge", "Full Insurance", "Airport Lounge"], popular: false },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`p-6 relative ${plan.popular ? 'border-2 border-[#1BA5B8]' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#1BA5B8]">Most Popular</Badge>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1BA5B8]">{plan.price}</span>
              <span className="text-gray-500">/person</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Choose Plan</Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Booking Widget Component
function BookingWidgetExample() {
  const [step, setStep] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= num ? 'bg-[#1BA5B8] text-white' : 'bg-gray-200 text-gray-400'}`}>
                {num}
              </div>
              {num < 3 && <div className={`w-24 h-1 ${step > num ? 'bg-[#1BA5B8]' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className={step >= 1 ? 'text-[#1BA5B8] font-semibold' : 'text-gray-400'}>Tour Details</span>
          <span className={step >= 2 ? 'text-[#1BA5B8] font-semibold' : 'text-gray-400'}>Personal Info</span>
          <span className={step >= 3 ? 'text-[#1BA5B8] font-semibold' : 'text-gray-400'}>Payment</span>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Check-in Date</label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Number of Travelers</label>
              <Input type="number" placeholder="2" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Select Package</label>
            <select className="w-full border rounded-md p-2">
              <option>Standard Package</option>
              <option>Deluxe Package</option>
              <option>Luxury Package</option>
            </select>
          </div>
          <Button className="w-full" onClick={() => setStep(2)}>Continue</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name</label>
              <Input placeholder="John Doe" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Phone Number</label>
            <Input placeholder="+91 XXXXXXXXXX" />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button className="flex-1" onClick={() => setStep(3)}>Continue</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Package:</span>
                <span className="font-medium">Deluxe</span>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium">5 Days</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-[#1BA5B8]">₹1,30,000</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">Confirm Booking</Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Stats Component
function StatsExample() {
  const stats = [
    { number: "500+", label: "Tours Completed" },
    { number: "200+", label: "Happy Travelers" },
    { number: "20+", label: "Destinations" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-lg p-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-5xl font-bold mb-2">{stat.number}</p>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Tour Highlights Component
function TourHighlightsExample() {
  const highlights = [
    { icon: Users, title: "Expert Guides", description: "Professional local guides" },
    { icon: MapPin, title: "Best Locations", description: "Handpicked destinations" },
    { icon: Calendar, title: "Flexible Dates", description: "Book at your convenience" },
    { icon: Star, title: "5-Star Rated", description: "Excellent reviews" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {highlights.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1BA5B8]/10 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#1BA5B8]" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

// Why Choose Us Component
function WhyChooseUsExample() {
  const reasons = [
    { title: "Personalized Experiences", description: "Every tour is tailored to your preferences and interests." },
    { title: "Safety First", description: "Comprehensive safety measures and 24/7 support during your journey." },
    { title: "Best Price Guarantee", description: "We offer the most competitive prices without compromising quality." },
    { title: "Local Expertise", description: "Our team knows Kashmir and Himalayas like the back of their hand." },
  ];

  return (
    <div className="bg-white rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-[#1BA5B8] text-white flex items-center justify-center font-bold flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// CTA Banners Component
function CTABannersExample() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] rounded-lg p-12 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">Ready for Your Adventure?</h2>
        <p className="text-xl mb-6">Book your Kashmir tour today and create memories that last a lifetime</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-[#FFD84D] text-gray-900 hover:bg-yellow-400">Book Now</Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">Get Quote</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#FFD84D] rounded-lg p-8 flex items-center justify-between"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Special Offer: 20% Off Winter Tours</h3>
          <p className="text-gray-700">Limited time offer. Book before December 31st</p>
        </div>
        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">Claim Offer</Button>
      </motion.div>
    </div>
  );
}

// Trust Badges Component
function TrustBadgesExample() {
  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-center text-lg font-semibold mb-6">Secure Payment Methods</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-8">
        {['Visa', 'Mastercard', 'PayPal', 'UPI', 'Net Banking', 'Wallet'].map((method, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center font-semibold text-gray-600 text-sm"
          >
            {method}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-center">
        {['SSL Secure', 'Verified Business', '100% Refund', '24/7 Support'].map((badge, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600">✓</span>
            </div>
            <span className="font-medium">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tour Guides Component
function TourGuidesExample() {
  const guides = [
    { name: "Ahmed Khan", role: "Senior Guide", experience: "15 years", languages: "English, Hindi, Kashmiri", tours: 500 },
    { name: "Neha Sharma", role: "Adventure Specialist", experience: "8 years", languages: "English, Hindi", tours: 320 },
    { name: "Ravi Kumar", role: "Cultural Expert", experience: "12 years", languages: "English, Hindi, Urdu", tours: 450 },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {guides.map((guide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center text-white text-3xl font-bold">
              {guide.name[0]}
            </div>
            <h3 className="font-bold text-lg mb-1">{guide.name}</h3>
            <p className="text-[#1BA5B8] text-sm mb-3">{guide.role}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Experience:</strong> {guide.experience}</p>
              <p><strong>Languages:</strong> {guide.languages}</p>
              <p><strong>Tours Led:</strong> {guide.tours}+</p>
            </div>
            <Button variant="outline" size="sm" className="mt-4">View Profile</Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Map Component
function MapExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-96 flex items-center justify-center text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>
      <div className="relative z-10 text-center">
        <MapPin className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Interactive Tour Map</h3>
        <p>Explore destinations and routes</p>
        <Badge className="mt-4 bg-white text-gray-900">Integrate with Google Maps / Mapbox</Badge>
      </div>
    </motion.div>
  );
}

// Breadcrumbs Component
function BreadcrumbsExample() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-4"
    >
      <div className="flex items-center gap-2 text-sm">
        <a href="#" className="text-[#1BA5B8] hover:underline">Home</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-[#1BA5B8] hover:underline">Tours</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="text-[#1BA5B8] hover:underline">Kashmir</a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-600">Gulmarg Snow Paradise</span>
      </div>
    </motion.div>
  );
}

// Comparison Table Component
function ComparisonTableExample() {
  const tours = [
    { name: "Gulmarg Snow", duration: "5 Days", price: "₹45,000", rating: 4.8, meals: "Breakfast", transport: "Shared", guide: "Group" },
    { name: "Kashmir Valley", duration: "7 Days", price: "₹62,000", rating: 4.9, meals: "All Meals", transport: "Private", guide: "Personal" },
    { name: "Himalayan Trek", duration: "6 Days", price: "₹55,000", rating: 4.7, meals: "All Meals", transport: "Shared", guide: "Group" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Tour</th>
              <th className="px-6 py-4 text-left font-semibold">Duration</th>
              <th className="px-6 py-4 text-left font-semibold">Price</th>
              <th className="px-6 py-4 text-left font-semibold">Rating</th>
              <th className="px-6 py-4 text-left font-semibold">Meals</th>
              <th className="px-6 py-4 text-left font-semibold">Transport</th>
              <th className="px-6 py-4 text-left font-semibold">Guide</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{tour.name}</td>
                <td className="px-6 py-4">{tour.duration}</td>
                <td className="px-6 py-4 text-[#1BA5B8] font-bold">{tour.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                    {tour.rating}
                  </div>
                </td>
                <td className="px-6 py-4">{tour.meals}</td>
                <td className="px-6 py-4">{tour.transport}</td>
                <td className="px-6 py-4">{tour.guide}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// Newsletter Component
function NewsletterExample() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] rounded-lg p-12 text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-lg mb-6">Get exclusive deals, travel tips, and destination guides delivered to your inbox</p>
      <div className="max-w-md mx-auto flex gap-3">
        <Input type="email" placeholder="Enter your email" className="bg-white" />
        <Button size="lg" className="bg-[#FFD84D] text-gray-900 hover:bg-yellow-400">Subscribe</Button>
      </div>
      <p className="text-sm mt-4 text-white/80">Join 10,000+ travelers. Unsubscribe anytime.</p>
    </motion.div>
  );
}

// Blog Cards Component
function BlogCardsExample() {
  const posts = [
    { title: "10 Must-Visit Places in Kashmir", category: "Travel Guide", date: "Dec 15, 2024", readTime: "5 min read", image: "from-blue-400 to-blue-600" },
    { title: "Best Time to Visit Gulmarg", category: "Tips & Tricks", date: "Dec 10, 2024", readTime: "3 min read", image: "from-green-400 to-green-600" },
    { title: "Kashmir Travel Safety Guide", category: "Safety", date: "Dec 5, 2024", readTime: "7 min read", image: "from-orange-400 to-orange-600" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden cursor-pointer group">
            <div className={`h-48 bg-gradient-to-br ${post.image}`} />
            <div className="p-6">
              <Badge variant="outline" className="mb-3">{post.category}</Badge>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#1BA5B8] transition-colors">{post.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Travel Requirements Component
function TravelRequirementsExample() {
  const requirements = [
    { title: "Visa Requirements", description: "Indian citizens don't need visa. International travelers need Indian visa.", icon: "📄" },
    { title: "Weather & Climate", description: "Winter (Dec-Feb): -2°C to 10°C. Summer (May-Aug): 15°C to 30°C.", icon: "🌤️" },
    { title: "What to Pack", description: "Winter: Heavy woolens, jackets. Summer: Light woolens, comfortable shoes.", icon: "🎒" },
    { title: "Health & Safety", description: "Carry basic medicines. Stay hydrated. Follow guide instructions.", icon: "🏥" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {requirements.map((req, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{req.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-2">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Policy Component
function PolicyExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            Safety Measures
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>24/7 emergency support and assistance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Experienced guides with first-aid training</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Regular vehicle maintenance and safety checks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Comprehensive travel insurance included</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">↩️</span>
            Cancellation Policy
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-bold text-green-600">100%</span>
              <span>refund for cancellations 30+ days before departure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-yellow-600">50%</span>
              <span>refund for cancellations 15-30 days before departure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-red-600">0%</span>
              <span>refund for cancellations within 15 days of departure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">ℹ️</span>
              <span>Travel insurance recommended for full coverage</span>
            </li>
          </ul>
        </Card>
      </motion.div>
    </div>
  );
}

// Related Tours Component
function RelatedToursExample() {
  const relatedTours = [
    { title: "Pahalgam Valley Tour", duration: "4 Days", price: "₹38,000", image: "from-green-400 to-teal-500" },
    { title: "Sonamarg Glacier Trek", duration: "3 Days", price: "₹32,000", image: "from-blue-400 to-cyan-500" },
    { title: "Dal Lake Houseboat", duration: "2 Days", price: "₹25,000", image: "from-purple-400 to-pink-500" },
    { title: "Srinagar Heritage Walk", duration: "1 Day", price: "₹8,000", image: "from-orange-400 to-red-500" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">You Might Also Like</h3>
        <a href="#" className="text-[#1BA5B8] hover:underline text-sm font-medium">View All Tours →</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedTours.map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden cursor-pointer">
              <div className={`h-32 bg-gradient-to-br ${tour.image}`} />
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">{tour.title}</h4>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{tour.duration}</span>
                  <span className="font-bold text-[#1BA5B8]">{tour.price}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Color Swatch Component
function ColorSwatch({ color, name, variable }: { color: string; name: string; variable?: string }) {
  return (
    <div className="space-y-2">
      <div 
        className="h-24 rounded-lg border border-gray-200" 
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500 font-mono">{color}</p>
        {variable && (
          <p className="text-xs text-gray-400 font-mono">{variable}</p>
        )}
      </div>
    </div>
  );
}
