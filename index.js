const inquirer = require('inquirer');
const fs = require('fs');

const GenerateHTML = require('./GenerateHTML')

const engineer = require('./teams/engineer');
const Manager = require('./teams/Manager');
const intern = require('./teams/intern');


const team = []

const manage = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name, please.'
            
        },
        

        {
            type:'input',
            name:'id',
            message:'Input manager ID'

        },

        {
            type:'input',
            name:'email',
            message:'Input manager email',
        },
        
        {
            
            type:'input',
            name:'office',
            message: 'input managers office number',


        },
    ]) 



    .then(manager => {
    const {name,id,email,office} = manager
    const TheManager = new Manager (name, id, email, office)
    team.push(TheManager);
    console.log(TheManager);
    return TheEmployee(team);
    
})
};

const TheEmployee = (team) => {
    console.log('input employees');



return inquirer.prompt ([
    {
        type:'list',
        name:'position',
        message:'Please choose your employees role',
        choices: ['engineer',"intern"]
    },
    {
        type:'input',
        name:'name',
        message:'employee, name, please.'
    },
    {
        type:'input',
        name:'id',
        message: 'input employee id.'
    },
    {
        type: 'input',
        name: 'email',
        message:'input employee email.'
    },
    {
        type:'input',
        name:'github',
        message:'input employee github handle.'

    },
    {
        type:'input',
        name:'university',
        message:'input intern\'s university'
    },
    {
        type:'confirm',
        name:'confirmAddEmployee',
        message:'Add more team players?',
        default: false
    },
])

.then(dataOnEmployees => {
    let {name,id,email,position,github,university,confirmAddEmployee} = dataOnEmployees;
    
    let employee;

    if (position === 'engineer') {
        employee = new engineer (name,id,email,github);
        console.log(employee);
    } else if (position === 'intern') {
        employee = new intern (name,id,github,email,university);
        console.log(employee);
    }
    team.push(employee);
    if (confirmAddEmployee) {
        return TheEmployee(team);
    } else {
        return team;
    }
})
};

const writeFile = data => {
    fs.writeFile('./NewGenerated.html', data, err => {
       
        if (err) {
            console.log(err);
            return;
       
        } else {
            console.log("Your team profile has been generated! Please see the new .html file")
        }
    })
}; 



manage()

.then(team => {
    return GenerateHTML(team);
})
.then(newHTML => {
    return writeFile(newHTML);
})
.catch(err => {
    console.log(err);

});



    

