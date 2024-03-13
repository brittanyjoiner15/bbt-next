import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import book from "../images/trello-book.jpg";
import newsletter from "../images/hit-logo-img.png";
import youtube from "../images/youtube-channel.png";
import EventImg from "../images/team-hero.png"; 
import Header from "../components/Header";

export default function Event() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.container}>
        <Head>
          <title>Trello Team 24!</title>
          <meta
            name="description"
            content="Let's chat at team!"
          />
          <link rel="icon" href="/favicon.ico" />
          <link href="/dist/output.css" rel="stylesheet" />
        </Head>

        <main className={styles.main}>
          {/* <h1 className={styles.title}>Trello Time at Team!</h1> */}
          <div className="flex justify-center">
            <Image src={EventImg} width={500} height={500} alt="Upcoming Trello Workshop"/>
          </div>
          <div className="py-4 flex justify-center text-center">
          <p>
            Trying to find me in Vegas? Check my Trello board to see where I am!
          </p>
          </div>
    
          <div className="pb-4">
            <a
              href="https://trello.com/b/qad1ILl1/wheres-britt-at-team"
              rel="noopener noreferrer"
              target={"_blank"}
            >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                🔍 Find Brittany
                </button>
            </a>
          </div>

          

          <div className="py-4 text-4xl">
          <p>
            Want more Trello?
          </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h2>The Ultimate Trello Guide Book</h2>
              <p>Learn to supercharge productivity for your projects with my Trello guide book.</p>
              
              <div className="flex justify-center py-4">
                <Image src={book} width={354} height={422} alt="Trello Book"/>
              </div>
              <a
                href="https://packt.link/IQZmd"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                📚 Get the book
                </button>
              </a>
            </div>

            <div className={styles.card}>
              <h2>Exclusive Trello Tips Newsletter</h2>
              <p>Sign up for my newsletter to receive exclusive Trello news, tips, best practices, and inspiration.</p>
              
              <div className="flex justify-center py-4">
                <Image src={newsletter} width={350} height={350} alt="Trello Book"/>
              </div>

              <a
                href="https://trello.substack.com/"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                📧 Get weekly Trello tips
                </button>
              </a>
            </div>

            <div className={styles.card}>
              <h2>Learn more Trello</h2>
              <p>Subscribe to my YouTube channel to be notified when I post new content.</p>
              
              <div className="flex justify-center py-4">
                <Image src={youtube} width={450} height={350} alt="Trello Book"/>
              </div>

              <a
                href="https://www.youtube.com/c/brittanyjoiner"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                🛎️ Get notified
                </button>
              </a>
            </div>

            <div className={styles.card}>
              <h2>Want help?</h2>
              <p>If you need consulting, training, or a Trello build, just reach out! </p>
              
              
              <div className="py-4">
              <a
                href="https://forms.fillout.com/t/dHZnJo17Q9us"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                🙋 I need Trello help!
                </button>
              </a>
              </div>  
            </div>    

            
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