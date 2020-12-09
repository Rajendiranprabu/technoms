const trainings =
    [
        'Java',
        'C#',
        'Angular'
    ]

trainings.push("MicroSercices");
trainings.unshift("React");
trainings.pop();

console.log(trainings.indexOf("React"))
console.log(trainings);


for (let i = 0; i < trainings.length; i++) {
    console.log(trainings[i])
}




