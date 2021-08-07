<template>
  <article>
    <section>
      <h1 data-cy="blog_post_title">How to create an ecommerce platform with Nuxt, Laravel and Statamic.</h1>
      <p>An in-depth course covering the creation of a modern eCommerce platform from start to finish, using TDD. Modern not because we use tailwind, modern because it covers performance and testing. Covers the front end and back end. Covers all the gotchas! That docs leave out. Offer insights into what an eCommerce platform should offer, what’s the purpose of it etc. Why do we approach things in the way we do, what do we need, what analytics should we take into consideration etc.</p>
    </section>

    <section>
      <h2>Who is it for?</h2>
    </section>

    <section>
      <h3>Introduction</h3>
    </section>

    <section>
      <h3>Setting up</h3>
      <p>
        Assume you can set up a fresh nuxt app, fresh Laravel app.
      </p>

      <h4>What to do first?</h4>
      <p>
        Clean slate protocol: delete whatever you need to delete from nuxt.
      </p>

      <h4>Installing Cypress with nuxt.</h4>
      <p>
        Run
      </p>

      <div class="py-2 md:py-4">
        <code>npm install --save-dev cypress @cypress/vue @cypress/webpack-dev-server html-webpack-plugin@4</code>
      </div>

      <p>
        Cypress will install.
      </p>
      <p>
        Gotcha! Keep an eye on the output:
      </p>

      <div class="py-2 md:py-4">
        <code>npm WARN @cypress/webpack-dev-server@1.4.0 requires a peer of webpack-dev-server@>=3.0.0 but none is installed. You must install peer dependencies yourself.</code>
      </div>

      <p>
        Simply install webpack-dev-server as a dev dependency
      </p>

      <div class="py-2 md:py-4">
        <code>npm i -–save-dev webpack-dev-server</code>
      </div>

      <p>
        Folders (and the cypress.json config file in the root) will be created when you run the cypress e2e runner for the first time:
      </p>

      <div class="py-2 md:py-4">
        <code>npx cypress open</code>
      </div>

      <p>
        Should now see cypress > fixtures, integration, plugins, support and also cypress.json in root
      </p>
      <p>
        We should tell the cypress dev server to use the same webpack config as our nuxt dev server
      </p>

      <div class="py-2 md:py-4">
        <code>
          // cypress/plugins/index.js<br>
          <br>
          const { startDevServer } = require('@cypress/webpack-dev-server')<br>
          const { getWebpackConfig } = require('nuxt')<br>
          <br>
          module.exports = (on, config) => {<br>
          &nbsp;&nbsp;on('dev-server:start', async (options) => {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;const webpackConfig = await getWebpackConfig()<br>
          &nbsp;&nbsp;&nbsp;&nbsp;return startDevServer({<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;webpackConfig,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;})<br>
          &nbsp;&nbsp;})<br>
          }
        </code>
      </div>

      <p>
        We need to tell cypress where to look for our test files and components folder.
      </p>

      <div class="py-2 md:py-4">
        <code>
          {<br>
          &nbsp;&nbsp;"testFiles": "**/*.spec.js",<br>
          &nbsp;&nbsp;"componentFolder": "components"<br>
          }
        </code>
      </div>

      <p>
        Explain that glob pattern. Mention that pages are for e2e testing, individual components are for unit testing.
        Good to go on the cypress side! Can delete the example tests, create a new one.
        What is filename.spec.js about? Explain spec convention.
      </p>

      <h4>A test to test the tester:</h4>

      <p>
        Should have pages/index.vue, let’s add a simple method to test we’ve got things set up properly
      </p>


      <div class="py-2 md:py-4">
        <code>
          &#60;template&#62;<br>
            &nbsp;&nbsp;&#60;div&#62;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello!&#60;/h1&#62;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;button @click="textVisible = true"&#62;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click to show.<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;/button&#62;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;p v-if="textVisible">It works!&#60;/p&#62;<br>
            &nbsp;&nbsp;&#60;/div&#62;<br>
          &#60;/template&#62;<br>
          <br>
          &#60;script&#62;<br>
          export default {<br>
          &nbsp;&nbsp;data() {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;return {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textVisible: false,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;}<br>
          &nbsp;&nbsp;}<br>
          }<br>
          &#60;/script&#62;
        </code>
      </div>

      <p>
        And a new test file
      <p>

      <div class="py-2 md:py-4">
        <code>
          describe("Our first test.", () => {<br>
          <br>
          &nbsp;&nbsp;it("Should render the page.", () =>{<br>
          &nbsp;&nbsp;&nbsp;&nbsp;cy.visit("http://localhost:3000")<br>
          &nbsp;&nbsp;})<br>
          <br>
          })
        </code>
      </div>

      <p>
        Now run cypress npx cypress open
      </p>

      <p>
        Use the selector playground for this next bit.
      </p>

      <p>
        Use the selector to update our test
      </p>

      <div class="py-2 md:py-4">
        <code>
          describe("Our first test.", () => {<br>
          <br>
          &nbsp;&nbsp;it("Should render the page.", () =>{<br>
          &nbsp;&nbsp;&nbsp;&nbsp;cy.visit("http://localhost:3000")<br>
          &nbsp;&nbsp;&nbsp;&nbsp;cy.get("button").click()<br>
          &nbsp;&nbsp;&nbsp;&nbsp;cy.contains("It works!")<br>
          &nbsp;&nbsp;})<br>
          <br>
          })
        </code>
      </div>

      <p>
        Run the test again
      </p>

      <p>
        Remove the test stuff unless you want to keep it.
      </p>

      <p>
        When you create more tests, you might find it easier to keep them in the same folder as the page they’re testing. To tell cypress to check outside of the integrations folder, change the config. Folder name is relative to the root of the app:
      </p>

      <div class="py-2 md:py-4">
        <code>
          {<br>
          &nbsp;&nbsp;"integrationFolder": "pages",<br>
          &nbsp;&nbsp;"testFiles": "**/*.spec.js",<br>
          &nbsp;&nbsp;"componentFolder": "components"<br>
          }
        </code>
      </div>
    </section>

  </article>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  @apply text-3xl my-5 md:text-6xl md:my-10
}
h2 {
  @apply text-2xl my-4 md:text-4xl md:my-8
}
h3 {
  @apply text-xl my-3 md:text-2xl md:my-6
}
h4 {
  @apply text-lg my-2 md:text-xl md:my-4
}
p {
  @apply mb-1 md:mb-2 text-xs md:text-base
}

code {
  @apply p-1 mb-1 md:p-2 md:mb-2 text-xs md:text-base block text-gray-50 bg-gray-900
}
</style>
