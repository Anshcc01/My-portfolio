"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Download, Eye, CheckCircle, AlertCircle, X } from "lucide-react"

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "application/pdf") {
      setUploadStatus("error")
      return
    }

    setIsUploading(true)

    try {
      // Simulate upload process
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setUploadStatus("success")

      // In a real app, you would:
      // 1. Upload to your server/cloud storage
      // 2. Update the resume path in your database
      // 3. Refresh the page or update state
    } catch (error) {
      setUploadStatus("error")
    } finally {
      setIsUploading(false)
    }
  }

  const downloadCurrentResume = () => {
    // This would download the actual PDF
    const link = document.createElement("a")
    link.href = "/resume/Ansh_Jaiswal_Resume.pdf"
    link.download = "Ansh_Jaiswal_Resume.pdf"
    link.click()
  }

  if (!isExpanded) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setIsExpanded(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg" size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Upload Resume
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resume Management
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Upload your resume PDF to enable proper download functionality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Status */}
          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Current Resume:</span>
              <Badge variant="outline">PDF Available</Badge>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={downloadCurrentResume}>
                <Download className="mr-1 h-3 w-3" />
                Download
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("/resume/Ansh_Jaiswal_Resume.pdf", "_blank")}
              >
                <Eye className="mr-1 h-3 w-3" />
                View
              </Button>
            </div>
          </div>

          {/* Upload New Resume */}
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
              <span className="text-sm text-slate-600">{isUploading ? "Uploading..." : "Upload New Resume PDF"}</span>
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

          <div className="text-xs text-slate-500 space-y-1">
            <p>• File must be in PDF format</p>
            <p>• Maximum file size: 5MB</p>
            <p>• Professional resume layout recommended</p>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Instructions:</h4>
            <ol className="text-xs text-slate-600 space-y-1">
              <li>1. Upload your PDF resume using the upload area above</li>
              <li>2. The download button will serve your actual PDF file</li>
              <li>3. Visitors can download your professional resume</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
