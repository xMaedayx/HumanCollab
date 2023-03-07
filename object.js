const questions = [
    {
      type: 'input',
      name: 'employee_name',
      message: 'What employee are you looking for?',
      
    },

    { 
        type:'input',
        name:'employee_ID',
        message: "What is the employee ID?"

    },
    {
        type:'input',
        name:'office',
        message: 'What is the employee office number?'
    },
    {
        type: 'input', 
        name: 'email',
        message: "what is the employee email?"

    },
];

module.exports = questions

