<p align="center">
    <h1 align="center">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon-dark.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
        <img width="40" alt="Semaphore icon." src="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
      </picture>
      Semaphore Explorer
    </h1>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol" target="_blank">
        <img src="https://img.shields.io/badge/project-Semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://eslint.org/">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint">
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>
    <img alt="Repository top language" src="https://img.shields.io/github/languages/top/semaphore-protocol/semaphore?style=flat-square">
</p>

<div align="center">
    <h4>
        <a href="/CONTRIBUTING.md">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="/CODE_OF_CONDUCT.md">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/semaphore-protocol/explorer/contribute">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://semaphore.appliedzkp.org/discord">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| Semaphore Explorer uses the [`@semaphore-protocol/data`](https://github.com/semaphore-protocol/semaphore/tree/main/packages/data) library to fetch on-chain groups and show them with a nice UI. If you want to add features, fix bugs or improve the project feel free to open an issue, fork this repository and open a PR.
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/semaphore-protocol/explorer.git
```

And install the dependencies:

```bash
cd explorer && yarn
```

## 📜 Usage

### Local development

Run the app locally:

```bash
yarn dev
```

And open [http://localhost:3000](http://localhost:3000) with your browser to use it.

### Code quality and formatting

Run [ESLint](https://eslint.org/) to analyze the code and catch bugs:

```bash
yarn lint
```

Run [Prettier](https://prettier.io/) to check formatting rules:

```bash
yarn prettier
```

Or to automatically format the code:

```bash
yarn prettier:write
```

### Conventional commits

Semaphore uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). A [command line utility](https://github.com/commitizen/cz-cli) to commit using the correct syntax can be used by running:

```bash
yarn commit
```

It will also automatically check that the modified files comply with ESLint and Prettier rules.

## 🤓 Original author

-   [@calebanderson526](https://github.com/calebanderson526)
