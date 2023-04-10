import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../../support/pageObject/LoginPage";
import { productPage } from "../../../support/pageObject/ProductsPage";

Given ( "Mateo es un cliente previamente registrado en Swag Labs", () => {
    cy.visit("/");
});

When ( "ingresa su username y su password de manera correcta", (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.username);
        loginPage.typePassword(row.password);
      });
});

When ("pulsa el boton Login", () => {
    loginPage.clickLogin()
})

Then ( "debe poder ingresar a su cuenta", () => {
    productPage.sectionTitle()
});