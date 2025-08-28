import { User } from "@/types";

export const USER: User = {
  firstName: "Abhishek",
  lastName: "Jha",
  displayName: "Abhishek Jha",
  username: "0bhishek",
  gender: "Male",
  pronouns: "He/Him",
  bio: "Full Stack Developer. I build things, like to solve real world problems.",
  flipSentences: [
    "Abhishek Jha",
    "Software Developer",
    "I build things, like to solve real world problems",
  ],
  aniamtedText:[
    "Full Stack Developer",
    "React Native Developer",
    "A Passionate Learner",
    "A Curious Mind",
  ],
  address: "Kolkata, West Bengal, India",
  phoneNumber: "+91-9876543210",
  email: "iam@gmail.com",
  website: "https://0bhishek.tech",
  otherWebsites: [
    "https://github.com/0bhishek",
    "https://x.com/0bhishek",
    "https://linkedin.com/in/icoderabhishek",
  ],
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Independent Software Developer",
      company: "Self-employed",
      website: "https://0bhishek.tech",
    },
  ],
  about:
    "I am a software developer with experience in building full-stack web apps, React Native apps, and SaaS products. I love experimenting with new technologies, integrating APIs, and building tools that solve real-world problems.",
  avatar:
    "https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg",
  ogImage: "https://0bhishek.tech/og-image.png",
  namePronunciationUrl: "", // leave empty until you add an mp3 file
  keywords:
    "Abhishek Jha, Full Stack Developer, Software Engineer, Next.js, React Native, SaaS, Portfolio, Kolkata",
  dateCreated: new Date().toISOString(),
};
