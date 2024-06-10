# Express Deployment with Render

![deploy](./public/images/readme-banner.png)

[This lesson](https://expressdeployment.onrender.com/) will walk you through the steps to deploy a [Node](https://nodejs.org/) [Express](https://expressjs.com/) app with [Render](https://render.com). We will walk through all of the necessary steps from start to finish.

## Objectives

- [Sign Up](#sign-up) for a Render account and connect your GitHub account
- Set up a new [Web Service](#create-a-new-web-service) from the Render Dashboard
- Adjust the [app settings](#adjust-the-app-settings) to properly build and deploy your app
- [Deploy](#deploy-your-app)

## Why deploy with Render?

Render removes much of the difficulties of deployment by connecting directly to your GitHub repository. In addition, it's one of the few services that will allow you to deploy an Express back-end server for free.
        
They brand themselves as "Your Fastest Path to Production". I think you'll find in this walkthrough that they deliver on that promise.

## Sign Up

***If you have never signed up with Render.com before...***

To start, you'll need to head over to Render.com and [sign up](https://dashboard.render.com/register) for an account. Feel free to sign up with your GitHub or Google account, or to make an account directly with Render.

## Create a New Web Service

From the Render [dashboard](https://dashboard.render.com/), you'll see that there are several different types of apps that you can deploy.

Under Web Services, select **New Web Service**.

The next page will ask how you would like to deploy your web service. 

Select **Build and deploy from a Git repository** and click "Next".

If you have not connected your GitHub account, do so now.

The next page will prompt you to connect one of your repositories. You may see your repo in the list, or you can search for it. Select the repo you want to deploy and click "Connect".

## Adjust the App Settings

Render should automatically detect that your app is using Node, and will autofill some of the fields in this section for you.

The only fields we will need to change are:
- Name (optional)
- Build Command
- Start Command
- Instance Type
- Environment Variables

The rest can be left how Render autofilled them.

Whatever **Name** you select for your app will determine the URL that is generated, like this:

```sh
Name: expressdeployment
```

Will produce...

```sh
https://expressdeployment.onrender.com
```

For the **Build Command**, put the following:

```sh
npm install
```

For the **Start Command**, you'll need to put the command that you run to start your Express server. Possibly:

```sh
npm run dev
```

For the **Instance Type**, make sure you select "Free". This will not require you to enter credit card information, and is great for simple hobby projects.

Under **Environment Variables**, you will need to add your Database URI and it's associated env variable. If you have any other environment variables that your app uses, be sure and add these here as well.

Once you've filled out all of the required fields, click "Create Web Service".

## Deploy Your App

On the next page, Render will automatically begin deploying your app. You can view the log for errors, and once the deployment is complete, you should see:

```sh
==> Your site is live 🎉
```

Your app is deployed!

## Recap

In this walkthrough, you successfully deployed your Node Express app to Render.

Any time you make changes to your project that you want reflected on your deployed version, just commit your changes and push up to your **main** branch. Render will automatically re-deploy the app!

## Resources

- [Render Docs](https://docs.render.com/)
