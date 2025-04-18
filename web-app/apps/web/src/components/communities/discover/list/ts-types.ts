export interface group {
  title: string;
  cover: string;
  id: string;
  slug: string;
  about: string;
  privacy: string;
  isGroupMember: boolean;
  isJoinRequest: boolean;
  isGroupAdmin: boolean;
  isTrending: boolean;
  numberOfUser: string;
  numberOfLikes: string;
  status: "NO_MEMBER" | "MEMBER" | "REQUEST_SEND";
  numberOfPost: string;
  groupSettings: groupSettings;
  numberOfViews: string;
  isFeatured: boolean;
}

export interface groupSettings {
  groupType: string;
  joiningCondition: string;
  privacy: string;
}

export interface allGroup {
  totalRecords: number;
  data: [group];
}

export interface GroupDetails {
  isFeatured: boolean;
  isWishList: boolean | null;
  isTrending: boolean;
  status: "NO_MEMBER" | "MEMBER" | "REQUEST_SEND";
  id: string;
  role: "ADMIN" | "USER" | string;
  groupSettings: GroupSettingsDetails;
  group: GroupInfo;

}

export interface GroupSettingsDetails {
  groupType: string;
  joiningCondition: string;
  privacy: string;

}

export interface GroupInfo {
  title: string;
  cover: string;
  slug: string;
  numberOfUser: number;
  numberOfLikes: number;
  numberOfPost: number;
  numberOfViews: number;
  privacy: string | null;

}
