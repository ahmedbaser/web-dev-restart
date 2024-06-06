class TeamMember {
    name;
    location;
    
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    prepareStudent() {
        console.log('${this.name} thank you for your feedback.')
  
      }

}




class Instructor extends TeamMember {
    name;
    designaton = 'web course instructor'
    team = 'web team'
    location;
     
    constructor(name, location) {
      super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support sessionat ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
    prepareStudent() {
      console.log('${this.name} thank you for your feedback.')

    }

}


class Developer extends TeamMember{
  
    designaton = 'web course instructor'
    team = 'web team'
    
     
    constructor(name, location, tech) {
        super(name, location, tech)
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`start the support sessionat ${feature}`)
    }
    release(version) {
        console.log(`please create quiz for module ${version}`)
    }
    prepareStudent() {
      console.log('${this.name} thank you for your feedback.')

    }

}

class JobPlacement extends TeamMember{

    designaton = 'job placement commondos'
    team = 'web team'
    region;
     
    constructor(name, location) {
        super(name, location);
        this.region = region;
    }
    provideResume(feature) {
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version) {
      console.log(`please release the version ${version}`)

    }

}

const alia = new Developer('Alia Bhat', 'Dhaka', 'React');
console.log(alia);
const bipasha = new JobPlacement('bipasha', 'kolkata', 'india');
console.log(bipasha);







