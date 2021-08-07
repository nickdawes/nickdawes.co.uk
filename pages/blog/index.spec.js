describe("Blog page tests.", () => {
  it("Should render the blog page.", () => {
    cy.visit("http://localhost:3032/blog")
  })

  it("Should contain a link to our eCommerce article series.", () => {
    cy.visit("http://localhost:3032/blog")
    cy.get("[data-cy='blog_link']")
  })

  it("Should take us to the article page once the link is clicked", () => {
    cy.visit("http://localhost:3032/blog")
    cy.get("[data-cy='blog_link']").click()
    cy.get("[data-cy='blog_post_title']")
  })
})
