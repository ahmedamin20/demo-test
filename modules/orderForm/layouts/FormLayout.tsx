import React from "react";

interface TFormLayoutProps {
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  stepsCount: number;
  children: React.ReactNode;
}

const FormLayout = ({
  nextStep,
  prevStep,
  children,
  currentStep,
  stepsCount,
}: TFormLayoutProps) => {
  return (
    <div className="flex flex-col w-full space-y-4 gap-[30px]">
      {children}
      <div className="flex flex-row w-full gap-[20px] justify-between">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="w-1/2 bg-[#376683] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFE90B] hover:text-[#010A18] transition-colors duration-300"
          >
            Previous
          </button>
        )}

        {currentStep < stepsCount && (
          <button
            type="button"
            onClick={nextStep}
            className="w-full bg-demo-yellow text-[#010A18] px-4 py-2 rounded-full font-semibold hover:bg-[#376683] hover:text-white transition-colors duration-300"
          >
            Next
          </button>
        )}

        {currentStep === stepsCount && (
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormLayout;
