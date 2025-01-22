import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2895 5.7897C13.438 6.32603 13.4622 6.97541 13.0687 7.3689L7.3689 13.0687C6.97541 13.4622 6.32603 13.438 5.7897 13.2895C4.77646 13.0092 3.48102 13.3942 2.73779 14.1374C1.75407 15.1212 1.75407 16.7161 2.73779 17.6998C3.72152 18.6835 5.31646 18.6835 6.30018 17.6998C5.31646 18.6835 5.31646 20.2785 6.30018 21.2622C7.28391 22.2459 8.87884 22.2459 9.86257 21.2622M14.1374 2.73779C15.1212 1.75407 16.7161 1.75407 17.6998 2.73779C18.6835 3.72152 18.6835 5.31646 17.6998 6.30018C18.6835 5.31646 20.2785 5.31645 21.2622 6.30018C22.2459 7.28391 22.2459 8.87884 21.2622 9.86257C20.519 10.6058 19.2235 10.9908 18.2103 10.7105C17.674 10.562 17.0246 10.5378 16.6311 10.9313L10.9313 16.6311C10.5378 17.0246 10.562 17.674 10.7105 18.2103"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2322 10.2324V12.3537L12.3535 11.6466V13.0608L14.9996 12.5001"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          name="Bone Fracture Detection"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/sergiorg98/Bones-Fracture">
          GitHub
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
