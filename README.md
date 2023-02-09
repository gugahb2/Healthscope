## Getting Started

Install the project dependencies:

```bash
yarn install
```

Run the development server:

```bash
# for storybook dev
yarn dev:storybook
# for nextjs dev
yarn dev
```

If you run storybook, it will run on [http://localhost:4000](http://localhost:4000)

If you are running a nextjs dev server, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

Each feature should be developed on a feature branch and submitted in a PR once done. The target should always be the Develop branch.

## Deploy instructions and environments.

We are using Vercel for deployments.

- develop branch is used for DEV and noodle UAT sites
- uat branch is used for UAT domains
- master branch is used for PROD

## Vercel Deployments

Vercel GIT integration is setup to perform automatic deployments from develop, uat, and master branches.

## To deploy a PR

- All PRs should be created against develop branch
- Before merging anything, it is a good idea to run 'yarn build' locally to see if there are any build errors
- If the branch author is a Vercel team member, merging it to develop branch will trigger a deployment
- If not, once a team member merges it, a Vercel team member must commit something to develop branch to trigger a deployment
- Merge develop branch into uat branch to trigger a uat deployment
- Merge uat branch into master branch to trigger a prod deployment

- Push deployment
