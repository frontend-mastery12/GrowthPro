"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  Play,
  Star,
  Quote,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap")
        const { ScrollTrigger } = await import("gsap/ScrollTrigger")

        gsap.registerPlugin(ScrollTrigger)

        // Hero animations
        if (heroRef.current) {
          gsap.fromTo(
            heroRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        }

        // Services cards animation
        if (servicesRef.current) {
          gsap.fromTo(
            servicesRef.current.querySelectorAll(".service-card"),
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Results section animation
        if (resultsRef.current) {
          gsap.fromTo(
            resultsRef.current.querySelectorAll(".result-item"),
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: resultsRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Testimonials animation
        if (testimonialsRef.current) {
          gsap.fromTo(
            testimonialsRef.current.querySelectorAll(".testimonial-card"),
            { opacity: 0, y: 40, rotationY: 15 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Contact section animation
        if (contactRef.current) {
          gsap.fromTo(
            contactRef.current.querySelectorAll(".contact-item"),
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: contactRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      } catch (error) {
        console.log("[v0] GSAP loading failed:", error)
      }
    }

    loadGSAP()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GrowthPro</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Sign In
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-500/30 text-red-100 border-red-500/40">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by +160,000 companies
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Accelerate Business Growth with{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Smart Solutions
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto text-pretty">
              Data-driven insights, streamlined operations, and innovative strategies designed to move your business
              forward. Transform your company with AI-powered analytics that deliver results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500 text-white hover:bg-slate-800 hover:text-white px-8 py-3 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                How it works
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Revenue Chart */}
                  <Card className="lg:col-span-2 bg-slate-900/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Total Revenue</h3>
                        <Badge className="bg-green-500/30 text-green-100 border-green-500/40">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          +24%
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">$847,392</div>
                      <p className="text-slate-400 text-sm mb-4">vs previous 30 days</p>
                      <div className="h-32 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg flex items-end justify-between px-2 pb-2">
                        {[40, 65, 45, 80, 55, 90, 75, 85, 70, 95, 80, 100].map((height, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-red-500 to-red-400 rounded-sm w-4"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stats Cards */}
                  <div className="space-y-4">
                    <Card className="bg-slate-900/50 border-slate-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-slate-400 text-sm">Active Users</p>
                            <p className="text-2xl font-bold text-white">24,847</p>
                          </div>
                          <Users className="w-8 h-8 text-blue-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-slate-400 text-sm">Conversion Rate</p>
                            <p className="text-2xl font-bold text-white">12.4%</p>
                          </div>
                          <Target className="w-8 h-8 text-green-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions That Drive Results</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive tools and strategies to accelerate your business growth and maximize revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Real-time insights and predictive analytics to make data-driven decisions that boost performance.",
              },
              {
                icon: TrendingUp,
                title: "Growth Optimization",
                description:
                  "Identify opportunities and optimize processes to accelerate revenue growth and market expansion.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Comprehensive risk assessment and mitigation strategies to protect and grow your investments.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Streamlined workflows and communication tools that enhance productivity and team performance.",
              },
              {
                icon: Target,
                title: "Strategic Planning",
                description:
                  "Long-term strategic planning with actionable roadmaps tailored to your business objectives.",
              },
              {
                icon: Zap,
                title: "Automation Tools",
                description:
                  "Intelligent automation solutions that reduce manual work and increase operational efficiency.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="service-card bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Case Studies Section */}
      <section ref={resultsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results That Matter</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real companies achieving extraordinary growth with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "3.2x", label: "Average Revenue Growth", icon: TrendingUp },
              { metric: "89%", label: "Client Retention Rate", icon: Users },
              { metric: "45%", label: "Cost Reduction", icon: Target },
              { metric: "24/7", label: "Support Availability", icon: Shield },
            ].map((stat, index) => (
              <Card key={index} className="result-item bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                  <p className="text-slate-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="result-item bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">TechCorp Solutions</h3>
                </div>
                <p className="text-slate-400 mb-4">
                  "Within 6 months of implementing GrowthPro, we saw a 340% increase in qualified leads and reduced our
                  customer acquisition cost by 60%."
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span>Revenue: +$2.4M</span>
                  <span>•</span>
                  <span>Timeline: 6 months</span>
                </div>
              </CardContent>
            </Card>

            <Card className="result-item bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Global Retail Inc</h3>
                </div>
                <p className="text-slate-400 mb-4">
                  "The analytics insights helped us optimize our supply chain, resulting in 25% faster delivery times
                  and 30% cost savings."
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span>Savings: $1.8M</span>
                  <span>•</span>
                  <span>Timeline: 4 months</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, InnovateTech",
                content:
                  "GrowthPro transformed our business operations. The AI-driven insights helped us identify new revenue streams we never knew existed.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "VP of Operations, ScaleUp Co",
                content:
                  "The automation tools saved us 40 hours per week. Our team can now focus on strategic initiatives instead of manual tasks.",
                rating: 5,
              },
              {
                name: "Emily Watson",
                role: "Founder, StartupX",
                content:
                  "From startup to scale-up in 18 months. GrowthPro's strategic planning tools were instrumental in our rapid growth.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="testimonial-card bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-red-400 mb-4" />
                  <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to accelerate your business growth? Our team is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="contact-item">
                <h3 className="text-2xl font-semibold text-white mb-6">Why Choose GrowthPro?</h3>
                <div className="space-y-4">
                  {[
                    "24/7 dedicated support team",
                    "30-day money-back guarantee",
                    "Free onboarding and training",
                    "Custom integrations available",
                    "Enterprise-grade security",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-item space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">hello@growthpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card className="contact-item bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Start Your Free Trial</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Size</label>
                    <select className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>200+ employees</option>
                    </select>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
            <Card className="relative bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-slate-400 mb-8">
                  Join thousands of companies already using our platform to drive growth and maximize revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
                  >
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GrowthPro</span>
            </div>
            <p className="text-slate-400">© 2024 GrowthPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
