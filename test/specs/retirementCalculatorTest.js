import RetirementCalculatorPage from '../pageobjects/retirementCalculator.page.js';
import { expect } from '@wdio/globals';
import allure from '@wdio/allure-reporter';
import retirementCalculatorPage from '../pageobjects/retirementCalculator.page.js';

describe("Retirement Calculator Test",async()=>{

    beforeEach(() => {
        allure.addFeature('Retirement');
        allure.addSeverity('Normal');
    });
    it("Calculate Retirement Savings with social Security Benefits", async () => {
        allure.addTestId('TC-1');
        await RetirementCalculatorPage.open(); 
        await RetirementCalculatorPage.closeCookieBannerIfPresent();
        await RetirementCalculatorPage.fillBasicInfoWssBenefits();
        await RetirementCalculatorPage.adjustDefaults();
        await RetirementCalculatorPage.calculateResults();
        expect(await RetirementCalculatorPage.resultText.getText()).toBe("Results");

    });

    it("Calculate Retirement Savings without social Security Benefits", async () => {
        allure.addTestId('TC-2');
        await RetirementCalculatorPage.open(); 
        await RetirementCalculatorPage.closeCookieBannerIfPresent();
        await RetirementCalculatorPage.fillBasicInfoWssBenefits();
        await RetirementCalculatorPage.adjustDefaults();
        await RetirementCalculatorPage.calculateResults();
        expect(await RetirementCalculatorPage.getResultText()).toBe("Results");
    });

    it("Calculate Retirement Savings without a required field", async () => {
        allure.addTestId('TC-3');
        await RetirementCalculatorPage.open(); 
        await RetirementCalculatorPage.closeCookieBannerIfPresent();
        await RetirementCalculatorPage.fillBasicInfoWoRequiredFields();
        await RetirementCalculatorPage.calculateResults();
        expect(await retirementCalculatorPage.getAlertFieldDisplayed({ timeout: 10000 })).toBe(true);

    });



})