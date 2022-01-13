import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react/cjs/react.production.min";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import styles from "../styles/Home.module.css";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with nextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the Reactjs framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with nextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the Reactjs framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with nextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the Reactjs framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with nextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the Reactjs framework for production",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
