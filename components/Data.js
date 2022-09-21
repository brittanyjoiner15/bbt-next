import trello from "../images/trello.png";
import zapier from "../images/zapier.png";
import pixiebrix from "../images/pixiebrix-logo.png";
import productReview from "../images/product-review.gif";
import sponsoredContent from "../images/sponsored-content.gif";
import trelloHelp from "../images/trello-help.gif";
import youtubeChannel from "../images/youtube-channel.gif";
import mail from "../images/mail.gif";
import slack from "../images/slack.gif";
import productHuntFinds from "../images/product-hunt-finds.gif";
import learnToCode from "../images/learn-to-code.gif";

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
];

export const myToolsStack = [
  {
    description: "Currency converter ",
    learnLink: "",
    logo: pixiebrix,
    name: "Currency Converter",
    tags: ["React", "Javascript"],
  },
  {
    description:
      "See how much you're actually paying in taxes in each tax bracket. ",
    learnLink: "",
    logo: pixiebrix,
    name: "Marginal Tax Bracket Calculator",
    tags: ["React", "Javascript"],
  },
];

export const brandRequests = [
  {
    image: productReview,
    requestCta: "Submit a product",
    requestDescription:
      "Got a product that you want me to review? Share your product and I'll give it a try!",
    requestLink: "https://app.bluecatforms.com/TyXkzND0/new-form",
    requestName: "Product Reviews",
  },
  {
    image: sponsoredContent,
    requestCta: "Learn about content opportunities",
    requestDescription:
      "If you want to tell my audience about your product, or you want to me to make content for your users,  I'll build custom video and/or written content.",
    requestLink: "https://app.bluecatforms.com/8wPHstBC/new-form",
    requestName: "Request content",
  },
  {
    image: trelloHelp,
    requestCta: "Show options",
    requestDescription:
      "If your team is looking for Trello help, I can build boards and workflows to help you focus on the tasks and not the administration. I can do a workshop on 1:1 consulting.",
    requestLink: "https://www.buymeacoffee.com/brittanyjoiner/extras",
    requestName: "Trello consulting & training",
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
