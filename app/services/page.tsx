import Link from "next/link"
import { Button } from "@/app/components/ui/Button"
import { ServiceCard } from "../components/ServiceCard"
import { services } from "../lib/data"

const page = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your
            business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map(service => <ServiceCard key={service.id} service={service} />)}
        </div>

        {/* Process Section */}
        <div className="bg-dusk rounded-3xl p-8 md:p-16 text-lemon-500">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lemon-500 text-lg">
              Our proven process ensures we deliver high-quality results on
              time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[{
            step: '01',
            title: 'Discover',
            desc: 'We dive deep into your business goals and user needs.'
          }, {
            step: '02',
            title: 'Design',
            desc: 'We craft intuitive and beautiful solutions.'
          }, {
            step: '03',
            title: 'Deliver',
            desc: 'We build, test, and launch your product.'
          }].map(item => <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-lemon-500 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lemon-500">{item.desc}</p>
              </div>)}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button 
                className="hover:cursor-pointer"
                variant="primary"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page