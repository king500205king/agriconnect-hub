# 🌾 Farmer Crop Intelligence + Community Platform

## Overview

A clean, modern farmer-first web platform with green/earth tones, serving farmers, traders, and agri-businesses. Features crop intelligence, community Q&A with full authentication, mandi rates, and transport support — all starting with static sample data.

---

## Pages & Features

### 1. Landing Page

- Hero section with tagline and call-to-action to explore crops or join the community
- Quick-access cards: Crop Library, Mandi Rates, Community Q&A, Transport Support
- Stats/highlights section (e.g., "500+ Crops", "10K+ Farmers")

### 2. Authentication (Sign Up / Login)

- Email-based signup and login using Supabase Auth
- User profile with name, location, and farming type (stored in a profiles table)
- Protected routes for posting in community Q&A

### 3. Crop Library

- Searchable and filterable catalog of crops (rice, wheat, cotton, etc.)
- Each crop detail page includes:
  - Overview, growing season, soil type, climate requirements
  - Best practices (sowing, irrigation, pest control, harvesting)
  - Expected yield and common diseases
- Data is static/sample, structured for easy future expansion

### 4. Mandi Rates Dashboard

- Table/card view of commodity prices across different mandis
- Filter by crop, state, and mandi name
- Price trend indicators (up/down from previous)
- Static sample data mimicking real mandi rate structure

### 5. Community Q&A Forum

- Authenticated users can post questions and answers
- Categories/tags (e.g., pest control, soil health, irrigation)
- Upvote system for helpful answers
- Search and filter questions
- User's own activity view (my questions, my answers)

### 6. Transport Support

- Directory of transport services by region (static data)
- Details: vehicle type, capacity, contact info, service area
- Simple search/filter by location and vehicle type

### 7. User Dashboard

- Overview of user's Q&A activity
- Bookmarked crops and saved mandi rates
- Profile settings

---

## Design & UX

- **Color palette**: Earthy greens, warm browns, clean whites
- **Typography**: Clear, readable fonts with generous spacing
- **Layout**: Responsive design, mobile-friendly, card-based layouts
- **Navigation**: Top navbar with links to all major sections

## Backend

- **Supabase** (via Lovable Cloud) for authentication, user profiles, and community Q&A data
- Database tables: profiles, crops, questions, answers, mandi_rates, transport_services, user_roles
- Row-Level Security on all user-facing tables

&nbsp;

&nbsp;

Also include 

- Crop library: seasonality, soil, irrigation, pests, fertilizer schedules.
- **▸**Community: Q&A, local language support, expert answers.
- **▸**Live mandi rates by district/market + price trends (optional).
- **▸**Transportation: connect to logistics providers or request pickup flow.

&nbsp;