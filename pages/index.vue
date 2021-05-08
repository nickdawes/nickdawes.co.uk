<template>
  <div>
      <nav class="fixed top-0 left-0 right-0 mx-auto flex justify-center items-center h-16 bg-red-200">
        <a class="mx-4" href="#about">About Me</a>
        <a class="mx-4" href="#services">Services</a>
        <a class="mx-4" href="#portfolio">Portfolio</a>
        <a class="mx-4" href="#contact">Contact Me</a>
        <a class="mx-4" href="#testimonials">Testimonials</a>
      </nav>

    <header class="min-h-screen flex flex-col justify-center items-center text-white" style="background-image: linear-gradient(to top, rgb(83, 120, 149) 0%, rgb(9, 32, 63) 40%, rgb(0, 0, 0) 100%);">
      <h1>I offer affordable, professional web development services to businesses and individuals in Cheshire.</h1>
      <h2>07743444062</h2>
      <h2>mail@nickdawes.co.uk</h2>
    </header>

    <section class="max-w-screen-lg mx-auto min-h-screen pt-16" id="about">
      <span class="text-center">
        <h1 class="mx-auto">About Nick Dawes</h1>
      </span>
      <div class="flex flex-col md:flex-row">
        <img class="self-center rounded-full" height="240" width="240" alt="Image showing a profile picture of the website author, Nick Dawes" src="/images/me.jpg"/>
        <div class="ml-0 md:ml-20">
          <h2>Nick Dawes - Web designer, Cheshire.</h2>
          <p>Over the last decade I've worked in New Zealand, Australia and Iceland as a guide, rope access technician and in Tourism Operations Management. Today, I help businesses and individuals grow online.</p>
          <p>While nearly all tour operators today rely on it to manage their operations— few have realised the full potential and benefits of the web.</p>
          <p>Realising the need for a company who could address these specific problems, I've brought together the skills I've acquired and started a web development business for tour operators. With a passion for web development and years of operational management experience in the tourism industry, I'm uniquely positioned to solve problems for tour operators.</p>
          <p>No matter which tools you're currently using or what your goals may be, I can work with you. From simple modifications to your existing WordPress site, through to creating an entirely new business solution; I can create the tools you need to achieve your goals.</p>
        </div>
      </div>
      <div class="flex justify-between">
        <article>
          Card 1
        </article>
        <article>
          Card 2
        </article>
        <article>
          Card 3
        </article>
      </div>
    </section>

    <section class="max-w-screen-lg mx-auto min-h-screen pt-16" id="services">
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
    </section>

    <section class="max-w-screen-lg mx-auto min-h-screen pt-16" id="portfolio">
      <span class="text-center">
        <h1>Web design portfolio.</h1>
      </span>
      <div class="flex justify-between">
        <article>
          Website 1
        </article>
        <article>
          Website 2
        </article>
        <article>
          Website 3
        </article>
        <article>
          Website 4
        </article>
      </div>
    </section>

    <section class="max-w-screen-lg mx-auto min-h-screen pt-16" id="contact">
      <span class="text-center">
        <h1>Contact me</h1>
      </span>
      <form>
        <input type="email">
      </form>
    </section>

    <section class="max-w-screen-lg mx-auto min-h-screen pt-16" id="testimonials">
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
      thisYear: new Date().getFullYear()
    }
  },
  head() {
    return {
      title: 'Nick Dawes – Web Design Cheshire – Websites from £200',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>

</style>
