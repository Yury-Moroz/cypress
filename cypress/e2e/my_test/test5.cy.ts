import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";

describe("Displaying internal elements of a photo", () => {
    it("Checking the like element and the download element", () => {
        cy.pageOpen();
        cy.get(unsplashSelectors.search).type(Expectations.carEnter);
        cy.get(unsplashSelectors.searchCar).click();
        cy.get(unsplashSelectors.searchCarDownload).should("be.visible");
        cy.get(unsplashSelectors.searchCarLike).should("be.visible");
    });
})