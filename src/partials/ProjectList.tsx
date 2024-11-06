import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Our <GradientText>Goals</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Online analysis of yours medical images"
        description=" We are working on a project that will help you to analyze your medical images online. You can upload your medical images and get the analysis report online. We are using machine learning and deep learning algorithms to analyze your medical images. We are working on this project and we will launch it soon."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Web</Tags>
            <Tags color={ColorTags.INDIGO}>API</Tags>
          </>
        }
      />
      <Project
        name="The best algorithm for bone fracture detection"
        description="We are working to develop an algorithm that efficiently and accurately detects bone fractures in medical images using computer vision."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>OpenCV</Tags>
            <Tags color={ColorTags.AMBER}>TensorFlow</Tags>
          </>
        }
      />
      <Project
        name="Get your results instantly"
        description="You won't have to wait hours to get your results. With our application, you can know if you need treatment and should go to your nearest hospital."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
