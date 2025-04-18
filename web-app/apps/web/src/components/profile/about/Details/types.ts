import { Dayjs } from "dayjs";

export interface profile {
  country: string;
  language: string;
  phone: string;

  timeZone: string;
  fistName: string;
  lastName: string;
  email: string;
  DOB: Dayjs | string;
}

export interface about {
  currentPosition: string | null;
  linkedin: string | null;
  instagram: string | null;
  portfolio: String | null;
}

export interface AboutProps {
  about: about;
  setAbout: (about: about) => void;
  setCurrent: (id: any) => void;
  submit: (about: about) => void;
  loading: boolean;
}

export interface UserProfileProps {
  profile: profile;
  setProfile: (profile: profile) => void;
  setCurrent: (id: any) => void;
}

export interface experience {
  id: string;
  companyName: string;
  duration: [string | Dayjs];
  employmentType: string;
  location: string;
  locationType: string;
  title: string;
}

export interface experienceProps {
  experience: experience[];
  setExperience: (experience: any) => void;
  setCurrent: (id: any) => void;
}

export interface education {
  id: string;
  school: string;
  degree: string;
  grade: string;
  activities: string;
  description: string;
  duration: [string | Dayjs];
}

export interface educationProps {
  education: education[];
  setEducation: (education: any) => void;
  setCurrent: (id: any) => void;
}

export interface logo {
  logo: string;
}
