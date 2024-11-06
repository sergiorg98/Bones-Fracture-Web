import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <hr />
    <Newsletter
      title={
        <>
          Subscribe to our <GradientText>Newsletters</GradientText>
        </>
      }
      description="In it, you will receive all the latest updates on our research and stay up to date with the latest news."
    />
  </Section>
);

export { CTA };
