import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, We are the <GradientText>Bone detection Team</GradientText> 👋
        </>
      }
      description={
        <>
          We are Maria, Irene, Carmen, Jorge, and Sergio. A team of students
          from the Master's program in Industrial Robotics and Automation at the
          Polytechnic University of Madrid. In this project, we have developed a
          system for bone detection in medical images.
        </>
      }
      avatar={
        <img
          className="w-80"
          src="/assets/images/intro.webp"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
