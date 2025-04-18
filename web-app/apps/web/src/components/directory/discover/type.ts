export interface aboutAlumni {
  currentPosition: string;
}

export interface follower {
  isFollower: boolean;
  isConnection: boolean;
  connection: boolean;
}
interface isRequestedUser {
  isAccepted: boolean;
  isRequested: boolean;
}

export interface events {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  aboutAlumni: aboutAlumni;
  isConnectIonRequested: follower;
  isRequestedUser: isRequestedUser;
  isFollowing: boolean;
}

export interface allUser {
  data: events[];
}
