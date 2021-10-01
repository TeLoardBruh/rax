<template>
  <div id="nav">
    <div class="loading-screen" v-if="loading == true">
      <div class="loading-animation">
        <img src="/img/loading.png" alt="logo" class="logo" />
        <div class="loading-bar"></div>
      </div>
    </div>
    <div v-else>
      <div class="background-page" data-aos="zoom-in">
        <nav data-aos="zoom-in">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#"></a>
            </li>
            <li class="nav-item">
              <div class="typewriter">
                <h1>
                  <a href="" class="nav-logo">Rax_<span>dev</span></a>
                </h1>
              </div>
            </li>
            <li class="nav-item">
              <a href="./cv/cv.pdf" class="nav-text" target="_blank">Resume</a>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/TeLoardBruh"
                class="nav-icon"
                target="_blank"
                ><i class="fab fa-github"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/sovannmonyreak-hing-bab402193/"
                class="nav-icon"
                target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
            </li>
          </ul>
        </nav>

        <div class="welcome-text">
          <p class="header">Welcome to my page.</p>
          <p class="sub-header">
            I convert your company concepts into a
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>.
          </p>
        </div>
        <div class="explore-projects">
          <div>
            <a href="#projects" v-smooth-scroll class="more-projects">
              <i class="fas fa-chevron-down project-icon animate-bounce"></i>
              <p class="project-text">Projects</p>
            </a>
          </div>
        </div>
      </div>
      <!-- section navbar and welcome page -->

      <!-- begin the projects field  -->
      <div class="projects" id="projects">
        <div class="project-item" v-for="item in projects" :key="item.id">
          <div class="project-card image">
            <figure>
              <img
                :src="item.linkImg"
                alt=""
                class="blur-shadow"
                data-aos="fade-right"
              />
              <img
                :src="item.linkImg"
                alt=""
                class="project-image"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
              />
            </figure>
          </div>
          <div
            class="project-text-dis"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h2 class="project-text-title">{{ item.name }} :</h2>
            <p>
              {{ item.dis }}
            </p>
            <h2 class="project-text-title">Tools used :</h2>
            <li
              v-for="tool in item.tools"
              :key="tool"
              style="justify-content: center; display: flex"
            >
              {{ tool.tool }}
            </li>
            <ul>
              <div class="project-btns">
                <a
                  :href="item.linkWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="transform: none"
                  ><button class="fill">Open Site</button></a
                ><a
                  :href="item.linkGit"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="transform: none"
                  ><button class="fill">View Code</button></a
                >
              </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- contact page -->
      <div class="contact" id="contact-me">
        <div class="container">
          <div class="contact-content">
            <h2>Contact Me</h2>
            <p class="mail">
              Get in touch with me
              <i class="fas fa-arrow-right"></i> monyrax4@gmail.com
            </p>
            <p class="links">Or find me on:</p>
            <a href="./cv/cv.pdf" target="blank"
              ><i class="fab fa-dev"></i> Resume</a
            >

            <a href="https://github.com/TeLoardBruh" target="blank"
              ><i class="fab fa-github"></i> Github</a
            ><a
              href="https://www.linkedin.com/in/sovannmonyreak-hing-bab402193/"
              target="blank"
              ><i class="fab fa-linkedin"> </i> Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavBar from "./components/NavBar";
