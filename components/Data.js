import trello from "../images/trello.png";
import currencyConverter from "../images/currency-converter.png";
import raycast from "../images/raycast.jpeg";
import zapier from "../images/zapier.png";
import pixiebrix from "../images/pixiebrix-logo.png";
import productReview from "../images/product-feedback.png";
import sponsoredContent from "../images/sponsored-content.png";
import trelloHelp from "../images/trello-final.png";
import youtubeChannel from "../images/yt.png";
import mail from "../images/email.png";
import slack from "../images/slackNew.png";
import productHuntFinds from "../images/ph.png";
import learnToCode from "../images/code.png";
import euiEvent from "../images/eui-event.png";
import techOut from "../images/tech-out.png";
import trelloTips from "../images/trellotips.png";
import photoUrl from "../images/photo-url-generator.png";
import taxBracket from "../images/tax-bracket.png";
import drinkGenerator from "../images/drink-generator.png";
import scavenger from "../images/scavenger.png";
import jsLogo from "../images/js.png";
import tsLogo from "../images/ts.png";
import react from "../images/react.png";

export const techStack = [
  {
    description:
      "Project management tool, but has powerful automations and power-ups to turn it into an amazing no-code app builder",
    learnLink: "https://trello.com/britt_joiner/recommend",
    logo: trello,
    name: "Trello",
    tags: ["no code", "project management", "automation"],
  },
  {
    description:
      "Zapier is a tool that lets you connect multiple apps together to create automations. You'll walk through a wizard that makes it easy, yet powerful.",
    learnLink: "https://zapier.com/",
    logo: zapier,
    name: "Zapier",
    tags: ["no code", "automation", "many integrations"],
  },
  {
    description:
      "Although a bit of a learning curve at first, PixieBrix lets you create powerful extensions anywhere in your browser.",
    learnLink: "https://pixiebrix.com/",
    logo: pixiebrix,
    name: "PixieBrix",
    tags: ["low code", "chrome extension"],
  },
  {
    description:
      "Build all sorts of keyboard shortcuts and quick commands that you can execute from your desktop.",
    learnLink: "https://www.raycast.com/",
    logo: raycast,
    name: "Raycast",
    tags: ["low code", "automation"],
  },
];

export const codeTechStack = [
  {
    logo: jsLogo,
    name: "JavaScript",
  },
  {
    logo: tsLogo,
    name: "TypeScript",
  },
  {
    logo: react,
    name: "React",
  },
];

export const myProjects = [
  {
    description:
      "Created a template for events and conferences, then I open sourced it so others could contribute as well!",
    learnLink: "https://eui-event.vercel.app/",
    logo: euiEvent,
    name: "React + Eui Event Template",
    tags: ["React", "Javascript", "Eui", "Open Source"],
    repo: "https://github.com/brittanyjoiner15/eui-event-template",
  },
  {
    description:
      "I wanted to keep track of all the swag I have from tech companies! Peruse my collection.",
    learnLink: "https://tech-out-my-swag.netlify.app/",
    logo: techOut,
    name: "Tech Out My Swag",
    tags: ["React", "Javascript", "Polaris"],
    repo: "https://github.com/brittanyjoiner15/tech-out-my-swag",
  },
  {
    description:
      "I built this site that generates quick tips about Trello! From best practices to quick hacks and more!",
    learnLink: "https://www.trello-tips.com/",
    logo: trelloTips,
    name: "Trello Tip Generator",
    tags: ["React", "Javascript", "Tailwind"],
    repo: "https://github.com/brittanyjoiner15/trello-tips-launch",
  },
  {
    description:
      "Ever need a link for an image instead of a file? I built this so I could quickly store mine.",
    learnLink: "https://britt-photo-url-generator.netlify.app/",
    logo: photoUrl,
    name: "Photo URL Generator",
    tags: ["NextJs", "Javascript", "Firebase"],
    repo: "https://github.com/brittanyjoiner15/photo-url-generator-v2",
  },
  {
    description:
      "See how much you're actually paying in taxes in each tax bracket.",
    learnLink: "https://marginal-tax-bracket-breakout.netlify.app/",
    logo: taxBracket,
    name: "Tax Bracket Calculator",
    tags: ["React", "Javascript", "Eui"],
    repo: "https://github.com/brittanyjoiner15/tax-bracket",
  },
  {
    description: "Select your liquor and get some drink recipes.",
    learnLink: "https://britt-drinks.netlify.app/",
    logo: drinkGenerator,
    name: "Drink Recipe Generator",
    tags: ["React", "Javascript"],
    repo: "https://github.com/brittanyjoiner15/drink-generator",
  },
  {
    description:
      "I built a scavenger hunt for my mom's birthday! Don't worry she solved it.",
    learnLink: "https://clever-lamarr-a4851f.netlify.app/",
    logo: scavenger,
    name: "Scavenger Hunt",
    tags: ["React", "Javascript", "Eui"],
    repo: "https://github.com/brittanyjoiner15/scavenger",
  },
  {
    description:
      "You know, your basic currency converter. Currently broken, but enjoy the artifacts!",
    learnLink: "https://github.com/brittanyjoiner15/react-currency-converter",
    logo: currencyConverter,
    name: "Currency Converter",
    tags: ["React", "Javascript", "Eui"],
    repo: "https://github.com/brittanyjoiner15/react-currency-converter",
  },
];

