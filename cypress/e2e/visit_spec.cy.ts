describe("iSpeakItalian App Tests", () => {
  before(() => {
    cy.visit("https://ispeakitalian.herokuapp.com/");
  });

  it("Should load iSpeakItalian app", () => {
    // Check if elements exist and are visible upon app load
    cy.get("img").should("exist").and("be.visible");
    cy.contains("a", "Start Course Here").should("exist");
  });

  it("Should navigate to the course and make selections", () => {
    // Clicking through the course selection process
    cy.visit("https://ispeakitalian.herokuapp.com/");

    // Find the button with the text "Start Course Here"
    cy.contains("a", "Start Course Here").should("exist");

    cy.contains("a", "Start Course Here").click();

    cy.url().should("eq", "https://ispeakitalian.herokuapp.com/welcome/1");

    cy.contains("div", "To connect with friends / family").click();

    cy.contains("div", "CONTINUE").click();

    cy.contains("div", "Get conversational").click();

    cy.contains("div", "CONTINUE").click();
  });

  it("Should watch the video", () => {
    // Visit the page containing the video
    cy.visit("https://ispeakitalian.herokuapp.com/welcome/3");

    // Wait for the anchor element with the YouTube video link to exist
    cy.get('a[href="https://youtu.be/0eneZ8cxp8M"]', { timeout: 10000 }).should(
      "exist",
    );

    // Click on the anchor element leading to the YouTube video
    cy.get('a[href="https://youtu.be/0eneZ8cxp8M"]').click();

    cy.contains("div", "CONTINUE").click();
  });

  it("Should fill and submit the form", () => {
    // Visit the page containing the form
    cy.visit("https://ispeakitalian.herokuapp.com/welcome/4");

    // Fill in the form fields
    cy.get('input[name="name"]').type("Your Name");
    cy.get('input[name="email"]').type("test@test.com");
    cy.get('input[name="password"]').type("mypassword");
    cy.get('input[name="confirm_password"]').type("mypassword");

    // Submit the form
    cy.get("form").submit();
  });
});
