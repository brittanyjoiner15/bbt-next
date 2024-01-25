import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import book from "../images/trello-book.jpg";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Supercharging Productivity with Trello</title>
          <meta
            name="description"
            content="A book for Trello newbies and experts to take their Trello knowledge to the next level."
          />
          <link rel="icon" href="/logo.png" />
          <link href="/dist/output.css" rel="stylesheet" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Up your Trello game with my new book!</h1>
          <br />
          <div className="flex justify-center md:px-64 pb-4 text-center">
          I spent most of 2023 distilling as much of my Trello knowledge as possible into one book!
          <br/>
          <br/>
          This book is an expert's guide to unleash your productivity potential for 
          work and personal projects with Trello automation, advanced features, integrations, 
          Power-Ups, and more!
          <br/>
          <br/>
          In this book you'll learn: 
          <br/>
          <br/>
          ✅ How to use the core components of Trello
          <br/>
          ✅ Common use cases and templates to get started
          <br/>
          ✅ How to set up the most common automation
          <br/>
          ✅ Which Power-Ups will set you up for success
          </div>
          <div className="flex justify-center">
          <a href="https://packt.link/IQZmd" target="_blank"><Image src={book} width={354} height={422} /></a>
          </div>
          
          <div className={styles.grid}>
            
            <a href="https://packt.link/IQZmd" className={styles.bookCard}>
              <h2>Get your copy</h2>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with Next.js, Tailwind, Icons8
          </a>
        </footer>
      </div>
    </>
  );
}
