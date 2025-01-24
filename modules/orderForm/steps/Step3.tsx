'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { TFormDefaulProps } from '../types/formStepProps';
import { TProjectType } from '@/modules/constants/FormSeleteMenuData';

interface TStep3Props extends TFormDefaulProps {
  seletedUserType: number | null;
  handleUserTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Step3 = () => {
    const searchParams = useSearchParams();
    const serviceType = searchParams.get("serviceType");
    // const type = TProjectType[serviceType as keyof typeof TProjectType];

    switch(Number(serviceType)){
        case TProjectType['3D-Printing']:
            return(
                <div>
                    <h1>3D Printing</h1>
                </div>
            );
        case TProjectType['3D-Design']:
            return(
                <div>
                    <h1>3D Design</h1>
                </div>
            );
        case TProjectType.finishing:
            return(
                <div>
                    <h1>Finishing</h1>
                </div>
            );
        case TProjectType.prototyping:
            return(
                <div>
                    <h1>Prototyping</h1>
                </div>
            );
        default:
            return(
                <div>
                    <h1>Invalid Service Type</h1>
                </div>
            );
    }
}

export default Step3
