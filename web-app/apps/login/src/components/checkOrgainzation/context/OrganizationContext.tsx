// context/OrganizationContext.tsx
import { createContext, useContext } from "react";

interface OrganizationContextType {
  organizationName?: string;
  logo?: string;
  settings?: {
    allowNewUser?: boolean;
    termAndConditionsMembers: string;
  };
  theme?: Record<string, any>;
}

export const OrganizationContext = createContext<OrganizationContextType>({});

export const useOrganization = () => useContext(OrganizationContext);
