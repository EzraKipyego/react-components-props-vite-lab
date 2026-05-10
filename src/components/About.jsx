function About(props) {
  const image =
    props.image || "https://via.placeholder.com/215";

  const about = props.about || "";

  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;