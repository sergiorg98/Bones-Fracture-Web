type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
};

const Downloader = (props: IProjectProps) => (
  <div className="mx-auto flex h-32  w-auto flex-col items-center justify-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="flex flex-col items-center gap-y-2 md:flex-row">
      <a
        className="hover:text-cyan-400"
        href={props.link}
        download="DetectorDeFracturas.zip"
      >
        <div className="text-xl font-semibold">{props.name}</div>
      </a>
    </div>

    <div className="shrink-0">
      <a href={props.link} download="DetectorDeFracturas.zip">
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>
  </div>
);

export { Downloader };
