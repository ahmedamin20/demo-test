import { Input } from '@/components/ui/input'
import React from 'react'
import { TStep3Props } from '../Step3'
import InputField from '@/components/form/InputField'
import MultiSelect from '@/components/form/MutliSelectMenu'
import { materialOptions } from '@/constants/prototypingMaterialOptions'
import Selectmenu from '@/components/form/Selectmenu'
import projectsField from '@/constants/projectFields'
import TextArea from '@/components/form/TextArea'
interface TprotoTypingFormProps extends TStep3Props {}
const ProtoTypingForm = ({errors, register, setValue} : TprotoTypingFormProps) => {
  return (
    <div className="text-white flex flex-col gap-[20px]">
        <InputField label='Deadline' register={register} error={errors} id='deadline' type='date'/>
        <MultiSelect options={materialOptions} id='materialOptions' label='Material Options' onChange={values=> console.log(values)} />
        <Selectmenu 
            id='projectField'
            label='Select Project Field'
            options={projectsField}
            register={register}
            error={errors}
        />
        <TextArea label='Please describe your project' placeholder='Provide a brief overview of the prototype and its purpose.' required register={register}  id='prjectDescribtion'/>


    </div>
  )
}

export default ProtoTypingForm
