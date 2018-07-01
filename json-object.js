var students = {
    student1: {
        name: "Vinay",
        age: 20,
        weight: 60,
        height: 6.2,
        friends:["rohit", "partha"],
        college: {
            name: "VPPV College",
            city: "Bangalore",
            pincode: 560000
        }
    },
    student2: {
        name: "Ramya",
        age: 18,
        weight: 60,
        height: 5,
        friends:["Pratheeba", "Uma"],
        college: {
            name: "GSM College",
            city: "Chennai",
            pincode: 600028
        }
    },
    student3: {
        name: "Mony",
        age: 19,
        weight: 50,
        height: 5.2,
        friends:["Raghavi", "ravi"],
        college: {
            name: "PET College",
            city: "Kolkatta",
            pincode:123456
        }
    },
    student4: {
        name: "Ram",
        age: 21,
        weight: 69,
        height: 6.2,
        friends:["Somu", "Swamy"],
        college: {
            name: "STTE College",
            city: "Hyderabad",
            pincode: 122334
        }
    }
}

console.log(students.student4)
console.log(students.student2.friends)