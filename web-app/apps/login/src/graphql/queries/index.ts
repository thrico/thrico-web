import { gql } from "@apollo/client";

export const GET_YEAR = gql`
  query Books {
    books {
      author
      title
    }
  }
`;

export const GOOGLE_LOGIN = gql`
  mutation LoginByGoogle($input: googleLogin) {
    loginByGoogle(input: $input) {
      token
    }
  }
`;
export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      firstName
      lastName
      email
      isProfileCompleted
    }
  }
`;

export const CHECK_PROFILE = gql`
  query CheckProfile {
    checkProfile {
      status
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation CreateProfile($input: profileCreation) {
    createProfile(input: $input) {
      status
    }
  }
`;

export const CHECK_DOMAIN = gql`
  query CheckDomain($domain: String) {
    checkDomain(domain: $domain) {
      organizationName
      logo
      theme {
        borderRadius
        colorBgContainer
        colorPrimary
      }
    }
  }
`;
export const CHECK_ORGANIZATION = gql`
  query checkEntity($token: String!) {
    checkEntity(token: $token) {
      logo
      name
      theme {
        borderRadius
        colorPrimary
        colorBgContainer
      }
    }
  }
`;
export const EMAIL_LOGIN = gql`
  mutation LoginByEmail($input: emailLogin) {
    loginByEmail(input: $input) {
      id
    }
  }
`;
export const CHECK_OTP_DETAILS = gql`
  query CheckOtpDetails($input: inputOtpDetails) {
    checkOtpDetails(input: $input) {
      email
    }
  }
`;

export const LOGIN_BY_OTP = gql`
  mutation LoginByOtp($input: otpInput) {
    loginByOtp(input: $input) {
      token
    }
  }
`;

export const GET_TAGS = gql`
  query getEntityTag {
    getEntityTag {
      title
    }
  }
`;

export const ADD_PAGE = gql`
  mutation AddPage($input: pageInput) {
    addPage(input: $input) {
      name
      logo
      location
      type
      industry
      website
      pageType
      size
      tagline
      id
    }
  }
`;

export const GET_PAGES = gql`
  query GetAllPages($input: searchPageInput) {
    getAllPages(input: $input) {
      name
      logo
      location
      type
      industry
      website
      pageType
      size
      tagline
      id
    }
  }
`;
