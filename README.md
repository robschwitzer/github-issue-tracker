## Environment Variables

To run this project, you will need to first create a `.env.local` file

```bash
touch .env.local
```

 add then add the following environment variable to it

`NEXT_PUBLIC_GITHUB_PAT=your-token`

To generate a github personal access token, follow [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Run Locally

Clone the project

```bash
  git clone https://github.com/robschwitzer/github-issue-tracker
```

Go to the project directory

```bash
  cd github-issue-tracker
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

OR

Make a production build and serve the static bundle

```bash
  yarn build && yarn start
```