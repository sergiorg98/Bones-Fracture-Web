import { GradientText, Section } from 'astro-boilerplate-components';

import { Newsletter } from '../components/Newsletter';

const CTA = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <Newsletter
        title={
          <>
            Subscribe to our <GradientText>Newsletters</GradientText>
          </>
        }
        description="In it, you will receive all the latest updates on our research and stay up to date with the latest news."
      />
    </div>
  </Section>
);

export { CTA };
