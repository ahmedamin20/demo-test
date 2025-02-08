"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { teamMembers, TTeamMember } from "@/constants/ourTeamData"



const TeamMemberCard = ({ member } : {member: TTeamMember} ) => (
  <div className="bg-[#02112A] rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
    <Image
      src={member.photo || "/placeholder.svg"}
      alt={member.name}
      width={300}
      height={300}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#FFE90B] mb-2">{member.name}</h3>
      <p className="text-[#376683]">{member.role}</p>
    </div>
  </div>
)

const OurTeam = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0C222F] to-[#03284C]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FFE90B] mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam

