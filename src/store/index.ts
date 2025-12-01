import { create } from "zustand";

interface ImageState {
	images: string[],
	error: string,
	loading: boolean 
	generateImages: () => void
}

const useImages = create<ImageState>(set => ({
  images: [],
  error: "",
  loading: false,
  generateImages: async () => {
    set(() => ({loading: true}))

    try {
      set(() => ({images: ["", "", ""]}))
    } catch {
      set(() => ({error: "Something went wrong"}))
    } finally {
      set(() => ({loading: false}))
    }
  }
}))

export default useImages
