import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import logo from '../app/favicon.ico'

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Firefly",
  description = "Create custom FIREFLY shop",
  image = `${logo}`,
  icons = "./favicon.ico",
}={}) {
  return{
    title,
    description,
    openGraph:{
      title,
      description,
      images:[{url:image}]
    },
    twitter:{
      card:'summarey_large_image',
      title,
      description,
      images:[image],
      creator:"@NguyenNhuHoai"
    },icons,
    metadata: new URL('http://localhost:3000')
  }
}
