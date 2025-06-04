import { ProfileStore } from "@/lib/types";
import { create } from "zustand";

export const useProfileStore = create<ProfileStore>((set) => ({
  current: 0,
  agreement: false,
  setAgreement: (agreement) => set({ agreement }),
  profile: {
    country: "",
    language: "",
    phone: "",
    timeZone: "",
    fistName: "",
    lastName: "",
    email: "",
    DOB: "",
    currentPosition: "",
    headline: "",
    gender: "",
    pronouns: "",
    location: null,
  },
  about: {
    social: [],
  },
  experience: [],
  education: [],
  skills: [],
  categories: [],
  setCurrent: (current) => set({ current }),
  setProfile: (profile) => set({ profile }),
  setAbout: (about) => set({ about }),
  setExperience: (experience) => set({ experience }),
  setEducation: (education) => set({ education }),
  setSkills: (skills) => set({ skills }),
  setCategories: (categories) => set({ categories }),
}));
