import { $, browser } from '@wdio/globals'
import Page from '../pages/page.js';
import testData from '../test/data/testData.json' assert { type: "json" };

class RetirementCalculatorPage extends Page {


    get currentAge () {
        return $("#current-age");
    }

    get retirementAge () {
        return $("#retirement-age");
    }

     get currentIncome () {
        return $("//input[@id='current-income']");
    }

    get spouseIncome () {
        return $("#spouse-income");
    }

    get currentTotalSavings () {
        return $("#current-total-savings");
    }

      get currentAnnualSavings () {
        return $("#current-annual-savings");
    }

     get savingsIncreaseRate () {
        return $("#savings-increase-rate");
    }

    get socialBenefitsYes () {
        return $("label[for='yes-social-benefits']");
    }

    get maritalStatusMarried () {
        return $("label[for='married']");
    }
 
    get ssOverride () {
        return $("#social-security-override");
    }

    get adjustDefaultValue () {
        return $("//a[normalize-space()='Adjust default values']");
    }

    get additionalIncome () {
        return $("//input[@id='additional-income']");
    }

     get retirementDuration () {
        return $("//input[@id='retirement-duration']");
    }

    get includeInflation () {
        return $("label[for='include-inflation']");
    }

    get retirementAnnualIncomePercentage () {
        return $("//input[@id='retirement-annual-income']");
    }

     get preRetirementRoi () {
        return $("#pre-retirement-roi");
    }

     get postRetirementRoi () {
        return $("#post-retirement-roi");
    }

    get saveChangesButton () {
        return $("//button[normalize-space()='Save changes']");
    }

    get calculateButton () {
        return $("//button[normalize-space()='Calculate']");
    }

    get alertField () {
        return $("//p[@id='calculator-input-alert-desc']");
    }

    get resultText () {
        return $("//h3[normalize-space()='Results']");
    }

    get cookieCloseBtn() {
        return $("button.onetrust-close-btn-handler");
    }
    
    async closeCookieBannerIfPresent() {
        if (await this.cookieCloseBtn.isDisplayed()) {
            await this.cookieCloseBtn.click();   
        }
    }
    async openCalculator() {
        await this.open()
    }

    async getAlertFieldDisplayed(){
        return await this.alertField.isDisplayed();
    }

    async getResultText() {
        await this.resultText.waitForDisplayed({ timeout: 5000 });
        return await this.resultText.getText();
    }

    async waitForPageToLoad() {
        await browser.pause(5000);
    }

    async fillBasicInfoWssBenefits() {
        await this.currentAge.setValue(testData.currentAge);
        await this.retirementAge.setValue(testData.retirementAge);
        await this.currentIncome.click()
        await this.currentIncome.setValue(testData.currentIncome);
        await this.spouseIncome.scrollIntoView();
        await this.spouseIncome.setValue(testData.spouseIncome);
        await this.currentTotalSavings.click()
        await this.currentTotalSavings.setValue(testData.currentTotalSavings);
        await this.currentAnnualSavings.setValue(testData.currentAnnualSavings);
        await this.savingsIncreaseRate.scrollIntoView();
        await this.savingsIncreaseRate.setValue(testData.savingsIncreaseRate);
        await this.socialBenefitsYes.click();
        await this.maritalStatusMarried.click();
        await this.ssOverride.click();
        await this.ssOverride.setValue(testData.ssOverride);
    }

    async fillBasicInfoWOssBenefits() {
        await this.currentAge.setValue(testData.currentAge);
        await this.retirementAge.setValue(testData.retirementAge);
        await this.currentIncome.click()
        await this.currentIncome.setValue(testData.currentIncome);
        await this.spouseIncome.scrollIntoView();
        await this.spouseIncome.setValue(testData.spouseIncome);
        await this.currentTotalSavings.click()
        await this.currentTotalSavings.setValue(testData.currentTotalSavings);
        await this.currentAnnualSavings.setValue(testData.currentAnnualSavings);
        await this.savingsIncreaseRate.scrollIntoView();
        await this.savingsIncreaseRate.setValue(testData.savingsIncreaseRate);
    }

    async fillBasicInfoWoRequiredFields() {
        await this.currentAge.setValue(testData.currentAge);
        await this.retirementAge.setValue(testData.retirementAge);
        await this.spouseIncome.scrollIntoView();
        await this.spouseIncome.setValue(testData.spouseIncome);
        await this.currentTotalSavings.click()
        await this.currentTotalSavings.setValue(testData.currentTotalSavings);
        await this.currentAnnualSavings.setValue(testData.currentAnnualSavings);
        await this.savingsIncreaseRate.scrollIntoView();
        await this.savingsIncreaseRate.setValue(testData.savingsIncreaseRate);
    }

    async adjustDefaults() {
        await this.adjustDefaultValue.click();
        await this.additionalIncome.setValue(testData.additionalIncome);
        await this.retirementDuration.setValue(testData.retirementDuration);
        await this.includeInflation.scrollIntoView();
        await this.includeInflation.click();
        await browser.pause(5000);
        await this.retirementAnnualIncomePercentage.setValue(testData.retirementAnnualIncomePercentage);
        await this.preRetirementRoi.setValue(testData.preRetirementROI);
        await this.postRetirementRoi.setValue(testData.postRetirementROI);
        await this.saveChangesButton.click();
    }

    async calculateResults() {
        await this.calculateButton.scrollIntoView();
        await this.calculateButton.waitForDisplayed({ timeout: 10000 });
        await this.calculateButton.click();
        await this.waitForPageToLoad();
    }
}

export default new RetirementCalculatorPage();
