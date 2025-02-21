import MultiSelect from "@/components/form/MutliSelectMenu";
import { materialOptions } from "@/constants/prototypingMaterialOptions";
import { TStep3Props } from "../Step3";
import FileUpload from "@/components/form/FileUpload";
import InputField from "@/components/form/InputField";
interface TFinishingFormProps extends TStep3Props {}
const Finishing = ({ errors, register, setValue }: TFinishingFormProps) => {
  return (
    <div className="text-white flex flex-col gap-[20px]">
      <MultiSelect
        options={materialOptions}
        id="materialOptions"
        label="Select Material Options"
        onChange={(values) => setValue("materials", values)}
      />
      <FileUpload
        label="Upload a photo of your model before finishing"
        // register={register}
        // id='threeDFile'
        multiple={false}
        onChange={(e) => console.log(e)}
      />
      <FileUpload
        label="Upload a photo of your model before finishing"
        // register={register}
        // id='threeDFile'
        multiple={false}
        onChange={(e) => console.log(e)}
      />
      <FileUpload
        label="Upload images or sketches showcasing your desired finish."
        // register={register}
        // id='threeDFile'
        multiple={false}
        onChange={(e) => console.log(e)}
      />
      <InputField
        label="Project Deadline"
        register={register}
        error={errors}
        id="deadline"
        type="date"
      />
    </div>
  );
};

export default Finishing;
