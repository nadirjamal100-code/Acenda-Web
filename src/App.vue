<script setup>
import Navbar from './components/Navbar.vue'
import HeroSearch from './components/HeroSearch.vue'
import WhyChoose from './components/WhyChoose.vue'
import Partners from './components/Partners.vue'
import TopBook from './components/TopBook.vue'
import ExploreMaldives from './components/ExploreMaldives.vue'
import FeatureNews from './components/FeatureNews.vue'
import Testimonials from './components/Testimonials.vue'
import Newsletter from './components/Newsletter.vue'
import SiteFooter from './components/SiteFooter.vue'
import DestinationsPage from './components/DestinationsPage.vue'
import DestinationDetailsPage from './components/DestinationDetailsPage.vue'
import StayDetailsPage from './components/StayDetailsPage.vue'
import NewsPage from './components/NewsPage.vue'
import NewsDetailPage from './components/NewsDetailPage.vue'
import AboutPage from './components/AboutPage.vue'
import FaqPage from './components/FaqPage.vue'
import ContactPage from './components/ContactPage.vue'
import CursorFollower from './components/CursorFollower.vue'
const currentPath = window.location.pathname.replace(/\/+$/, '')
const isDestinations = currentPath === '/destinations'
const isDestinationDetail = currentPath.startsWith('/destinations/')
const isStayDetail = currentPath.startsWith('/stays/')
const isNewsPage = currentPath === '/news'
const isBlogPage = currentPath === '/blog'
const isNewsDetail = currentPath.startsWith('/news/') || currentPath.startsWith('/blog/')
const isAboutPage = currentPath === '/about'
const isFaqPage = currentPath === '/faq'
const isContactPage = currentPath === '/contact'
</script>
<template>
  <Navbar />
  <DestinationsPage v-if="isDestinations" />
  <DestinationDetailsPage v-else-if="isDestinationDetail" />
  <StayDetailsPage v-else-if="isStayDetail" />
  <NewsPage v-else-if="isNewsPage" />
  <NewsPage v-else-if="isBlogPage" />
  <NewsDetailPage v-else-if="isNewsDetail" />
  <AboutPage v-else-if="isAboutPage" />
  <FaqPage v-else-if="isFaqPage" />
  <ContactPage v-else-if="isContactPage" />
  <main v-else><HeroSearch /><WhyChoose /><Partners /><TopBook /><ExploreMaldives /><FeatureNews /><Testimonials /><Newsletter /></main>
  <SiteFooter />
  <CursorFollower />
</template>
