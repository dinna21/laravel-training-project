import { Head } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Mail, Phone, Sun, Moon } from "lucide-react"
import AppearanceToggleDropdown from "@/components/appearance-dropdown"
interface Project {
  id: number
  name: string
  description: string
  image: string
  category: string
  technologies: string[]
}

interface Blog {
  id: number
  title: string
  description: string
  image: string
}

interface LandingProps {
  projects: Project[]
  blogs: Blog[]
}

export default function Landing({ projects, blogs }: LandingProps) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <span className="text-xl font-semibold">Agency Inc.</span>

            <nav className="flex items-center gap-12">
              <ul className="hidden md:flex gap-6 text-md">
                <li>
                  <a href="#services" className="hover:text-cyan-500">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-cyan-500">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-cyan-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-cyan-500">
                    Company
                  </a>
                </li>
              </ul>
              {/* <AppearanceToggleDropdown /> */}
              <AppearanceToggleDropdown />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold leading-tight max-w-3xl">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-8 mb-12">
          <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
            UX/UI Design
          </Badge>
          <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
            Web Design
          </Badge>
        </div>

        {/* Two-card layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl w-full">
          {/* Left Card */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <Button
                variant="secondary"
                className="mt-6 bg-cyan-400 text-gray-900 hover:bg-cyan-300"
              >
                Contact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Right Card - Image */}
          <Card className="border-0 overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/images/office--img.jpg"
                alt="Modern office space"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML =
                      '<div class="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">Office Space Image</div>'
                  }
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl w-full text-left bg-stone-200 dark:bg-stone-700 p-8 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            <p>
              Lorem ipsum dolor sit amet consectetur. Felis arcu sed diam sit
              quis fermentum.
            </p>
            <p>
              Lacinia neque aliquam facilisis sceleris magna. Sed et tellus
              sapien rutrum egestas pellentesque rutrum ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pellentesque nunc mauris
              dictum sodales quis porta.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Rocket className="w-5 h-5 mr-2" /> Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-400 text-gray-900 dark:border-gray-500 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold mb-8">Work →</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-600">
                            <div class="text-center">
                              <div class="text-4xl mb-2">📁</div>
                              <div class="text-sm">${project.name}</div>
                            </div>
                          </div>`
                      }
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-cyan-400 text-gray-900 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400">
                    {project.name}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-cyan-400 hover:text-gray-900"
                  >
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-8">Blog →</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-600">
                            <div class="text-center">
                              <div class="text-4xl mb-2">📁</div>
                              <div class="text-sm">${blog.title}</div>
                            </div>
                          </div>`
                      }
                    }}
                  />
                </div>
                <h4 className="text-xl font-semibold p-4 group-hover:text-cyan-400">
                  {blog.title}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Information Heading */}
            <div className="flex items-start">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Information →
              </h3>
            </div>

            {/* Right Side - Information Items */}
            <div className="space-y-8">
              {[
                {
                  number: "25",
                  title: "Lorem ipsum dolor sit amet consectetur.",
                  description: "Press release"
                },
                {
                  number: "25",
                  title: "Lorem ipsum dolor sit amet consectetur.",
                  description: "Press release"
                },
                {
                  number: "25",
                  title: "Lorem ipsum dolor sit amet consectetur.",
                  description: "Press release"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  {/* Number */}
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 min-w-[60px]">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                      {item.title}
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.description} →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We'd love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button variant="secondary">
            <Mail className="w-5 h-5 mr-2" /> Email
          </Button>
          <Button variant="secondary">
            <Phone className="w-5 h-5 mr-2" /> Call
          </Button>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-6 text-center text-sm border-t border-gray-200 dark:border-gray-700">
        © 2025 Agency Inc. All rights reserved.
      </footer>
    </div>
  )
}