export const brandRequests = [
  {
    image: productReview,
    requestCta: "Submit your product",
    requestDescription:
      "Got a product that you want me to review? Share your product and I'll give it a try!",
    requestLink: "https://app.bluecatforms.com/TyXkzND0/new-form",
    requestName: "Product feedback",
  },
  {
    image: sponsoredContent,
    requestCta: "Learn about content opportunities",
    requestDescription:
      "If you want to tell my audience about your product, or you want to me to make content for your users,  I'll build custom video and/or written content.",
    requestLink: "https://app.bluecatforms.com/8wPHstBC/new-form",
    requestName: "Sponsored content",
  },
  {
    image: trelloHelp,
    requestCta: "Show options",
    requestDescription:
      "If your team is looking for Trello help, I can build boards and workflows to help you focus on the tasks and not the administration. I can do a workshop on 1:1 consulting.",
    requestLink: "https://www.buymeacoffee.com/brittanyjoiner/extras",
    requestName: "Trello help",
  },
];

export const builderRequests = [
  {
    image: youtubeChannel,
    requestCta: "Start watching",
    requestDescription:
      "I post weekly showing things I'm building, and I also do periodic livestreams of the things I'm building and AMA's! I'd love to see you there, so make sure to subscribe for notifications",
    requestLink: "https://www.youtube.com/c/brittanyjoiner",
    requestName: "Check out my youtube channel",
  },
  {
    image: mail,
    requestCta: "Subscribe",
    requestDescription:
      "Each week I write about how I'm improving my workflow. Wanna get on the list?",
    requestLink: "https://app.snoopforms.com/f/ESOGk7ZU/",
    requestName: "Get the weekly newsletter",
  },
  {
    image: slack,
    requestCta: "Join the Community",
    requestDescription:
      "I created a community of folks learning to build code, low code, and no code!",
    requestLink:
      "https://join.slack.com/t/build-with-britt/shared_invite/zt-1ew1pk4w7-sVTSOA4QSA1B6kOpMUBE_A",
    requestName: "Come hang out in Slack",
  },
  {
    image: productHuntFinds,
    requestCta: "Discover new products",
    requestDescription:
      "I peruse Product Hunt every day looking for cool tools and apps to share with you!",
    requestLink: "https://trello.com/b/HL3mOTHx/product-hunt-finds/timeline",
    requestName: "See my favorite PH picks",
  },
  {
    image: learnToCode,
    requestCta: "Get the roadmap",
    requestDescription:
      "Learning to code can be daunting. Where do you start? I curate my favorite resources for people who want a guide to learning how to code.",
    requestLink: "https://trello.com/b/hjfQ9a3a/how-to-learn-to-code",
    requestName: "Learn to code",
  },
];
