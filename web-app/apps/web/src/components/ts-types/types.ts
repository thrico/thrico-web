export interface eventVenue {
  id: string;
  venue: string;
  address: string;
  event: string;
}

export interface user {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  aboutAlumni: about;
}

export interface eventSpeakers {
  id: string;
  fullName: string;
  linkedin: string;
  cover: string;
  about: string;
}
export interface about {
  currentPosition: string;
}
