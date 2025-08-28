"use client";
import { Button } from "@/components/ui/button";
import Description from "@/components/ui/Description";
import MarqueeComponent from "@/components/ui/Marquee";
import { Modal } from "@/components/ui/Modal";
import Title from "@/components/ui/Title";
import PartnersFormView from "@/modules/partnerForm/view/View";
import { TOurPartners } from "@/types/ourPartners";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPartners = ({ data }: { data: TOurPartners[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-col justify-center items-center mt-[3rem] my-4 gap-4">
      <div className="text-center gap-2">
        <Title title="Our Partners" />
        <Description text="Become a partner with form to contact us The benefits for being a partner" />
      </div>
      <br />
      <MarqueeComponent>
        {data.map((partner, index) => (
          <Link
            key={index}
            href={partner.link}
            target="_blank"
            className="text-white mx-[2rem] "
          >
            <Image
              src={partner.logoUrl}
              alt={partner.name}
              width={200}
              height={200}
            />
          </Link>
        ))}
      </MarqueeComponent>
      <Button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Become a Partner
      </Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
  <div className="text-center space-y-6">
    <div className="space-y-2">
      <h1 className="text-2xl sm:text-4xl font-bold text-white">
        Welcome to{" "}
        <span className="bg-yellow-400 text-black px-2 py-1 rounded">
          Demo
        </span>
      </h1>
      <p className="text-yellow-400 text-xs sm:text-sm font-medium tracking-wider">
        THE HOUSE OF{" "}
        <span className="border border-yellow-400 px-2 py-0.5 rounded">
          Prototyping
        </span>
      </p>
    </div>

    <PartnersFormView setIsOpen={setIsOpen} />
  </div>
</Modal>

    </div>
  );
};

export default OurPartners;
