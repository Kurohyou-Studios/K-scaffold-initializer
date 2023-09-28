<div id="top"></div>
<span align="center">

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![mit License][license-shield]][license-url]

</span>
<span align="center">

[![LinkedIn][linkedin-shield]][linkedin-url] [![Patreon][patreon-shield]][patreon-url]

</span>
<!-- PROJECT LOGO -->
<br />
<div align="center">
<a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer">
</a>
<h3 align="center">K-scaffold Initializer</h3>
<p align="center">

Runs basic project setup for K-scaffold based Roll20 character sheets


<a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer"><strong>Explore the docs »</strong></a>


<a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer">View Demo</a> · <a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer/issues">Report Bug</a> · <a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer/issues">Request Feature</a>
</p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#about-the-project">About The Project</a>
<ul>
<li><a href="#built-with">Built With</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
</ul>
</li>
<li><a href="#usage">Usage</a></li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>
</details>
<!-- ABOUT THE PROJECT -->

## About The Project

### Built With
- JS
  - Inquirer
  - handlebars
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

While not required for this module to function, the folder structure that it creates will be mostly useless if you do not install the K-scaffold in the generated directory.

### Installation

Install the script globally to have access to the CLI keyword `k-init`.
```
npm i -g @kurohyou/k-init
```
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->

## Usage

Once installed globally, simply use the `k-init` cli command to begin project initialization.

The initializer will create the following folder structure:
```
./
├─ build/
├─ source/
│ ├─ articles/
│ │ └─_settings.pug
│ ├─ javascript/
│ │ └─_index.pug
│ ├─ mixins/
│ │ └─_index.pug
│ ├─ rolltemplate/
│ │ └─_index.pug
│ ├─ scss/
│ │ ├─ sections/
│ │ │ └─_index.scss
│ │ ├─ components/
│ │ │ └─_index.scss
│ │ ├─ _index.scss
│ │ ├─ _general.scss
│ │ ├─ _variables.scss
│ │ ├─ _fonts.scss
│ │ ├─ _index.scss
│ ├─ sheet_name.pug
│ └─ sheet_name.scss
├─ k.config.mjs
├─ package.json
└─ jsconfig.json
```
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Kurohyou-Studios/K-scaffold-initializer/issues) for a full list of proposed features (and known issues).
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTRIBUTING -->

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- LICENSE -->

## License
Distributed under the mit License. See [LICENSE.txt](LICENSE.txt) for more information.
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTACT -->

## Changelog
v2.0.0
- Updated to support v2 K-scaffold
v1.1.1
- Fixed a problem with the generated package.json
v1.1.0
- Updated to support v1.1.x of the K-scaffold


## Contact

Scott Casey - [@kurohyoustudios](https://twitter.com/kurohyoustudios) - scaseydv@gmail.com


Project Link: [https://github.com/Kurohyou-Studios/K-scaffold-initializer](https://github.com/Kurohyou-Studios/K-scaffold-initializer)
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

[Riernar](https://github.com/Riernar) has been invaluable for improving the K-scaffold framework itself and this initializer would not be possible without the improvements that they suggested and/or provided to the K-scaffold itself.

This readme template adapted from the [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md) by [Othneil Drew](https://github.com/othneildrew). Readme generated by [Genme! by Scott Casey](https://github.com/Kurohyou/genme-SC).

<p align="right">(<a href="#top">back to top</a>)</p>
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Kurohyou-Studios/K-scaffold-initializer.svg?style=flat
[contributors-url]: https://github.com/Kurohyou-Studios/K-scaffold-initializer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kurohyou-Studios/K-scaffold-initializer.svg?style=flat
[forks-url]: https://github.com/Kurohyou-Studios/K-scaffold-initializer/network/members
[stars-shield]: https://img.shields.io/github/stars/Kurohyou-Studios/K-scaffold-initializer.svg?style=flat
[stars-url]: https://github.com/Kurohyou-Studios/K-scaffold-initializer/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kurohyou-Studios/K-scaffold-initializer.svg?style=flat
[issues-url]: https://github.com/Kurohyou-Studios/K-scaffold-initializer/issues
[license-shield]: https://img.shields.io/github/license/Kurohyou-Studios/K-scaffold-initializer.svg?style=flat
[license-url]: https://github.com/Kurohyou-Studios/K-scaffold-initializer/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/scott-casey-20210398
[patreon-shield]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dkurohyoustudios%26type%3Dpatrons&style=flat
[patreon-url]: https://patreon.com/kurohyoustudios
[product-screenshot]: assets/images/screenshot.png