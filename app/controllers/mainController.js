angular.module('blogRoll', [])
       .controller('TestController', testController);

function testController(){
    var self = this;

    self.testString = "Hello WORLD from Angular again";

}
