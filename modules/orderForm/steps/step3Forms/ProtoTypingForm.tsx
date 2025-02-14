import React, { useState } from 'react'
import { TStep3Props } from '../Step3'
import InputField from '@/components/form/InputField'
import MultiSelect from '@/components/form/MutliSelectMenu'
import { materialOptions } from '@/constants/prototypingMaterialOptions'
import Selectmenu from '@/components/form/Selectmenu'
import projectsField from '@/constants/projectFields'
import TextArea from '@/components/form/TextArea'
import RadioGroup from '@/components/form/RadioGroup'
import FileUpload from '@/components/form/FileUpload'
import { FieldError } from 'react-hook-form'
// import { RadioGroup } from '@radix-ui/react-context-menu'

interface TprotoTypingFormProps extends TStep3Props {}

const ProtoTypingForm = ({ errors, register, setValue }: TprotoTypingFormProps) => {
  const [hasThreeDDesign, setHasThreeDDesign] = useState<string>('yes')


  const serviceOptions = [
    { value: "3d_printing", label: "3D Printing" },
    { value: "prototyping", label: "Prototyping" },
    { value: "modeling", label: "3D Modeling" },
    { value: "consultation", label: "Consultation" },
  ]

  const scaleOptions = [
    { id: '1:10', name: '1:10' },
    { id: '1:50', name: '1:50' },
    { id: 'full', name: 'Full Scale' }
  ]

  return (
    <div className="text-white flex flex-col gap-[20px]">
      {/* Deadline */}
      <InputField 
        label='Project Deadline' 
        register={register} 
        error={errors} 
        id='deadline' 
        type='date'
      />

      {/* Material Options */}
      <MultiSelect 
        options={materialOptions} 
        id='materialOptions' 
        label='Select Material Options' 
        onChange={values => setValue('materials', values)}
      />

      {/* Project Field */}
      <Selectmenu 
        id='projectField'
        label='Select Project Field'
        options={projectsField}
        register={register}
        error={errors}
      />

      {/* Project Description */}
      <TextArea 
        label='Project Description' 
        placeholder='Provide a brief overview of the prototype and its purpose.' 
        required 
        register={register}  
        id='projectDescription'
      />

      {/* Prototype Dimensions */}
      <div className="grid grid-cols-3 gap-4">
        <InputField 
          label='Length' 
          register={register} 
          error={errors} 
          id='length' 
          type='number'
        />
        <InputField 
          label='Width' 
          register={register} 
          error={errors} 
          id='width' 
          type='number'
        />
        <InputField 
          label='Height' 
          register={register} 
          error={errors} 
          id='height' 
          type='number'
        />
      </div>

      {/* 3D Design Option */}
      <RadioGroup
        id="serviceType"
        label="Select Service Type"
        options={serviceOptions}
        register={register}
        error={errors["serviceType"] as unknown as FieldError}
      />

      {/* Conditional 3D Design Upload */}
      {hasThreeDDesign === 'yes' && (
        <>
          <FileUpload 
            label='Upload 3D File' 
            // accept='.step,.stp,.obj,.stl' 
            // register={register}
            // id='threeDFile'
            onChange={e=>console.log(e)}
          />
          
          <Selectmenu 
            id='scale'
            label='Select Scale'
            options={scaleOptions}
            register={register}
            error={errors}
          />
        </>
      )}

      {/* Reference Files Upload */}
      {/* <FileUpload 
        label='Upload Reference Files (Optional)' 
        multiple 
        register={register}
        id='referenceFiles'
      /> */}
    </div>
  )
}

export default ProtoTypingForm