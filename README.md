# Next.js for APP Engine

Next.js project configured to be deployed to an Google Cloud App Engine env.

Based on https://github.com/superbmeteor/nextjs-gae-demo

## Prerequisites

1. Install the [Google Cloud Platform SDK](https://cloud.google.com/sdk/).
2. Clone this repo.

## Configuring a New GCP Project and Application

If you have not set up a project and application to run this demo, follow the steps below. Otherwise, skip to the next section.

Authenticate GCP:

```javascript
gcloud auth login
```

Using the GCP CLI, create a new project and application. Replace `PROJECT-NAME` with your own.

```javascript
gcloud projects create PROJECT-NAME
gcloud config set project PROJECT-NAME
gcloud app create
```

Enable the Cloud Build API for your project by visiting the Cloud Build API page for your project. https://console.developers.google.com/apis/api/cloudbuild.googleapis.com/overview?project=PROJECT-NAME).

## Test the App

Start the app to make sure it runs properly.

```javascript
npm install
npm run dev
```

### Debugging locally

I am able to debug server side code using the following in my vscode launch.json file

```javasscipt
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next"
    }
  ]
}
```

### Build and Deploy

```javascript
npm run build
npm deploy
```

You will be returned a URL for your App.

## Troubleshooting

**Listen to port 8080**

The App Engine will route incoming requests to the appropriate module on port 8080. **You must be sure that your application code is listening on 8080.**

`"start": "next start -p 8080"`

or set it to the PORT env var

`"start": "next start -p $PORT"`

**Yarn**

At one point I could not get this to build and run via App Engine when running the commands using Yarn.

If App Engine finds a yarn.lock in the application directory, Yarn will be used to perform the npm installation.

For reasons unknown to me, this did not work. I have tested again and have been successful using yarn. So who knows.

It night have to do with the nodejs10 runtime I am targeting in the app.yaml?

**app.yaml**

Make sure the following are defined.

```
runtime: nodejs10

service: default
handlers:
- url: /.*
  script: auto
```
