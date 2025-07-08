"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

interface PDFUploadProps {
  onUploadComplete?: () => void
}

export function PDFUpload({ onUploadComplete }: PDFUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "application/pdf") {
      setUploadStatus("error")
      return
    }

    setIsUploading(true)

    try {
      // In a real application, you would upload to your server or cloud storage
      // For now, we'll simulate the upload process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setUploadStatus("success")
      onUploadComplete?.()
    } catch (error) {
      setUploadStatus("error")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Upload Resume PDF
        </CardTitle>
        <CardDescription>Upload your resume in PDF format to enable proper download functionality</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="pdf-upload"
            disabled={isUploading}
          />
          <label htmlFor="pdf-upload" className="cursor-pointer flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-slate-400" />
            <span className="text-sm text-slate-600">{isUploading ? "Uploading..." : "Click to upload PDF"}</span>
          </label>
        </div>

        {uploadStatus === "success" && (
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <CheckCircle className="h-4 w-4" />
            Resume uploaded successfully!
          </div>
        )}

        {uploadStatus === "error" && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            Please upload a valid PDF file
          </div>
        )}

        <div className="text-xs text-slate-500">
          <p>• File must be in PDF format</p>
          <p>• Maximum file size: 5MB</p>
          <p>• Recommended: Professional resume layout</p>
        </div>
      </CardContent>
    </Card>
  )
}
