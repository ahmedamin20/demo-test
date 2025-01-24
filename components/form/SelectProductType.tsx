import { TProjectType } from "@/modules/constants/FormSeleteMenuData";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const SelectProductType = ({ type, setType }: { type: any; setType: any }) => {
  const [popup, setPopup] = useState<string | null>(null);

  const productDescriptions: { [key: string]: string } = {
    prototyping: "Prototyping helps create a functional model of your idea.",
    "3D-Printing": "3D Printing brings your designs to life with precision.",
    "3D-Design": "3D Design focuses on creating detailed digital models.",
    finishing: "Finishing adds final touches for a polished result.",
  };

  const handlePopup = (key: string) => {
    if (popup === key) {
      setPopup(null); // Close popup if already open
    } else {
      setPopup(key); // Open popup for selected key
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Buttons */}
      <div className="flex w-full">
        <button
          type="button"
          onClick={() => {
            setType(TProjectType.prototyping);
            handlePopup("prototyping");
          }}
          className={`px-2 py-2 rounded-l-full ${
            type === TProjectType.prototyping
              ? "bg-demo-yellow text-[#010A18]"
              : "bg-[#376683] text-white"
          }`}
        >
          Prototyping
        </button>
        <button
          type="button"
          onClick={() => {
            setType(TProjectType["3D-Printing"]);
            handlePopup("3D-Printing");
          }}
          className={`px-2 py-2 ${
            type === TProjectType["3D-Printing"]
              ? "bg-demo-yellow text-[#010A18]"
              : "bg-[#376683] text-white"
          }`}
        >
          3D Printing
        </button>
        <button
          type="button"
          onClick={() => {
            setType(TProjectType["3D-Design"]);
            handlePopup("3D-Design");
          }}
          className={`px-2 py-2 ${
            type === TProjectType["3D-Design"]
              ? "bg-demo-yellow text-[#010A18]"
              : "bg-[#376683] text-white"
          }`}
        >
          3D Design
        </button>
        <button
          type="button"
          onClick={() => {
            setType(TProjectType.finishing);
            handlePopup("finishing");
          }}
          className={`px-2 py-2 rounded-r-full ${
            type === TProjectType.finishing
              ? "bg-demo-yellow text-[#010A18]"
              : "bg-[#376683] text-white"
          }`}
        >
          Finishing
        </button>
      </div>

      {/* Popup */}
      {popup && (
        <div className="mt-4 bg-demo-sky-blue p-2 text-white rounded-lg shadow-lg">
          <div
            // type="button"
            // onClick={() => setPopup(null)}
            className="w-full flex justify-end"
          >
            <IoMdCloseCircle onClick={()=>setPopup(null)}  size={25}/>

          </div>
          <p className="">{productDescriptions[popup]}</p>
          
        </div>
      )}
    </div>
  );
};

export default SelectProductType;
