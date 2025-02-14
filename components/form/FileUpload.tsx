"use client"

import Image from "next/image"
import type React from "react"
import { useState, useCallback } from "react"
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPG", "PNG", "GIF", "STL", "OBJ", "FBX"]

interface FileUploadProps {
  label: string
  onChange?: (files: FileList) => void
  multiple?: boolean
  maxSize?: number
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  label, 
  onChange, 
  multiple = true, 
  maxSize = 50
}) => {
  const [files, setFiles] = useState<FileList | null>(null)

  const handleChange = useCallback((newFiles: FileList) => {
    // Update local state
    setFiles(newFiles)
    
    // Call onChange if provided
    if (onChange) {
      onChange(newFiles)
    }
  }, [onChange])

  const removeFile = (indexToRemove: number) => {
    if (!files) return;

    // Convert FileList to array and remove the specific file
    const filesArray = Array.from(files).filter((_, index) => index !== indexToRemove);
    
    // Create a new FileList
    const updatedFileList = new DataTransfer();
    filesArray.forEach(file => updatedFileList.items.add(file));

    setFiles(updatedFileList.files);
    
    if (onChange) {
      onChange(updatedFileList.files);
    }
  }

  const getFileUrl = (file: File) => {
    return URL.createObjectURL(file)
  }

  const getFileIcon = (file: File) => {
    const fileName = file.name
    return fileName?.split('.')?.pop()?.toUpperCase() || 'FILE'
  }

  return (
    <div className="space-y-2">
      <label className="block text-demo-yellow font-medium mb-2">{label}</label>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        classes="dropzone"
        maxSize={maxSize}
        multiple={multiple}
        minSize={0}
      >
        <div className="p-8 border-2 border-dashed border-demo-sky-blue rounded-lg bg-demo-blue text-center cursor-pointer hover:border-[#FFE90B] transition-colors duration-300">
          <p className="text-demo-yellow mb-2">
            {multiple 
              ? "Drag and drop your files here, or click to select files" 
              : "Drag and drop your file here, or click to select a file"}
          </p>
          <p className="text-demo-sky-blue text-sm">
            Supported file types: {fileTypes.join(", ")}
          </p>
        </div>
      </FileUploader>
      
      {files && files.length > 0 && (
        <div className="mt-4">
          <p className="text-demo-yellow mb-2">Selected files:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from(files).map((file, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-demo-dark-blue p-2 rounded-lg overflow-hidden">
                  {file.type.startsWith('image/') ? (
                    <div className="relative w-full h-32">
                      <Image
                        src={getFileUrl(file)}
                        alt={file.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-32">
                      {/* Dark overlay for non-image files */}
                      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                      
                      {/* File type display */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <p className="text-white text-2xl font-bold">
                          {getFileIcon(file)}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-demo-yellow text-sm mt-2 truncate">{file.name}</p>
                </div>
                
                {/* Remove file button */}
                <button 
                  onClick={() => removeFile(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-30"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUpload