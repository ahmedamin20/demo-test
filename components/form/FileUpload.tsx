"use client"

import type React from "react"
import { useState } from "react"
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPG", "PNG", "GIF", "STL", "OBJ", "FBX"]

interface FileUploadProps {
  label: string
  onChange: (file: File) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange }) => {
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (file: File) => {
    setFile(file)
    onChange(file)
  }

  return (
    <div className="space-y-2">
      <label className="block text-[#FFE90B] font-medium mb-2">{label}</label>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        classes="dropzone"
        maxSize={50}
        minSize={0}
      >
        <div className="p-8 border-2 border-dashed border-[#376683] rounded-lg bg-[#02112A] text-center cursor-pointer hover:border-[#FFE90B] transition-colors duration-300">
          <p className="text-[#FFE90B] mb-2">Drag and drop your file here, or click to select a file</p>
          <p className="text-[#376683] text-sm">Supported file types: {fileTypes.join(", ")}</p>
          {file && <p className="mt-4 text-[#FFE90B]">Selected file: {file.name}</p>}
        </div>
      </FileUploader>
    </div>
  )
}

export default FileUpload

