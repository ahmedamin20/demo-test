import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({children}:{children: React.ReactNode}) => (
  <Marquee pauseOnHover={true}>
    {children}
  </Marquee>
);

export default MarqueeComponent;