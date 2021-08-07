describe("Homepage tests.", () => {
  it("Should render the homepage.", () => {
    cy.visit("http://localhost:3032")
  })

  it("Should contain a link that takes you to the blog section.", () => {
    cy.visit("http://localhost:3032")
    cy.get("[data-cy='nav_blog']").click()
    cy.get("[data-cy='blog_h1']").contains("Blog")
  })
})
