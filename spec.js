//spec.js

describe('Functional Test of Web App REG TU', function () {
    browser.driver.get('https://reg.tu.ac.th/');
    it('Check title', function () {
        //browser.get('https://reg.tu.ac.th/');
        browser.ignoreSynchronization = true;
        expect(browser.getTitle()).toEqual('Office of the Registrar, Thammasat University');
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    it('Test Login page in Reg TU', function () {
        browser.ignoreSynchronization = true;
        //var close = element(by.css('[aria-label="Close"]'));
        //close.click();
        var user = element(by.id('f_uid'));
        var pass = element(by.id('f_pwd'));
        user.sendKeys('xxxxxxxxxx');
        pass.sendKeys('xxxxxxxxxxxxx');
        expect(user.getAttribute('value')).toEqual('xxxxxxxxxx'); //StudentID
        expect(pass.getAttribute('value')).toEqual('xxxxxxxxxxxxx'); //CitizenID
        var submit = element(by.id('slider-submit'));
        submit.click();
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    it('Test bioentryconfig in reg tu', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Change Biobliography"]')).click();

        var male = element(by.id('f_entryid17_M'));
        male.click();
        browser.sleep(2000);
        var other = element(by.id('f_entryid17_O'));
        other.click();
        browser.sleep(2000);
        var female = element(by.id('f_entryid17_F'));
        female.click();
        browser.sleep(2000);

        var unwarranted = element(by.css("label[for='f_entryid31_2']"));
        unwarranted.click();
        browser.sleep(2000);
        var guarantee = element(by.css("label[for='f_entryid31_1']"));
        guarantee.click();
        browser.sleep(2000);

        var notAgree = element(by.css("label[for='f_entryid33_2']"));
        notAgree.click();
        browser.sleep(2000);
        var agree = element(by.css("label[for='f_entryid33_1']"));
        agree.click();
        browser.sleep(2000);

        mail = element(by.css('[name="f_entryid126"]'));
        mail.clear();
        browser.sleep(2000);
        mail.sendKeys('tu@hotmail.com');
        expect(mail.getAttribute('value')).toEqual('tu@hotmail.com');

        phone = element(by.css('[name="f_entryid127"]'));
        browser.sleep(2000);
        phone.clear();
        phone.sendKeys('0768967954');
        expect(phone.getAttribute('value')).toEqual('0768967954');

        Address = element(by.css('[name="f_entryidTAREA"]'));
        browser.sleep(2000);
        Address.clear();
        Address.sendKeys('address');
        expect(Address.getAttribute('value')).toEqual('address');

        element(by.css('[type="SUBMIT"]')).click();
        browser.sleep(2000);
        element(by.xpath('//*[@id="menu"]/ul/li[4]/a')).click();
        browser.sleep(3000);
        //Check Biobliography
        //element(by.css('[title="Change Biobliography"]')).click();
        //browser.sleep(6000);
        //element(by.xpath('//*[@id="menu"]/ul/li[4]/a')).click();
        //browser.sleep(2000);
        browser.ignoreSynchronization = false;
    });
    
    
    it('Test enter to page Calendar', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Calendar"]')).click();
        browser.sleep(3000);
        element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/a[5]')).click();
        browser.sleep(3000);
        one = element(by.partialLinkText('1'));
        one.click();
        browser.sleep(3000);
        two = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/a[1]')).click();
        browser.sleep(3000);
        three = element(by.partialLinkText('3/Summer'));
        three.click();
        browser.sleep(3000);

        element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/font/a')).click();

        four = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/a[3]'));
        four.click();
        browser.sleep(3000);
        five = element(by.partialLinkText('5/Summer 2'));
        five.click();
        browser.sleep(3000);

        element(by.css('[title="Go Back"]')).click();
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    it('Flow of Test Quota Result of reg.tu', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="QUOTA Result"]')).click();
        browser.sleep(3000);
        // select previous year
        element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/a[3]/img')).click();
        browser.sleep(3000);
        // select next year
        element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[2]/td[2]/font/font/a/img')).click();
        browser.sleep(3000);
        // select 3/summer
        element(by.partialLinkText('3/Summer')).click();
        browser.sleep(3000);
        element(by.xpath('//*[@id="menu"]/ul/li/a')).click();
        browser.sleep(3000);
    });
    
    it('Flow of Test Search Courses of reg.tu', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Class Information"]')).click();
        // select faculty
        element.all(by.tagName('option')).get(10).click();
        browser.sleep(3000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        // select campus
        //element(by.cssContainingText('option', 'ศูนย์รังสิต')).click();
        element(by.tagName('option')).element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[6]/td[2]/table/tbody/tr[2]/td[2]/select/option[3]')).click();
        browser.sleep(3000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        // select level
        //element(by.cssContainingText('option', 'ปริญญาตรี โครงการพิเศษ')).click();
        element(by.tagName('option')).element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table/tbody/tr[6]/td[2]/table/tbody/tr[3]/td[2]/select/option[3]')).click()
        browser.sleep(3000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        // fill course code
        element(by.css('[name="coursecode"]')).sendKeys('MA211');
        browser.sleep(2000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        // fill course name
        element(by.css('[name="coursename"]')).sendKeys('CALCULUS 1');
        browser.sleep(2000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(2000);
        element(by.css('[title="GO BACK"]')).click();
        browser.sleep(2000);
    });
    
    /*
    it('Flow of Test Search Courses of reg.tu', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Class Information"]')).click();
        browser.sleep(2000);
        element.all(by.tagName('option')).get(10).click(); //Faculty Science and Technology
        browser.sleep(2000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(2000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(2000);
        element(by.css('[name="coursecode"]')).sendKeys('MA211');
        browser.sleep(2000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(2000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(2000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(2000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(2000);
        element(by.id('menu')).click();
        browser.sleep(2000);
        browser.ignoreSynchronization = false;
    });
    */
    
    it('Test enter to page Enroll Result', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Enroll Result"]')).click();
        browser.sleep(3000);
        element(by.xpath('//*[@id="menu"]/ul/li[1]/a')).click();
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    it('Test enter to page Time Table', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Time Table"]')).click();
        browser.sleep(3000);

        left = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[8]/td[2]/font/a[3]'));
        left.click(); //click back to previous year
        browser.sleep(3000);
        element(by.partialLinkText('1')).click(); //term1 of click back to previous year
        browser.sleep(3000);

        right = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[8]/td[2]/font/font/a'));
        right.click(); //click next to next year
        browser.sleep(3000);
        element(by.partialLinkText('2')).click(); //term2 of next year
        browser.sleep(3000);
        right.click();
        browser.sleep(3000);
        left1 = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[2]/tbody/tr[8]/td[2]/font/a[2]'));
        left1.click();
        browser.sleep(3000);
        //subject = element(by.css('[title="DATA VISUALIZATION"]')); //CS246
        subject = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/table[3]/tbody/tr[4]/td[3]/font/b/a')); //CS246
        subject.click();
        browser.sleep(3000);
        element(by.css('[title="Back"]')).click();
        browser.sleep(3000);
        element(by.id('menu')).click();
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    /*
    it('Test enter to page Calendar', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Calendar"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(2000);
        browser.ignoreSynchronization = false;
    });
    */
    
    it('Test enter to page Grade Report', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Grade Report"]')).click();
        browser.sleep(3000);
        calgrade = element(by.xpath('/html/body/table/tbody/tr[1]/td[2]/div/div/table[1]/tbody/tr[2]/td[3]/a')); //calculate grade
        calgrade.click();
        browser.sleep(2000);
        element.all(by.tagName('option')).get(4).click(); //Grade B
        browser.sleep(3000);
        element(by.css('[type="submit"]')).click();
        browser.sleep(3000);
        element(by.css('[title="Go Back"]')).click();
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
    it('Logout page in Reg TU', function () {
        browser.ignoreSynchronization = true;
        element(by.css('[title="Logout"]')).click(); 
        browser.sleep(3000);
        //close = element(by.id('myPopup')).element(by.tagName('button'));
        //close.click();
        expect(browser.getTitle()).toEqual('Office of the Registrar, Thammasat University');
        browser.sleep(3000);
        browser.ignoreSynchronization = false;
    });
    
});


    

