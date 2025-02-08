import { StaticImageData } from "next/image"

export const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jane Smith",
      role: "Lead Designer",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Johnson",
      role: "Senior 3D Printing Specialist",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Brown",
      role: "Prototyping Expert",
      photo: "/placeholder.svg?height=300&width=300",
    },
  ]

  export type TTeamMember = {
    name: string,
    role: string,
    photo: string | StaticImageData,
  }