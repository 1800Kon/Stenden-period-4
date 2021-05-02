class Airport {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }
    setName(name) {
        this.name = name;
    }
    setLocation(location){
        this.location = location;
    }
}

class Aircraft {
    constructor(model, airline){
        this.model = model;
        this.airline = airline;
    }
    getModel(){
        return this.model;
    }
    getAirline(){
        return this.airline;
    }
    setModel(model){
        this.model = model;
    }
    setAirline(airline){
        this.airline = airline;
    }
}

class Airline {
    constructor (name, airport){
        this.name = name;
        this.airport = airport;
    }
    getName(){
        return this.name;
    }
    getAirport(){
        return this.airport;
    }
    setName(name){
        this.name = name;
    }
    setAirport(airport){
        this.airport = airport;
    }
}

class Passenger {
    constructor (name, passportId){
        this.name = name;
        this.passportId = passportId;
    }
    getName(){
        return this.name;
    }
    getPassportId(){
        return this.passportId;
    }
    setName(name){
        this.name = name;
    }
    setPassportId(passportId){
        this.passportId = passportId;
    }
}

var testAirport = new Airport("Epic airport", "Munich");
var testAirline = new Airline ("Cool airline", testAirport);
var testAircraft = new Aircraft("Boeing 787", testAirline);
var testPassenger = new Passenger("John", "780953");

document.write(testAirport.getName() + "<br>");
document.write(testAirline.getName() + "<br>");
document.write(testAircraft.getModel() + "<br>");
document.write(testPassenger.getName() + "<br>");

testAirport.setName("Airport 2: Electric Boogaloo");
document.write(testAirport.getName() + "<br>");