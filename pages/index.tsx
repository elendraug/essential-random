import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { ProfileCard } from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <ProfileCard />
        <section>
          <h2>Where to find me on the web</h2>
          <ul className="social-links">
            <li>
              <a rel="me" href="https://twitter.com/essentialrandom">
                Twitter
              </a>
            </li>
            <li>
              <a rel="me" href="https://essential-randomness.tumblr.com/">
                Tumblr
              </a>
            </li>
            <li>
              <a rel="me" href="https://github.com/essential-randomness">
                GitHub
              </a>
            </li>
            <li>
              <a rel="me" href="https://www.twitch.tv/essentialrandomness">
                Twitch
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
