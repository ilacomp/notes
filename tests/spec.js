describe('Protractor Notes Test', function() {
    beforeEach(function() {
        browser.get('http://localhost:9000/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Notes Test');
    });

    it('should add note', function() {
        element(by.css('.btn')).click();
        element(by.model('add.title')).sendKeys('Test Note');
        element(by.css('.btn-primary')).click();
        expect(element(by.css('.form-signin-heading')).getText()).toEqual('Notes List');
    });
});