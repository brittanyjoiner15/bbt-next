import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import book from "../images/trello-book.jpg";
import newsletter from "../images/hit-logo-img.png";
import youtube from "../images/youtube-channel.png";
import EventImg from "../images/team-hero.png"; 
// import Header from "../components/Header";
import unito1 from "../images/unito1.png";
import unito2 from "../images/unito2.svg";
import crmble from "../images/crmble2.png";
import sendboard from "../images/sendboard.png";

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

            <div className={styles.card}>
              <h2>Need integrations for your Atlassian suite?</h2>
              <p>The Unito team will also be at Team24! Learn how we can help you launch your own live bidirectional integrations in less that 12 minutes.</p>
              
              <div className="flex justify-center py-4">
                <Image src={unito1} width={450} height={450} alt="Unito Integrations"/>
              </div>
              
              <div className="py-4">
              <a
                href="https://share.hsforms.com/1sR8zeOrJTYuhN22VECVVVg1lrbc"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Lets Connect
                </button>
              </a>
              </div>  
            </div>    

            <div className={styles.card}>
              <h2>Curious about Unito?</h2>
              <p>Unito is a platform where users sync data with 2-way enterprise-grade integrations that anyone can set up in minutes.</p>
              
              <div className="flex justify-center py-4">
                <Image src={unito2} width={450} height={200} alt="Unito"/>
              </div>
              
              <div className="py-4">
              <a
                href="https://unito.io/?utm_source=newsletter&utm_medium=landingpage&utm_campaign=brittanyjoiner"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
                </button>
              </a>
              </div>  
            </div>

            <div className={styles.card}>
              <h2>Using Trello as your CRM?</h2>
              <p>Learn how to with Crmble at the Atlassian Team24 event.</p>
              
              <div className="flex justify-center py-4">
                <Image src={crmble} width={500} height={500} alt="Crmble"/>
              </div>
              
              <div className="py-4">
              <a
                href="http://crmble.com/team24?utm_source=brittbuildsthings&utm_medium=banner&utm_campaign=team24"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more
                </button>
              </a>
              </div>  
            </div>   

             <div className={styles.card}>
              <h2>Turn Trello into a helpdesk</h2>
              <p>Transform any business inbox into a shared inbox in Trello using Email for Trello. Automation • Email Templates • Contact Management</p>
              
              <div className="flex justify-center py-4">
                <Image src={sendboard} width={500} height={337} alt="Sendboard"/>
              </div>
              
              <div className="py-4">
              <a
                href="https://www.sendboard.com/team-2024"
                rel="noopener noreferrer"
                target={"_blank"}
                >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                🔥 Learn more
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