import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f7]/95 transition-all duration-300">
        <Container className="flex items-center justify-between py-5">
          <Link href="/" className="font-serif text-2xl tracking-widest">
            HONIA
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#collections"
                  className="text-sm uppercase tracking-wider hover:text-[#c8a97e] transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm uppercase tracking-wider hover:text-[#c8a97e] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#sustainability"
                  className="text-sm uppercase tracking-wider hover:text-[#c8a97e] transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm uppercase tracking-wider hover:text-[#c8a97e] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center h-screen mt-16">
        <div className="absolute right-0 top-0 w-[70%] h-full md:opacity-100 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop"
            alt="Elegant gold jewelry on display"
            fill
            className="object-cover object-center"
            priority
            sizes="70vw"
          />
        </div>
        <Container className="relative z-10">
          <div
            className="max-w-[600px] md:ml-[5%] md:text-left text-center mx-auto animate-fadeIn opacity-0 px-4"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-5">Handcrafted Elegance by Honia</h1>
            <p className="text-lg mb-8 max-w-[500px] mx-auto md:mx-0">
              "Let yourself be more of the jewel that you are."
            </p>
            <Link
              href="#collections"
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
            >
              Explore Collections
            </Link>
          </div>
        </Container>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6 tracking-wide">Collections</h2>
          <p className="text-center max-w-[700px] mx-auto mb-16 text-lg">
            Each collection represents a different facet of artistry and inspiration. Discover pieces that speak to your
            personal style and story.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
            <div className="relative overflow-hidden aspect-[1/1.2] group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600&auto=format&fit=crop"
                alt="Ethereal Collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif text-xl">Ethereal</h3>
                <p>Delicate pieces inspired by the sky</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-[1/1.2] group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop"
                alt="Terra Collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif text-xl">Terra</h3>
                <p>Bold designs rooted in earthly elements</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-[1/1.2] group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=600&auto=format&fit=crop"
                alt="Lumina Collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif text-xl">Lumina</h3>
                <p>Light-catching pieces for everyday brilliance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#"
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
            >
              View All Collections
            </Link>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f3f1ec]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-[45%] order-2 md:order-1">
              <h2 className="font-serif text-3xl mb-8">The Artist Behind Honia</h2>
              <p className="mb-5">
                With over a decade of experience in jewelry design, Honia creates pieces that blend traditional
                craftsmanship with contemporary aesthetics. Each creation begins as a sketch inspired by nature,
                architecture, or a moment in time.
              </p>
              <p className="mb-5">
                Working primarily with recycled precious metals and ethically sourced gemstones, Honia is committed to
                sustainability without compromising on quality or design.
              </p>
              <blockquote className="font-serif text-2xl italic my-10 pl-5 border-l-3 border-[#c8a97e]">
                "I believe jewelry should be more than an accessory—it should be an extension of the wearer's story and
                spirit."
              </blockquote>
              <p>
                Every piece is handcrafted in Honia's studio, ensuring the highest quality and a personal touch that
                cannot be replicated by mass production.
              </p>
            </div>
            <div className="w-full md:w-[45%] h-[400px] md:h-[600px] relative order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop"
                alt="Designer's workspace with journal, coffee and inspiration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Pieces Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Featured Pieces</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most sought-after designs, each piece telling its own story through craftsmanship and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=500&auto=format&fit=crop"
                alt="Aurora Necklace"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-white mb-2">Aurora Necklace</h3>
                <p className="text-white/90 text-sm mb-4">A delicate cascade of diamonds that captures the essence of dawn.</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">$2,800</span>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop"
                alt="Terra Earrings"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-white mb-2">Terra Earrings</h3>
                <p className="text-white/90 text-sm mb-4">Earth-inspired hoops that bring natural elegance to any look.</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">$1,200</span>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=500&auto=format&fit=crop"
                alt="Solstice Ring"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-white mb-2">Solstice Ring</h3>
                <p className="text-white/90 text-sm mb-4">A bold statement piece that celebrates the changing seasons.</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">$1,800</span>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=500&auto=format&fit=crop"
                alt="Oceana Bracelet"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-white mb-2">Oceana Bracelet</h3>
                <p className="text-white/90 text-sm mb-4">Wave-inspired design that flows with natural grace.</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">$1,500</span>
                  <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-24 bg-[#ede8e2] text-center">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6 tracking-wide">
            Our Commitment to Sustainability
          </h2>
          <p className="max-w-[800px] mx-auto mb-16">
            At Honia, we believe beautiful jewelry shouldn't come at the expense of our planet or its people. Every
            decision we make is guided by our commitment to ethical and sustainable practices.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a97e"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8v13H3V8"></path>
                  <path d="M1 3h22v5H1z"></path>
                  <path d="M10 12h4"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Recycled Materials</h3>
              <p>We use recycled precious metals for all our pieces, reducing the environmental impact of mining.</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a97e"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Ethical Sourcing</h3>
              <p>All gemstones are traceable and sourced from vendors who uphold fair labor practices.</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a97e"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Sustainable Packaging</h3>
              <p>Our packaging is plastic-free and made from recycled materials that can be reused or recycled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 tracking-wide">Follow Our Journey</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <div className="aspect-square overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=300&auto=format&fit=crop"
                alt="Instagram post 1"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=300&auto=format&fit=crop"
                alt="Instagram post 2"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=300&auto=format&fit=crop"
                alt="Instagram post 3"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=300&auto=format&fit=crop"
                alt="Instagram post 4"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=300&auto=format&fit=crop"
                alt="Instagram post 5"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg">
              Follow us on Instagram:{" "}
              <a href="#" className="hover:text-[#c8a97e] transition-colors">
                @honia.jewelry
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#f9f9f7]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-[40%]">
              <h3 className="font-serif text-2xl mb-5">Get in Touch</h3>
              <p className="mb-8">
                Interested in custom designs or have questions about our collections? We'd love to hear from you.
              </p>

              <ul className="space-y-4">
                <li>
                  Email:{" "}
                  <a href="mailto:hello@honia.com" className="hover:text-[#c8a97e] transition-colors">
                    hello@honia.com
                  </a>
                </li>
                <li>Studio: 123 Artisan Lane, Design District</li>
                <li>Hours: Tuesday - Saturday, 10am - 6pm</li>
              </ul>
            </div>

            <div className="w-full md:w-[55%]">
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-1 text-sm">
                    Name
                  </label>
                  <Input type="text" id="name" className="w-full p-3 border border-gray-300 bg-transparent" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-1 text-sm">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 bg-transparent"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="block mb-1 text-sm">
                    Subject
                  </label>
                  <Input type="text" id="subject" className="w-full p-3 border border-gray-300 bg-transparent" />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-1 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 bg-transparent resize-y"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="px-8 py-3 border border-black bg-transparent text-black hover:bg-black hover:text-white text-sm uppercase tracking-wider transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-lg mb-5">Honia</h3>
              <p className="mb-5">Artisan jewelry designed with intention and crafted with care.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:translate-y-[-3px] transition-transform">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-white hover:translate-y-[-3px] transition-transform">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-white hover:translate-y-[-3px] transition-transform">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-white hover:translate-y-[-3px] transition-transform">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#collections" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Honia
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Our Commitment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Care Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Shipping & Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-5">Newsletter</h3>
              <p className="mb-5">Subscribe to receive updates on new collections, events, and exclusive offers.</p>
              <form className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 bg-[#444] border-none text-white"
                />
                <Button type="submit" className="w-full bg-[#c8a97e] hover:bg-[#b89a70] text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-16">
            &copy; {new Date().getFullYear()} Honia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

