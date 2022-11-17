export default function Image({ title, src, alt, width, height }) {
  return (
    <>
      <h2> {title} </h2>
      <img src={src} alt={alt} width={width} height={height} />
    </>
  );
}
