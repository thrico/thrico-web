import React from "react";
import { Flex, Steps } from "antd";

import UserProfile from "./UserProfile/UserProfile";
import Experience from "./experience/Experience";
import About from "./About/About";
import { createProfile, useGetUser } from "../../graphql/actions";
import Education from "./education/Education";
import { GetUserType, ProfileStore } from "@/lib/types";
import { create } from "zustand";

import { SkillForm } from "./Interests";

const useProfileStore = create<ProfileStore>((set) => ({
  current: 0,
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

const Profile = ({ getUser }: { getUser: GetUserType }) => {
  const {
    current,
    profile,
    about,
    experience,
    education,
    setCurrent,
    setProfile,
    setAbout,
    skills,
    categories,
    setExperience,
    setEducation,
    setSkills,
    setCategories,
  } = useProfileStore();

  console.log(profile);

  const [create, { loading }] = createProfile({
    async onCompleted() {
      refetch();
    },
  });
  const { refetch } = useGetUser();

  const submit = async () => {
    await create({
      variables: {
        input: {
          profile,
          about,
          experience,
          education,
          skills,
          categories,
        },
      },
    });
  };

  return (
    <>
      <Steps
        size="small"
        current={current}
        items={[
          { title: "About You" },
          { title: "Education" },
          { title: "Experience" },
          { title: "Profile" },
          { title: "Interests" },
        ]}
      />
      <Flex style={{ width: "100%" }} justify="center" align="center">
        <Flex vertical style={{ width: "100%" }}>
          <Flex style={{ width: "100%", marginTop: "1rem" }}>
            {current === 0 && (
              <UserProfile
                setProfile={setProfile}
                profile={profile}
                setCurrent={setCurrent}
                getUser={getUser}
              />
            )}
            {current === 1 && (
              <Education
                setEducation={setEducation}
                education={education}
                setCurrent={setCurrent}
              />
            )}
            {current === 2 && (
              <Experience
                setExperience={setExperience}
                experience={experience}
                setCurrent={setCurrent}
              />
            )}
            {current === 3 && (
              <About
                setAbout={setAbout}
                social={about.social}
                setCurrent={setCurrent}
              />
            )}
            {current === 4 && (
              <SkillForm
                submit={submit}
                loading={loading}
                setCurrent={setCurrent}
                setSkills={setSkills}
                setCategories={setCategories}
                categories={categories}
                skills={skills}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Profile;
