// CODE here for your Lambda Classes

// Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}


class Instructor extends Person {
    constructor(instruct) {
        super(instruct);
        this.specialty = instruct.specialty;
        this.favLanguage = instruct.favLanguage;
        this.catchPhrase = instruct.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    checkWork(student) {
        let min = Math.ceil(-10);
        let max = Math.floor(11);
        console.log(`${this.name} changed ${student.name}'s grade to ${student.grade + (Math.floor(Math.random()*(max - min + 1) + min))}`);
    }
}


class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.grade = student.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAassignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(student) {
        if (student.grade > 70) {
            return `Congratulations, ${student.name}! You have graduated!`
        } else {
            return `Sorry, ${student.name}...but you need further studying.`
        }
    }
}


class ProjectManager extends Instructor {
    constructor(pManager) {
        super(pManager);
        this.gradClassName = pManager.gradClassName;
        this.favInstructor = pManager.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


// Object constructors

const joe = new Person ({
    name: "Joe",
    age: 33,
    location: "Plainsville",
    gender: "M"
});

const jane = new Person ({
    name: "Jane",
    age: 23,
    location: "Bettersville",
    gender: "F"
});

const wake = new Person ({
    name: "Xander Wake",
    age: 12,
    location: "Avalon",
    gender: "M"
});


const schlakk = new Instructor ({
    name: "Schlakk Masterson",
    age: 38,
    location: "Silicon Valley",
    gender: "M",
    specialty: "Javascript",
    favLanguage: "Javascript",
    catchPhrase: "Can you dig it!"
})

const aristotle = new Instructor ({
    name: "Aristotle",
    age: 2403,
    location: "Greece",
    gender: "M",
    specialty: "Philosophy",
    favLanguage: "Cuneiform",
    catchPhrase: "Plato had narcolepsy"
});

const einstein = new Instructor ({
    name: "Albert",
    age: 140,
    location: "Nevada",
    gender: "M",
    specialty: "Physics",
    favLanguage: "C++",
    catchPhrase: "You stick your tongue out once...you'll never live it down."
});


const wood = new Student ({
    name: "Joshua",
    age: 39,
    location: "California",
    gender: "M",
    previousBackground: "Object-Oriented Programming",
    className: "Full-Stack Web Dev",
    favSubjects: ["Coding", "Music", "Gaming"],
    grade: 100
});

const shady = new Student ({
    name: "Slim",
    age: 36,
    location: "Compton",
    gender: "M",
    previousBackground: "Rapper",
    className: "iOS",
    favSubjects: ["Rhythm", "Rhyme", "Realism"],
    grade: 99
})

const baggins = new Student ({
    name: "Bilbo",
    age: 24,
    location: "The Shire",
    gender: "M",
    previousBackground: "Simple Hobbit",
    className: "Android",
    favSubjects: ["Loops, Rings, Circles"],
    grade: 0
});


const banner = new ProjectManager ({
    name: "Bruce",
    age: 41,
    location: "Earth",
    gender: "M",
    specialty: "Smash",
    favLanguage: "Bash",
    catchPhrase: "I am now only sometimes angry.",
    gradClassName: "WEB17",
    favInstructor: "Schlakk Masterson"
});

const widow = new ProjectManager ({
    name: "Black",
    age: 38,
    location: "S.H.I.E.L.D.",
    gender: "F",
    specialty: "Martial Arts",
    favLanguage: "Russian",
    catchPhrase: "-None-Her fists do the talking.",
    gradClassName: "WEB17",
    favInstructor: "Aristotle"
});

const witch = new ProjectManager ({
    name: "Witch",
    age: 37,
    location: "Dustville",
    gender: "F",
    specialty: "Reality Manipulation",
    favLanguage: "Ruby",
    catchPhrase: "I can't believe Thanos killed Visi'`'~,.,~'`'~",
    gradClassName: "WEB17",
    favInstructor: "Einstein"
});

console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));
console.log(einstein.checkWork(baggins));

console.log(wood.graduate(wood));
console.log(baggins.graduate(baggins));