<a href="https://corewave.xyz">
  <img alt="CoreWave – an open-source link management tool for modern marketing teams to create, share, and track short links." src="https://user-images.githubusercontent.com/28986134/200727801-6355c62e-60b5-45d7-a83d-44b11545e471.png">
  <h1 align="center">CoreWave</h1>
</a>

<p align="center">
  An open-source link management tool for modern marketing teams to create, share, and track short links.
</p>

<p align="center">
  <a href="https://twitter.com/corewave">
    <img src="https://img.shields.io/twitter/follow/corewave?style=flat&label=%40corewave&logo=twitter&color=0bf&logoColor=fff" alt="Twitter" />
  </a>
  <a href="https://news.ycombinator.com/item?id=32939407"><img src="https://img.shields.io/badge/Hacker%20News-255-%23FF6600" alt="Hacker News"></a>
  <a href="https://github.com/juancamiloqhz/dub/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/juancamiloqhz/dub?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Introduction

CoreWave is an open-source link management tool for modern marketing teams to create, share, and track short links. Built with [Vercel Edge Functions](http://vercel.com/edge), [Upstash Redis](https://docs.upstash.com/redis), and [Planetscale MySQL](https://planetscale.com/).

Here are some of the features that CoreWave provides out-of-the-box:

### Built-in Analytics

CoreWave provides a powerful analytics dashboard for your links, including geolocation, device, and browser information.

![Analytics Dashboard](https://user-images.githubusercontent.com/28986134/200727883-40fe9e62-93a2-48b6-8316-4ce3e6f490f0.png)

### Custom domains

You can easily configure custom domains on CoreWave – just add an A/CNAME record to your DNS provider and you're good to go. This is built on the [Vercel Domains API](https://domains-api.vercel.app/).

![Custom Domains](https://user-images.githubusercontent.com/28986134/200727913-432734b4-4fc7-46ef-b09f-cc8262dc8a0d.png)

### QR Code Generator

You can easily generate and customize QR codes for your links, which can be used for flyers, posters, powerpoint presentations, etc.

![QR Code](https://user-images.githubusercontent.com/28986134/200727932-2259628b-8f89-4017-896d-a355940222db.png)

### OG Image Proxy

Add a custom OG image in front of your target URL. Bots like Twitter/Facebook will be served this image, while users will be redirected to your target URL.

![OG Image Proxy](https://user-images.githubusercontent.com/28986134/200727958-e8a5ac24-644b-45c6-8018-41c4dea25cd1.gif)

## Deploy Your Own

> Note: one-click deployment is a bit broken at the moment – you'll need to change some of the hard-coded values in the codebase to get it working. We're working on fixing this.

You can deploy your own hosted version of CoreWave for greater privacy & control. Just click the link below to deploy a ready-to-go version of CoreWave to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://corewave.xyz/deploy)

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Typescript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Upstash](https://upstash.com/) – redis
- [Tinybird](https://tinybird.com/) – analytics
- [Planetscale](https://planetscale.com/) – database
- [NextAuth.js](https://next-auth.js.org/) – auth
- [Vercel](https://vercel.com/) – hosting
- [Stripe](https://stripe.com/) – payments

## Implementation

CoreWave is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

[Redis](https://redis.io/) is used as the caching layer for all short links.

[Clickhouse](https://clickhouse.com/) ([Tinybird](https://tinybird.com/)) is used as the analytics database for storing link click data.

[MySQL](https://www.mysql.com/) is used as the database for storing user data, project data, and link metadata. You can refer to the Prisma schema [here](/prisma/schema.prisma).

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/juancamiloqhz/dub/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/juancamiloqhz/dub/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/juancamiloqhz/dub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=juancamiloqhz/dub" />
</a>

## Author

- Juan ([@juancamiloqhz](https://twitter.com/juancamiloqhz))

## License

Inspired by [Plausible](https://plausible.io/), CoreWave is open-source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/juancamiloqhz/dub/blob/main/LICENSE.md).
