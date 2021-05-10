<template>
  <div>
    <nav class="fixed z-50 bottom-0 sm:top-0 left-0 right-0 mx-auto flex justify-center items-center h-16 bg-red-200 text-xs sm:text-base">
      <a class="mx-2 sm:mx-4" href="#about">About Me</a>
      <a class="mx-2 sm:mx-4" href="#services">Services</a>
      <a class="mx-2 sm:mx-4" href="#portfolio">Portfolio</a>
      <a class="mx-2 sm:mx-4" href="#contact">Contact Me</a>
      <a class="mx-2 sm:mx-4" href="#testimonials">Testimonials</a>
    </nav>

    <header class="overflow-hidden relative min-h-screen flex justify-center items-center px-2" style="background-image: linear-gradient(to top, rgb(45, 101, 187) 0%, rgb(9, 32, 63) 40%, rgb(0, 0, 0) 100%);">
      <canvas id="stars" width="3000" height="1500" class="absolute top-0 left-0 bottom-0 right-0"></canvas>
      <div class="z-10 text-white">
        <h1>I offer affordable, professional web development services to businesses and individuals in Cheshire.</h1>
        <h2>07743444062</h2>
        <h2>mail@nickdawes.co.uk</h2>
      </div>
    </header>

    <section class="min-h-screen pt-16 px-2" id="about" style="background-image: linear-gradient(to top, rgb(131, 208, 252), rgb(45, 101, 187));">
      <div class="max-w-screen-lg mx-auto">

        <div class="z-10 relative">
          <h1 class="blue-ribbon w-9/12 md:w-1/2 relative text-center bg-indigo-50 text-black" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
            <strong class="blue-ribbon-content text-indigo-900 uppercase">About Me</strong>
          </h1>
        </div>
        <div class="flex flex-col md:flex-row mb-16">
          <img class="self-center rounded-full" height="240" width="240" alt="Image showing a profile picture of the website author, Nick Dawes" src="/images/me.jpg"/>
          <div class="ml-0 md:ml-20 text-white">
            <h2>Nick Dawes - Web designer, Cheshire.</h2>
            <p>Over the last decade I've worked in New Zealand, Australia and Iceland as a guide, rope access technician and in Tourism Operations Management. Today, I help businesses and individuals grow online.</p>
            <p>While nearly all tour operators today rely on it to manage their operations— few have realised the full potential and benefits of the web.</p>
            <p>Realising the need for a company who could address these specific problems, I've brought together the skills I've acquired and started a web development business for tour operators. With a passion for web development and years of operational management experience in the tourism industry, I'm uniquely positioned to solve problems for tour operators.</p>
            <p>No matter which tools you're currently using or what your goals may be, I can work with you. From simple modifications to your existing WordPress site, through to creating an entirely new business solution; I can create the tools you need to achieve your goals.</p>
          </div>
        </div>

        <div class="z-10 relative">
          <h1 class="blue-ribbon w-9/12 md:w-1/2 relative text-center bg-indigo-50 text-black" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
            <strong class="blue-ribbon-content text-indigo-900 uppercase">Service & Packages</strong>
          </h1>
        </div>
        <div class="flex justify-between mt-10 text-white">
          <article class="w-1/4">
            <div class="relative p-5 mx-2 rounded-t-full bg-indigo-600">
              <div class="relative w-full bg-blue-200 rounded-full" style="padding-top: 100%;">
                <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img class="w-7/12 transform transition scale-100 hover:scale-125" src="/images/internet.svg">
                </div>
              </div>
              <h3 class="w-full text-center my-5">Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex fugiat nesciunt non officiis quam tenetur. Ducimus, vel voluptas. A alias minus optio qui, repellat sed veniam voluptatum. Dolores, eligendi?</p>
            </div>
          </article>
          <article class="w-1/4">
            <div class="relative p-5 mx-2 rounded-t-full bg-indigo-600">
              <div class="relative w-full bg-blue-200 rounded-full" style="padding-top: 100%;">
                <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img class="w-7/12 transform transition scale-100 hover:scale-125" src="/images/illustration.svg">
                </div>
              </div>
              <h3 class="w-full text-center my-5">Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex fugiat nesciunt non officiis quam tenetur. Ducimus, vel voluptas. A alias minus optio qui, repellat sed veniam voluptatum. Dolores, eligendi?</p>
            </div>
          </article>
          <article class="w-1/4">
            <div class="relative p-5 mx-2 rounded-t-full bg-indigo-600">
              <div class="relative w-full bg-blue-200 rounded-full" style="padding-top: 100%;">
                <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img class="w-7/12 transform transition scale-100 hover:scale-125" src="/images/shopping-cart.svg">
                </div>
              </div>
              <h3 class="w-full text-center my-5">Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex fugiat nesciunt non officiis quam tenetur. Ducimus, vel voluptas. A alias minus optio qui, repellat sed veniam voluptatum. Dolores, eligendi?</p>
            </div>
          </article>
          <article class="w-1/4">
            <div class="relative p-5 mx-2 rounded-t-full bg-indigo-600">
              <div class="relative w-full bg-blue-300 rounded-full" style="padding-top: 100%;">
                <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img class="w-7/12 transform transition scale-100 hover:scale-125" src="/images/loupe.svg">
                </div>
              </div>
              <h3 class="w-full text-center my-5">Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex fugiat nesciunt non officiis quam tenetur. Ducimus, vel voluptas. A alias minus optio qui, repellat sed veniam voluptatum. Dolores, eligendi?</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="min-h-screen pt-16 px-2 bg-bottom bg-no-repeat bg-cover sm:bg-contain" id="services" style="background-image: url('/images/test.svg'), linear-gradient(to top, rgb(131, 161, 114) 0%, rgb(225, 239, 239) 2%, rgb(131, 208, 252) 100%);">
      <div class="max-w-screen-lg mx-auto">
        <span class="text-center">
          <h1>Services and packages</h1>
        </span>
        <h2>Summary of packages offered.</h2>
        <div class="flex justify-between">
          <article>
            Service 1
          </article>
          <article>
            Service 2
          </article>
          <article>
            Service 3
          </article>
          <article>
            Service 4
          </article>
        </div>
      </div>
    </section>

    <section class="min-h-screen pt-16 px-2" id="portfolio" style="background-color: rgb(131, 161, 114);">
      <div class="max-w-screen-lg mx-auto">
        <div class="z-10 relative">
          <h1 class="green-ribbon w-9/12 md:w-1/2 relative text-center bg-green-50 text-black" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
            <strong class="green-ribbon-content text-green-900 uppercase">Portfolio</strong>
          </h1>
        </div>
        <div class="flex flex-wrap justify-center">
          <article class="w-1/3 p-2">
            <div class="bg-white p-1" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
              <img class="w-full" src="/images/screen_adventuresolutions.jpg">
            </div>
          </article>
          <article class="w-1/3 p-2">
            <div class="bg-white p-1" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
              <img class="w-full" src="/images/screen_wwp.jpg">
            </div>
          </article>
          <article class="w-1/3 p-2">
            <div class="bg-white p-1" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
              <img class="w-full" src="/images/screen_aa_recruitment.jpg">
            </div>
          </article>
          <article class="w-1/3 p-2">
            <div class="bg-white p-1" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
              <img class="w-full" src="/images/screen_blackgateparanormal.jpg">
            </div>
          </article>
          <article class="w-1/3 p-2">
            <div class="bg-white p-1" style="-webkit-box-shadow: 5px 5px 15px -4px #000000; box-shadow: 5px 5px 15px -4px #000000;">
              <img class="w-full" src="/images/screen_aa_portal.jpg">
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="min-h-screen pt-16 px-2 bg-top bg-repeat-x" id="contact" style="background-image: url('/images/ground.jpg'); background-color: #2e1a09;">
      <div class="max-w-screen-lh mx-auto">
        <span class="text-center">
          <h1>Contact me</h1>
        </span>
        <form>
          <input type="email">
        </form>
      </div>
    </section>

    <section class="min-h-screen pt-16 px-2 bg-bottom bg-repeat-x" id="testimonials" style="background-image: url('/images/dinosaurs.svg'); background-color: #2e1a09;">
      <div class="max-w-screen-lg mx-auto">
        <span class="text-center">
          <h1>Testimonials</h1>
        </span>
        <div class="flex justify-between">
          <article>
            Nick did an awesome job
          </article>
          <article>
            Nick did an awesome job
          </article>
          <article>
            Nick did an awesome job
          </article>
          <article>
            Nick did an awesome job
          </article>
        </div>
      </div>
    </section>

    <footer>
      <h1>Contact details</h1>
      <p>Nick Dawes – Web Design Cheshire &copy; {{ thisYear }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisYear: new Date().getFullYear(),
      starTwinkler: null
    }
  },
  mounted() {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const canvas = document.getElementById('stars')
    const context = canvas.getContext('2d')
    const stars = 800
    const colorRange = [0,60,240];
    let starsArray = []
    for (let i = 0; i < stars; i++) {
      let x = Math.random() * canvas.offsetWidth
      let y = Math.random() * canvas.offsetHeight
      let radius = Math.random() * 1.2
      let hue = colorRange[getRandom(0, colorRange.length - 1)]
      starsArray.push({ x, y, radius, hue })
    }
    this.starTwinkler = setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < starsArray.length; i++) {
        context.beginPath();
        context.arc(starsArray[i].x, starsArray[i].y, starsArray[i].radius * getRandom(1, 1.003), 0, 360);
        context.fillStyle = "hsl(" + starsArray[i].hue + ", " + getRandom(50, 90) + "%, " + getRandom(80, 100) + "%)";
        context.fill();
      }
    }, 700)
  },
  destroyed() {
    clearInterval(this.starTwinkler)
  }
}
</script>

