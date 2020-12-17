Feature('testContactForm');

Scenario('test login valid', ( {I} ) => {
    I.amOnPage('/');
    I.fillField('input[type=text]', 'admin');
    I.fillField('#inputPassword', 'testtest');
    I.wait(1);
    I.click('button[type=submit]');
    I.see('Welcome to Grafana');
});

Scenario('test login invalid', ( {I} ) => {
    I.amOnPage('/');
    I.fillField('input[type=text]', 'admin');
    I.fillField('#inputPassword', 'error');
    I.wait(1);
    I.click('button[type=submit]');
    I.see('Invalid username or password');
});

Scenario('test change password', ( {I} ) => {
    I.amOnPage('/');
    I.fillField('input[type=text]', 'admin');
    I.fillField('#inputPassword', 'testtest');
    I.wait(1);
    I.click('button[type=submit]');
    I.click('div a[href] img');
    I.click('//*[@id="page-header-select-nav"]');
    I.pressKey('ArrowDown');
    I.wait(1);
    I.fillField('//form/div[1]/div/input', 'testtest');
    I.fillField('//form/div[2]/div/input', 'testtest');
    I.fillField('//form/div[3]/div/input', 'testtest');
    I.click('.css-1ag1ief-button');
    I.see('User password changed');
});

Scenario('test edit profile', ( {I} ) => {
    I.amOnPage('/');
    I.fillField('input[type=text]', 'admin');
    I.fillField('#inputPassword', 'testtest');
    I.wait(1);
    I.click('button[type=submit]');
    I.click('div a[href] img');
    I.click('//*[@id="page-header-select-nav"]');
    I.clearField('//form[1]/div[1]/div/input');
    I.fillField('//form[1]/div[1]/div/input', 'admin');
    I.clearField('//form[1]/div[2]/div/input');
    I.fillField('//form[1]/div[2]/div/input', 'newadmin@localhost');
    I.clearField('//form[1]/div[3]/div/input');
    I.fillField('//form[1]/div[3]/div/input', 'newadmin');
    I.click('.css-1ag1ief-button');
    I.see('User updated');

    
});


