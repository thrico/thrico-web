export interface member {
  avatar: string;
}
export interface group {
  id: string;
  title: string;
  privacy: string;
  about: string;
  cover: string;
  isGroupMember: boolean;
  groupMember: member[];
  isGroupAdmin: boolean;
  isJoinRequest: boolean;
}

export interface groupProps {
  data: group;
  refresh: any;
}
