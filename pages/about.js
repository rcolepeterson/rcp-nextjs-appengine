import fetch from "isomorphic-unfetch";
import Link from "next/link";

const About = props => (
  <div>
    <h1>About Batman TV Shows</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    <ul>
      {props.shows &&
        props.shows.map(show => (
          <li key={show.id}>
            <p>
              <a>{show.name}</a>
            </p>
          </li>
        ))}
    </ul>
  </div>
);

About.getInitialProps = async function() {
  const res = await fetch("//api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default About;
