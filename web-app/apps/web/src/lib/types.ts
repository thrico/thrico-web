export interface Company {
  id: string;
  industry: string;
  location: Record<string, unknown>;
  logo: string;
  name: string;
  pageType: string;
  size: string;
  tagline: string;
  type: string;
  website: string;
}

export interface location {
  name: string;
  latitude: number;
  longitude: number;
  address: string;
}

export interface ProfileType {
  country: string;
  language: string;
  phone: string;
  timeZone: string;
  fistName?: string;
  lastName?: string;
  email?: string;
  DOB: string;
  currentPosition: string;
  headline: string;
  gender: string;
  pronouns: string;
}

export interface UserProfileProps {
  profile: ProfileType;
  setProfile: (profile: UserProfileProps["profile"]) => void;
  setCurrent: (step: number) => void;
  getUser: GetUserType;
}

export interface location {
  name: string;
  latitude: number;
  longitude: number;
  address: string;
}
export interface experience {
  id: string; // Added id property
  title: string;
  company: {
    id: string;
    name: string;
    logo: string;
  };
  currentlyWorking: boolean;

  employmentType: string;
  location: location;
  locationType: string;
  duration: any;
  startDate?: string;
}

export interface education {
  id: string;
  degree: string;
  grade: string;
  activities: string;
  description: string;
  school: {
    id: string;
    name: string;
    logo: string;
  };
  duration: any; // Added duration as an optional tuple
}

export interface educationProps {
  setEducation: (education: education[]) => void;
  education: education[];
  setCurrent: (step: number) => void;
}

export interface ExperienceType {
  setExperience: (experience: ExperienceType[]) => void;
}

export interface experienceProps {
  setExperience: (experience: experience[]) => void;
  experience: experience[];
  setCurrent: (step: number) => void;
}

export interface GetUserType {
  firstName?: string;
  lastName?: string;
  email?: string;
}
export interface social {
  url: string;
  platform: string;
}

export interface AboutType {
  social: social[];
}

export interface ProfileStore {
  current: number;
  profile: ProfileType;
  about: AboutType;
  experience: experience[];
  education: education[];
  setCurrent: (current: number) => void;
  setProfile: (profile: ProfileType) => void;
  setAbout: (about: AboutType) => void;
  setExperience: (experience: experience[]) => void;
  setEducation: (education: education[]) => void;
  setSkills: (skills: string[]) => void;
  setCategories: (categories: string[]) => void;
  skills: string[];
  categories: string[];
  agreement: boolean;
  setAgreement: (agreement: boolean) => void;
}