<style>
.blue-ribbon, .green-ribbon {
  font-size: 16px !important;
  padding: 1em 2em;
  margin: 0 auto 3em;
}
.blue-ribbon:before, .blue-ribbon:after, .green-ribbon:before, .green-ribbon:after {
  content: "";
  position: absolute;
  display: block;
  bottom: -1em;
  z-index: -1;
}
.blue-ribbon:before, .blue-ribbon:after {
  border: 1.5em solid #DDD6FE;
}
.green-ribbon:before, .green-ribbon:after {
  border: 1.5em solid #D1FAE5;
}
.blue-ribbon:before, .green-ribbon:before {
  left: -2em;
  border-right-width: 1.5em;
  border-left-color: transparent;
}
.blue-ribbon:after, .green-ribbon:after {
  right: -2em;
  border-left-width: 1.5em;
  border-right-color: transparent;
}
.blue-ribbon .blue-ribbon-content:before, .blue-ribbon .blue-ribbon-content:after, .green-ribbon .green-ribbon-content:before, .green-ribbon .green-ribbon-content:after {
  content: "";
  position: absolute;
  display: block;
  border-style: solid;
  bottom: -1em;
}
.blue-ribbon .blue-ribbon-content:before, .blue-ribbon .blue-ribbon-content:after {
  border-color: #A78BFA transparent transparent transparent;
}
.green-ribbon .green-ribbon-content:before, .green-ribbon .green-ribbon-content:after {
  border-color: #A7F3D0 transparent transparent transparent;
}
.blue-ribbon .blue-ribbon-content:before, .green-ribbon .green-ribbon-content:before {
  left: 0;
  border-width: 1em 0 0 1em;
}
.blue-ribbon .blue-ribbon-content:after, .green-ribbon .green-ribbon-content:after {
  right: 0;
  border-width: 1em 1em 0 0;
}
</style>
