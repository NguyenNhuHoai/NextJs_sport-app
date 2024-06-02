import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Remove the TypeScript type import
// import type { OurFileRouter } from "~/app/api/uploadthing/core";

// Generate upload components without type annotations
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();
