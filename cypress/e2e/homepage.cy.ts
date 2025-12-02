describe("HomePage E2E Tests", () => {
  const mockCustomers = {
    data: {
      listZellerCustomers: {
        items: [
          { id: "1", "name": "Test Admin", "email": "admin@test.com", "role": "ADMIN" },
          { id: "2", "name": "Test Manager", "email": "manager@test.com", "role": "MANAGER" },
        ],
      },
    },
  };

  beforeEach(() => {
    cy.intercept("POST", "**/graphql", (req) => {
      if (req.body.operationName === "ListZellerCustomers") {
        req.reply(mockCustomers);
      } else {
        req.reply(mockCustomers);
      }
    }).as("graphqlQuery");

    cy.visit("/");
  });

  describe("Initial Page Load", () => {
    it("should load the homepage successfully", () => {
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });

    it("should display the header with correct title", () => {
      cy.get("h1").should("contain.text", "HomePage");
    });

    it("should display the RadioGroup with Customer Types label", () => {
      cy.contains("Customer Types").should("be.visible");
    });

    it("should have Admin selected by default", () => {
      cy.get("input[type='radio']").first().should("be.checked");
    });
  });

  describe("Customer List Display", () => {
    it("should display customer list after loading", () => {
      cy.wait("@graphqlQuery");
      cy.get("[data-testid='customer-list-section']", { timeout: 10000 }).should("be.visible");
    });

    it("should display Admin Customers heading initially", () => {
      cy.contains("h2", "Admin Customers", { timeout: 10000 }).should("be.visible");
    });

    it("should display customer cards with names and roles", () => {
      cy.get("[role='article']", { timeout: 10000 }).should("have.length.at.least", 1);

      cy.get("[role='article']").first().within(() => {
        cy.contains(/Admin|Manager/).should("be.visible");
      });
    });
  });

  describe("Role Filtering", () => {
    it("should filter to Manager Customers when Manager is selected", () => {
      cy.contains("h2", "Admin Customers", { timeout: 10000 }).should("be.visible");

      cy.contains("label", "Manager").click();

      cy.contains("h2", "Manager Customers").should("be.visible");
      cy.contains("h2", "Admin Customers").should("not.exist");
    });

    it("should update customer list when switching roles", () => {
      cy.get("[role='article']", { timeout: 10000 }).should("have.length.at.least", 1);

      cy.contains("label", "Manager").click();

      cy.contains("h2", "Manager Customers").should("be.visible");
    });
  });

  describe("Error Handling", () => {
    it("should handle network errors gracefully", () => {
      // Override the default intercept
      cy.intercept("POST", "**/graphql", {
        statusCode: 500,
        body: {
          errors: [{ message: "Internal Server Error" }],
        },
      }).as("graphqlError");

      cy.reload();
      cy.wait("@graphqlError");

      cy.contains("Error fetching customers", { timeout: 10000 }).should("be.visible");
    });

    it("should show retry button on error", () => {
      cy.intercept("POST", "**/graphql", {
        statusCode: 500,
        body: {
          errors: [{ message: "Network error" }],
        },
      }).as("graphqlError");

      cy.reload();
      cy.wait("@graphqlError");

      cy.contains("button", "Try Again", { timeout: 10000 }).should("be.visible");
    });
  });

  describe("Loading State", () => {
    it("should show loading shimmer on initial load", () => {
      // Override with delay
      cy.intercept("POST", "**/graphql", (req) => {
        req.reply((res) => {
          res.delay = 1000;
          res.send(mockCustomers);
        });
      }).as("graphqlRequest");

      cy.reload();

      cy.get(".animate-pulse").should("be.visible");
    });
  });
});