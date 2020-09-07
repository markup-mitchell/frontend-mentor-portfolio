export default function ({ text, projectName }) {
  return (
    <>
      <h2 className="text-p3 font-serif text-3xl tracking-tight">
        Project Background
      </h2>
      <p className="mt-7 leading-loose text-p3">{text}</p>

      <h2 className="mt-10 text-p3 font-serif text-3xl tracking-tight">
        Static Previews
      </h2>
      <div className="mt-10 lg:mt-7">
        <img
          src={`../images/detail/mobile/image-${projectName}-preview-1@2x.jpg`}
          alt=""
        />
      </div>
      <div className="mt-8">
        <img
          src={`../images/detail/mobile/image-${projectName}-preview-2@2x.jpg`}
          alt=""
        />
      </div>
    </>
  );
}
