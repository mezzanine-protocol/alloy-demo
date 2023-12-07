# Alloy Demo Application

## Getting Started

Welcome to the Alloy Demo App! This is a Node.js web app that is preconfigured to integrate with your Alloy account. To get started running the app on your machine, follow the instructions below.

1. [Install Node.js and npm](https://nodejs.org/en/download) (version 16 or later) if you haven't already. To check if you have Node.js installed, run:
```sh
node -v
```
This will print your current Node.js version if it exists.

2. Install the project dependencies using Node's package manager, `npm`. From the root of your `demo-app` repo, run:
```sh
npm ci
```

3. Run the development server. From the root of your `demo-app` repo, run:
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see your app. You should now be able to enable one or more journeys or workflows to fit your use case. As you fill out and submit the various forms in the demo app, you should see your demo applicants show up in the Alloy dashboard. Note that the demo app connects with Alloy's sandbox API, so all evaluations and journey applications created by the demo app will be in sandbox mode.

## Learn More

This app is built using Next.js, an open-source web development framework that uses React for its front end. To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
