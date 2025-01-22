import { Section } from 'astro-boilerplate-components';

import { Downloader } from '../components/Downloader';

const DownloadApp = () => (
  <Section>
    <div className="flex flex-col gap-6">
      <Downloader
        name="Download the new version app"
        description=" We are working on a project that will help you to analyze your medical images online. You can upload your medical images and get the analysis report online. We are using machine learning and deep learning algorithms to analyze your medical images. We are working on this project and we will launch it soon."
        link="https://drive.google.com/file/d/1PCXxBVtTc_wYvVg19mT7ykkEH8iBVFSZ/view?usp=sharing"
        img={{
          src: '/assets/images/flechaDecarga.png',
          alt: 'Download arrow',
        }}
      />
    </div>
  </Section>
);

export { DownloadApp };
