"use client"

import { useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"
import { servicesData, serviecSectionDescription, serviecSectionTitle } from "@/constants/servicesData"
interface TserviceItem  {
    title: string,
    description: string,
    features: string[],
    image: string | StaticImageData
}




    const ServiceCard = ({ service } : { service: TserviceItem }) => (
  <div className="bg-[#02112A] rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
    <Image
      src={service.image || "/placeholder.svg"}
      alt={service.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-demo-yellow mb-3">{service.title}</h3>
      <p className="text-white mb-4">{service.description}</p>
      <ul className="list-disc list-inside text-[#376683]">
        {service.features.map((feature, index) => (
          <li key={index} className="mb-1">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Services = ({images}:{images: string[]}) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  const newData = servicesData.map((item, index) =>({...item, image: images[index]}))
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b px-2 from-[#03284C] to-[#0C222F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-demo-yellow mb-12 text-center">{serviecSectionTitle}</h2>
        <p className="text-white text-center mb-12 max-w-3xl mx-auto">
          {serviecSectionDescription}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

