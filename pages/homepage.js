const basepage = require("./basepage");

 class HomePage extends basepage{

   
    get getStartedBtn() {
        return $('#get-started')
    }

    open() {
        super.open('https://practice.automationbro.com/')
    }
}

module.exports= new HomePage();