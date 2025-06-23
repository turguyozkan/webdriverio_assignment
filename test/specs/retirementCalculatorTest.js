import RetirementCalculatorPage from '../../pages/retirementCalculator.page.js';
import { expect } from '@wdio/globals';
import allure from '@wdio/allure-reporter';


describe("Retirement Calculator Test",async()=>{

    beforeEach(() => {
        allure.addFeature('Retirement');
        allure.addSeverity('Normal');
    });
    it("Calculate Retirement Savings with social Security Benefits", async () => {
        allure.addTestId('TC-1');
        try{
            await RetirementCalculatorPage.open(); 
            await RetirementCalculatorPage.closeCookieBannerIfPresent();
            await RetirementCalculatorPage.fillBasicInfoWssBenefits();
            await RetirementCalculatorPage.adjustDefaults();
            await RetirementCalculatorPage.calculateResults();
            expect(await RetirementCalculatorPage.resultText.getText()).toBe("Results");
        }catch(error){
            allure.addAttachment("Failure", error.message, "text/plain");
            throw error;
        }
        

    });

    it("Calculate Retirement Savings without social Security Benefits", async () => {
        allure.addTestId('TC-2');
        try{
            await RetirementCalculatorPage.open(); 
            await RetirementCalculatorPage.closeCookieBannerIfPresent();
            await RetirementCalculatorPage.fillBasicInfoWssBenefits();
            await RetirementCalculatorPage.adjustDefaults();
            await RetirementCalculatorPage.calculateResults();
            expect(await RetirementCalculatorPage.getResultText()).toBe("Results");
        }catch(error){
            allure.addAttachment("Failure", error.message, "text/plain");
            throw error;
        }
    });

    it("Calculate Retirement Savings without a required field", async () => {
        allure.addTestId('TC-3');
        try{
            await RetirementCalculatorPage.open(); 
            await RetirementCalculatorPage.closeCookieBannerIfPresent();
            await RetirementCalculatorPage.fillBasicInfoWoRequiredFields();
            await RetirementCalculatorPage.calculateResults();
            expect(await RetirementCalculatorPage.getAlertFieldDisplayed({ timeout: 10000 })).toBe(true);
        }catch(error){
            allure.addAttachment("Failure", error.message, "text/plain");
            throw error;
        }
    });



})