export default {
  // components: { NavBar },
  setup() {
    // let loading = true;
    // return { loading };
  },
  data() {
    return {
      loading: true,
      typeValue: "",
      typeStatus: false,
      typeArray: ["website", "app", "chatbot"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      projects: [
        {
          id: "1",
          name: "E-menu",
          dis: "E-menu or electronic menu is the modern replacement to the traditional paper menu. With this improvement to digital, guests can swiftly browse all of their favorite meals and order without human interaction.",
          tools: [
            { tool: "Vue Js" },
            { tool: "Aos animation" },
            { tool: "CSS" },
          ],
          linkImg:
            "https://d33wubrfki0l68.cloudfront.net/6155577241ca65b0a15e5729/screenshot_2021-09-30-06-22-54-0000.png",
          linkWeb: "https://rax-emenu.netlify.app/",
          linkGit: "https://github.com/TeLoardBruh/e-menu",
        },
        {
          id: "2",
          name: "Rax-Gallery",
          dis: "Rax-gallery is an idea for an internet gallery that displays my digital pictures. And it is one of the most effective methods for others to showcase their portfolio to the world at a low cost.",
          tools: [{ tool: "Vue Js" }, { tool: "CSS Grid-System" }],
          linkImg: "./img/rax-gallery.png",
          
          linkWeb: "https://rax-gallery.netlify.app/",
          linkGit: "https://github.com/TeLoardBruh/vue-rax-gallery",
        },
      ],
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 5000);
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      console.log(this.loading);
    }, 5000);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  /* background: black; */
}
body {
  font-family: "Poppins", sans-serif;
  background-color: black;
  background-image: url("/img/welcome.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  scroll-behavior: smooth;

  /* background-position: center center; */
}

/* loading */
.loading-screen {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.loading-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.logo {
  width: 200px;
}

.loading-bar {
  width: 250px;
  height: 6px;
  background: #e8e9f3;
  margin-top: 22px;
  position: relative;
  overflow: hidden;
}

.loading-bar::before {
  content: "";
  width: 125px;
  height: 15px;
  background: #d85551;
  position: absolute;
  left: -50px;
  animation: pinkbar 1.5s infinite ease;
}

@keyframes pinkbar {
  50% {
    left: 196px;
  }
}

/* ===== */
.background-page {
  height: 100vh;
}
.nav-list {
  /* background: white; */
  box-shadow: 0px 0px 4px;
  padding: 15px 0px;
  border-radius: 2px;
  display: flex;
  align-items: center;
}

.nav-item {
  list-style: none;
  margin-right: 1%;
}

.nav-item a {
  text-decoration: none;
  color: white;
  transition: 100ms ease-in;
}

.nav-item a:hover {
  color: #d85551;
}

.nav-item {
  margin-right: auto;
  margin-left: 2rem;
}

.nav-item .nav-logo {
  font-weight: bold;
  font-size: 50px;
}
.nav-item .nav-logo span {
  font-weight: bold;
  font-size: 50px;
}
/* DEMO-SPECIFIC STYLES 
.typewriter h1 {
  color: #fff;
  font-family: monospace;
  overflow: hidden; 
  border-right: 0.15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: 0.15em; 
  animation: typing 3.5s steps(30, end), blink-caret 1s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
*/
.nav-item .nav-text {
  /* font-weight: bold; */
  font-size: 20px;
}
.nav-item .nav-icon {
  /* font-weight: bold; */
  font-size: 30px;
}

/* welcome text */

.welcome-text {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #07374a;
  width: 100%;
  text-align: center;
}

.welcome-text .header {
  color: white;
  font-weight: bold;
  font-size: 65px;
}
.welcome-text .sub-header {
  color: white;
  font-size: 25px;
}

.explore-projects {
  color: white;
  margin: 0 auto;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-25%, -50%);
  /* z-index: 2; */
}
.project-icon {
  font-size: 45px;
}
.project-text {
  font-size: 30px;
}
.more-projects {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.projects {
  max-width: 1200px;
  width: 90%;
  margin: auto;
  margin-top: 40%;
}
.image {
  /* max-width: 820px; */
  width: 100%;
  position: relative;
}
.image figure {
  padding-bottom: 62.5%;
  margin: 0;
}
.image figure img {
  /* position: absolute; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70%;
  border-radius: 3px;
  object-fit: cover;
}
.blur-shadow {
  filter: blur(24px);
}

.project-item {
  display: flex;
  align-items: center;
  height: 100vh;
}
.project-card .project-image {
  width: 70%;
  border-radius: 10%;
}
.project-card .image {
  width: 70%;
  border-radius: 10%;
}

.project-text-dis {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 30%;
  color: white;
}
.project-text-title {
  font-weight: bold;
}

.project-btns {
  display: flex;
}

.fill {
  font-size: 18px;
  width: 90%;
  font-weight: bold;
  padding: 10px;
  color: #d85551;
  letter-spacing: 1px;
  outline: 0;
  border: 1px solid rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 35px;
}

.fill:hover {
  background-color: #000000;
}

.fill:hover::after {
  top: 0px;
  left: 0px;
}

/* contact  */

/* ////......Contact......///// */

.contact {
  position: relative;
  height: 92vh;
}

.contact-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: white;
  font-weight: bold;
  padding-bottom: 0.5rem;
}

.contact-content .mail {
  color: #f0f0e6;
  padding-bottom: 0.2rem;
  font-size: 1rem;
}

.contact-content .links {
  color: white;
  padding: 0.5rem;
  padding-bottom: 1.8rem;
  font-size: 1rem;
}

.contact-content a {
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.3s ease-in-out;
}

.contact-content a:hover {
  color: #f0f0e6;
}

@media only screen and (max-width: 600px) {
  body {
    background-size: contain;
    background-position: center center;
  }
  .nav-item {
    margin-right: auto;
    margin-left: 0;
  }

  .welcome-text .header {
    color: white;
    font-weight: bold;
    font-size: 50px;
    margin: 10px;
  }
  .welcome-text .sub-header {
    color: white;
    font-size: 20px;
    margin: 20px 50px 0 50px;
  }

  .explore-projects {
    color: white;
    margin: 0 auto;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* z-index: 2; */
  }

  .project-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 40%;
    margin-bottom: 30%;
  }
  .project-card .project-image {
    width: 100%;
    border-radius: 10%;
    margin-bottom: 20px;
  }
  .project-text-dis {
    width: 100%;
    color: white;
  }
  .project-btns {
    margin: 0;
    padding: 0;
  }

  .image figure img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
  }
  .project-text-dis {
    margin-top: 35px;
  }
  .project-text-title {
    width: 100%;
    font-weight: bold;
  }
  .fill {
    font-size: 15px;
    letter-spacing: 0px;
    width: 90%;
    margin: 25px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up)
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {...} */
</style>
