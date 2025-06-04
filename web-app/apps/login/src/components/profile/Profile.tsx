import React from "react";
import { Flex, Steps } from "antd";

import UserProfile from "./UserProfile/UserProfile";
import Experience from "./experience/Experience";
import About from "./About/About";
import { createProfile, useGetUser } from "../../graphql/actions";
import Education from "./education/Education";
import { GetUserType, ProfileStore } from "@/lib/types";

import { SkillForm } from "./Interests";
import AgreementDrawer from "./AgreementDrawer";
import { useProfileStore } from "@/store/profileStore";

const Profile = ({ getUser }: { getUser: GetUserType }) => {
  console.log(getUser);
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
    agreement,
    setAgreement,
  } = useProfileStore();

  const [loadingProfile, setLoadingProfile] = React.useState(true);

  React.useEffect(() => {
    if (getUser?.profile) {
      setProfile(getUser?.profile?.profile);
      setAbout(getUser?.profile?.about || {});
      setExperience(getUser?.profile?.experience || []);
      setEducation(getUser?.profile?.education || []);
      setSkills(getUser?.profile?.skills || []);
      setCategories(getUser?.profile?.categories || []);
      setLoadingProfile(false);
    } else {
      setLoadingProfile(false);
    }
  }, [getUser]);

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
        {!loadingProfile && (
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
                  agreement={agreement}
                  setAgreement={setAgreement}
                />
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Profile;
