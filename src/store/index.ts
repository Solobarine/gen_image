import { create } from "zustand";

const useImages = create(set => ({
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
