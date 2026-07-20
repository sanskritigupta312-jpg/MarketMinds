// ─────────────────────────────────────────────────────────────
// WEB SERVICES — 6 service cards with individual page content
// Inspired by webvoom.com, adapted for MarketMinds brand.
// ─────────────────────────────────────────────────────────────

export const webServices = [
  {
    id: 'website-design',
    slug: '/services/website-design',
    title: 'Website Design',
    tagline: 'Websites that convert visitors into customers.',
    image: '/service-website-design.png',
    icon: 'LayoutTemplate',
    short: 'Custom static, dynamic, WordPress & e-commerce websites — mobile-friendly, fast-loading, and SEO-ready from day one.',
    overview: `Your website is your 24/7 salesperson. We design and develop websites that don't just look great — they're engineered to load fast, rank on Google, and convert visitors into real business leads.

From a simple static landing page to a fully dynamic e-commerce platform, every project we ship is responsive, accessible, and built to grow with your business.`,
    types: [
      {
        title: 'Static Website',
        desc: 'Perfect for small businesses, institutes, salons, shops, personal portfolios, and local service providers. Fast, affordable, and zero maintenance.',
        features: ['Responsive & Mobile Friendly', 'Free SEO Setup', 'WhatsApp Chat Button', 'Direct Call Button', 'Social Share Buttons', 'Pop-Up & Countdown', 'Analytics Integration', 'Search Engine Submission'],
      },
      {
        title: 'Dynamic Website',
        desc: 'Ideal for medium and large businesses that need a CMS, login system, payment gateway, or e-commerce functionality.',
        features: ['All Static Features', 'CMS Admin Panel', 'Login System', 'Payment Gateway Integration', 'Lead Generation Forms', 'E-Commerce Setup', 'Live Chat + Multiple Agents', 'Full SEO & Sitemap'],
      },
      {
        title: 'WordPress Website',
        desc: 'Runs on the world\'s most popular CMS. Easy to manage, ideal for blogs, news portals, and small-to-medium businesses.',
        features: ['1200+ Premium Themes', 'Plugin Ecosystem', 'Easy Content Management', 'WooCommerce Ready', 'SEO Plugins (Yoast)', 'Regular Security Updates'],
      },
      {
        title: 'E-Commerce Website',
        desc: 'Fully functional online stores with product management, cart, checkout, and payment integration.',
        features: ['Product Catalogue', 'Shopping Cart & Checkout', 'Multiple Payment Gateways', 'Order Management', 'Discount & Coupon System', 'Mobile Commerce Ready'],
      },
    ],
    deliverables: ['UI/UX Design', 'Responsive Development', 'On-Page SEO', 'WhatsApp & Call Integration', 'Analytics Setup', 'Speed Optimisation', 'Google Search Console Submission', '1 Year Support'],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'A static website typically takes 5–7 working days. A dynamic or e-commerce site takes 2–4 weeks depending on complexity.' },
      { q: 'Will my website work on mobile?', a: 'Yes. Every website we build is fully responsive and tested across all screen sizes and browsers.' },
      { q: 'Do you provide hosting?', a: 'We can recommend and set up hosting for you, or work with your existing hosting provider.' },
    ],
  },
  {
    id: 'seo-services',
    slug: '/services/seo-services',
    title: 'SEO Services',
    tagline: 'Rank higher. Get found. Grow organically.',
    image: '/service-seo.png',
    icon: 'TrendingUp',
    short: 'Technical, on-page, and off-page SEO strategies that drive compounding organic traffic and first-page Google rankings.',
    overview: `SEO is the highest-ROI digital marketing channel — but only when done right. We build search visibility that compounds over time, driving qualified organic traffic long after the initial work is done.

Our SEO process starts with a thorough technical audit, followed by keyword research aligned to real business intent, on-page optimisation, and a white-hat authority-building strategy.`,
    types: [
      {
        title: 'On-Page SEO',
        desc: 'Optimising every element on your website pages to help Google understand and rank your content.',
        features: ['Keyword Research & Mapping', 'Title Tag & Meta Optimisation', 'Header Structure (H1–H6)', 'Content Optimisation', 'Internal Linking', 'Image Alt Tags', 'Page Speed Fixes', 'Schema Markup'],
      },
      {
        title: 'Off-Page SEO',
        desc: 'Building your website\'s authority through quality backlinks and external signals.',
        features: ['High-DA Backlink Building', 'Guest Posting', 'Business Directory Submissions', 'Brand Mentions', 'Social Signals', 'Competitor Link Analysis'],
      },
      {
        title: 'Technical SEO',
        desc: 'Fixing the technical foundations that prevent search engines from properly crawling and indexing your site.',
        features: ['Crawl Error Fixes', 'XML Sitemap Setup', 'Robots.txt Optimisation', 'Core Web Vitals', 'Mobile Usability', 'HTTPS & Security', 'Duplicate Content Audit', 'Structured Data'],
      },
      {
        title: 'Local SEO',
        desc: 'Dominate local search results and Google Maps for customers searching near you.',
        features: ['Google Business Profile Setup', 'Local Citation Building', 'Review Management', 'Local Keyword Targeting', 'NAP Consistency', '"Near Me" Optimisation'],
      },
    ],
    deliverables: ['Full SEO Audit', 'Keyword Strategy Report', 'On-Page Optimisation', 'Technical Fixes', 'Monthly Backlink Building', 'Rank Tracking Dashboard', 'Monthly Progress Report', 'Google Search Console Management'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'For low-competition keywords, you can see movement in 2–3 months. Competitive terms typically take 4–8 months. We give you a realistic timeline based on your specific keywords.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No agency can ethically guarantee specific rankings — Google\'s algorithm has too many variables. We guarantee a thorough, white-hat process and transparent reporting.' },
      { q: 'What is your SEO pricing?', a: 'Our SEO plans start from ₹12,000/month and scale based on the number of keywords and competitiveness. Contact us for a custom quote.' },
    ],
  },
  {
    id: 'digital-marketing',
    slug: '/services/digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Reach more customers across every digital channel.',
    image: '/service-digital-marketing.png',
    icon: 'Target',
    short: 'Social media marketing, Google Ads, SEO, email campaigns, and content strategy — all under one roof.',
    overview: `Digital marketing is how modern businesses grow. We combine paid and organic channels to put your brand in front of the right audience at the right time — whether that's on Google, Instagram, Facebook, or in their inbox.

Our integrated approach means every channel reinforces the others, compounding your results over time.`,
    types: [
      {
        title: 'Social Media Marketing (SMM)',
        desc: 'Paid advertising on Facebook, Instagram, LinkedIn, Twitter, and more to reach your target audience and generate leads.',
        features: ['Facebook & Instagram Ads', 'LinkedIn Campaigns', 'YouTube Ads', 'Banner & Creative Design', 'A/B Ad Testing', 'Lead Generation', 'Audience Targeting', 'Retargeting Campaigns'],
      },
      {
        title: 'Search Engine Marketing (SEM)',
        desc: 'Google Ads campaigns that put your business at the top of search results for high-intent keywords.',
        features: ['Google Search Ads', 'Google Display Ads', 'Google Shopping Ads', 'Call-Only Ads', 'YouTube Ads', 'Bing Ads', 'Conversion Tracking', 'ROAS Optimisation'],
      },
      {
        title: 'Social Media Optimisation (SMO)',
        desc: 'Managing and growing your social media presence organically — content, posting schedule, community engagement.',
        features: ['Account Setup & Branding', 'Content Calendar', 'Post Design & Copywriting', 'Hashtag Strategy', 'Community Management', 'Follower Growth', 'Brand Awareness', 'Story & Reel Creation'],
      },
      {
        title: 'Content & Email Marketing',
        desc: 'Blog posts, videos, and email sequences that attract, nurture, and convert your audience.',
        features: ['Blog Writing & Publishing', 'Email Campaign Design', 'Newsletter Setup', 'Lead Magnet Creation', 'Drip Campaign Automation', 'Open Rate Optimisation'],
      },
    ],
    deliverables: ['Channel Strategy Document', 'Ad Creative Design', 'Campaign Setup & Launch', 'Weekly Performance Reports', 'Monthly Strategy Review', 'Audience Research', 'Competitor Analysis', 'ROI Dashboard'],
    faqs: [
      { q: 'Which platforms do you advertise on?', a: 'Facebook, Instagram, Google, YouTube, LinkedIn, Twitter/X, and more — based on where your customers actually spend time.' },
      { q: 'What is the minimum ad budget?', a: 'We recommend a minimum ad spend of ₹10,000/month for meaningful results, separate from our management fee.' },
      { q: 'How do you measure campaign success?', a: 'We track leads, cost per lead, ROAS, click-through rate, and revenue — not vanity metrics like impressions.' },
    ],
  },
  {
    id: 'app-development',
    slug: '/services/app-development',
    title: 'App Development',
    tagline: 'Native & cross-platform apps your users will love.',
    image: '/service-app-dev.png',
    icon: 'Smartphone',
    short: 'Android, iOS, and cross-platform mobile apps built for performance, scalability, and real user engagement.',
    overview: `Mobile apps are no longer optional — they're how customers engage with businesses they love most. We build native and cross-platform mobile applications that are fast, intuitive, and built to solve real problems.

From ideation to App Store launch, we handle the full development lifecycle, ensuring your app is production-ready and scalable from day one.`,
    types: [
      {
        title: 'Android App Development',
        desc: 'Native Android applications built with Kotlin/Java for the best possible performance and user experience on Android devices.',
        features: ['Native Kotlin/Java', 'Material Design UI', 'Google Play Store Launch', 'Push Notifications', 'Firebase Integration', 'Offline Mode Support', 'In-App Purchases', 'Deep Linking'],
      },
      {
        title: 'iOS App Development',
        desc: 'Polished iOS apps built for iPhone and iPad, following Apple\'s Human Interface Guidelines.',
        features: ['Swift / SwiftUI', 'Apple HIG Compliant', 'App Store Launch', 'Face ID / Touch ID', 'Apple Pay Integration', 'iCloud Sync', 'ARKit Support', 'TestFlight Beta'],
      },
      {
        title: 'Cross-Platform (React Native / Flutter)',
        desc: 'Build once, deploy to both Android and iOS — cutting your development time and cost in half.',
        features: ['React Native or Flutter', 'Single Codebase', 'Native-Like Performance', '80% Cost Saving vs Two Apps', 'Hot Reload Development', 'Platform-Specific UI Elements', 'Third-Party API Integration', 'OTA Updates'],
      },
      {
        title: 'E-Commerce & On-Demand Apps',
        desc: 'Specialised apps for online stores, delivery services, booking platforms, and on-demand marketplaces.',
        features: ['Product Listing & Cart', 'Real-Time Order Tracking', 'Payment Gateway Integration', 'Rider/Vendor App', 'Admin Dashboard', 'Push Notification Alerts', 'Review & Rating System', 'Multi-Language Support'],
      },
    ],
    deliverables: ['UI/UX Wireframes', 'App Design (Figma)', 'Frontend & Backend Development', 'API Integration', 'QA & Testing', 'App Store Submission', 'Post-Launch Support', 'Performance Monitoring'],
    faqs: [
      { q: 'How long does it take to build an app?', a: 'A simple app takes 4–6 weeks. A complex app with custom backend can take 3–5 months. We\'ll give you a precise estimate after understanding your requirements.' },
      { q: 'Do you build both Android and iOS?', a: 'Yes. We can build native apps for each platform or a cross-platform app using React Native or Flutter, which runs on both.' },
      { q: 'Will you help submit to the App Store?', a: 'Yes — we handle the full submission process for both Google Play Store and Apple App Store, including screenshots and store listing copy.' },
    ],
  },
  {
    id: 'software-development',
    slug: '/services/software-development',
    title: 'Software Development',
    tagline: 'Custom software built exactly for your business.',
    image: '/service-software-dev.png',
    icon: 'Code2',
    short: 'Custom web applications, CRM, ERP, booking systems, and business automation software tailored to your exact workflow.',
    overview: `Off-the-shelf software rarely fits your business perfectly. We design and build custom software solutions that match your exact processes, integrate with your existing tools, and grow with your organisation.

Whether you need a CRM, an ERP, a booking system, or a completely bespoke business platform, we deliver maintainable, scalable code with clean documentation.`,
    types: [
      {
        title: 'Web Application Development',
        desc: 'Powerful browser-based applications for internal business operations, customer portals, or SaaS products.',
        features: ['React / Next.js Frontend', 'Node.js / PHP / Python Backend', 'PostgreSQL / MySQL Database', 'REST & GraphQL APIs', 'Role-Based Access Control', 'Real-Time Features (WebSocket)', 'Third-Party Integrations', 'Cloud Deployment (AWS/GCP)'],
      },
      {
        title: 'CRM & ERP Systems',
        desc: 'Custom customer relationship management and enterprise resource planning tools built for your team\'s workflow.',
        features: ['Lead & Pipeline Management', 'Customer Database', 'Inventory Management', 'Invoice & Billing', 'HR & Payroll Module', 'Reporting & Analytics', 'Multi-User with Roles', 'Email & SMS Notifications'],
      },
      {
        title: 'Booking & Scheduling Systems',
        desc: 'Online booking platforms for clinics, salons, tuition centres, hotels, and service businesses.',
        features: ['Online Appointment Booking', 'Calendar Management', 'Automated Reminders', 'Payment Integration', 'Staff Management', 'Customer Login Portal', 'Admin Dashboard', 'Mobile Responsive'],
      },
      {
        title: 'API Development & Integration',
        desc: 'Building and connecting APIs to automate workflows between your website, apps, and third-party services.',
        features: ['REST & GraphQL API Design', 'Payment API Integration', 'SMS & Email API', 'CRM Integrations', 'ERP Integrations', 'Webhook Setup', 'API Documentation', 'Security & Authentication'],
      },
    ],
    deliverables: ['Requirements Document', 'System Architecture Design', 'Database Schema', 'Frontend & Backend Code', 'API Documentation', 'QA & UAT', 'Deployment & Hosting', '3 Months Post-Launch Support'],
    faqs: [
      { q: 'What technologies do you use?', a: 'We primarily use React, Next.js, Node.js, PHP, Python, and PostgreSQL/MySQL — choosing the best stack for your specific use case.' },
      { q: 'Can you integrate with our existing software?', a: 'Yes. We have experience integrating with popular tools like Salesforce, HubSpot, Razorpay, Stripe, Shiprocket, and more via their APIs.' },
      { q: 'Who owns the source code?', a: 'You do. Once the project is complete and payment is settled, full source code ownership transfers to you.' },
    ],
  },
  {
    id: 'whatsapp-marketing',
    slug: '/services/whatsapp-marketing',
    title: 'SMS & WhatsApp Marketing',
    tagline: 'Reach your customers where they actually read messages.',
    image: '/service-whatsapp.png',
    icon: 'MessageCircle',
    short: 'Bulk SMS campaigns and WhatsApp Business API marketing with high open rates, instant delivery, and real conversion results.',
    overview: `SMS has a 98% open rate and WhatsApp has over 500 million daily users in India alone. These channels cut through the noise that email and social media can't — your message gets read within minutes.

We set up, manage, and optimise bulk SMS and WhatsApp marketing campaigns that drive actual enquiries, bookings, and sales for your business.`,
    types: [
      {
        title: 'Bulk SMS Marketing',
        desc: 'Send promotional and transactional SMS messages to thousands of customers in seconds.',
        features: ['Promotional SMS Campaigns', 'Transactional SMS (OTP, Alerts)', 'DLT Registration', 'Custom Sender ID', 'Scheduled Campaigns', 'Delivery Reports', 'Opt-Out Management', 'CRM Integration'],
      },
      {
        title: 'WhatsApp Business API',
        desc: 'Official WhatsApp Business API integration for automated, personalised messaging at scale.',
        features: ['Official Meta API Setup', 'Verified Business Account', 'Template Message Approval', 'Broadcast Campaigns', 'Two-Way Messaging', 'Chatbot Integration', 'Media Messages (Images, PDFs)', 'CRM Integration'],
      },
      {
        title: 'WhatsApp Automation & Chatbot',
        desc: 'Automate customer conversations, qualify leads, and answer FAQs without human intervention.',
        features: ['Keyword-Triggered Responses', 'Lead Qualification Flow', 'Product Catalogue Sharing', 'Appointment Booking via WhatsApp', 'Order Status Updates', 'Feedback Collection', 'Multi-Agent Inbox', 'Analytics Dashboard'],
      },
      {
        title: 'Campaign Strategy & Copywriting',
        desc: 'We don\'t just send messages — we craft campaigns designed to get responses and conversions.',
        features: ['Audience Segmentation', 'Message Copywriting', 'A/B Testing', 'Timing Optimisation', 'Festival & Sale Campaigns', 'Re-Engagement Campaigns', 'Performance Analytics', 'Monthly Reporting'],
      },
    ],
    deliverables: ['Account Setup & DLT Registration', 'WhatsApp Business API Integration', 'Campaign Strategy', 'Message Templates', 'Contact List Management', 'Scheduled Campaign Execution', 'Delivery & Open Reports', 'Monthly Performance Review'],
    faqs: [
      { q: 'Is bulk WhatsApp marketing legal?', a: 'Yes, via the official WhatsApp Business API through Meta\'s approved platform. We only use the official API — not unofficial bulk tools that can get your number banned.' },
      { q: 'How many messages can I send?', a: 'With the official API, you can send to unlimited contacts (subject to WhatsApp\'s quality rating system). We help you maintain a high quality score.' },
      { q: 'What is the cost per message?', a: 'WhatsApp charges per conversation (24-hour window). SMS costs depend on the operator and volume. We\'ll give you a detailed cost breakdown before we start.' },
    ],
  },
];
