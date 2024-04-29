import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import brittany from "../images/brittanyjpg.jpg";
import Header from "../components/Header";
import mixpanel from 'mixpanel-browser';

export default function Home() {
  mixpanel.init('95940c98a40d877bdca95440b74db577', {debug: true, track_pageview: true, persistence: 'localStorage'});
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Britt Builds Things</title>
          <meta
            name="description"
            content="I like to build things. For people and brands."
          />
          <link rel="icon" href="/logo.png" />
          <link href="/dist/output.css" rel="stylesheet" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>👋 Hi I&apos;m Brittany!</h1>
          <br />
          <div className="flex justify-center">
            <div className="grid m-5 p-5 align-middle grid-cols-1 md:grid-cols-2  w-full md:w-1/2">
              I really like to build things. I used to work in marketing, where
              I built brands and campaigns for companies to connect with more
              users. Then I learned to code and became a software developer, and now I 
              combine all my skills together and work in Developer Relations!
              <br />
              <br />
              Sometimes I use code to build, but sometimes, I actually prefer to
              use other tools to build. Things you might not consider
              &quot;tools&quot; but they&apos;ve saved me time and made for
              better workflows.
              <div className="m-4">
                <Image src={brittany} width={400} height={300} />
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            
            <a href="./tools" className={styles.card}>
              <h2>🧰 Check out my toolbox</h2>
            </a>
            <a href="./products" className={styles.card}>
              <h2>💻 View my projects</h2>
            </a>
            <a href="./book" className={styles.card}>
              <h2>📚 Get my book</h2>
            </a>
          </div>

          {/* <iframe
            src="https://app.fillout.com/flow/hPyPLpsEuDus"
            width="75%"
            height="500px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="newsletter signup"
          >
            {" "}
          </iframe> */}
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
