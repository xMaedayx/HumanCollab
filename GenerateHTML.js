


const addManager = function (manager) {
    return `
    <div class="row small-up-1 medium-up-2 large-up-3">
        <div class="column" style="flex: 0 0 auto;">
            <div class="card"> 
            <div class="card-section">                                 
                <h3>${manager.name}</h3>
                <h4>Manager</h4><span class="badge primary"><i class="fi-heart"></i></span>
                  <div class="card-body">
                  <p class="id">ID: ${manager.id}</p>
                  <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                  <p class="office">Office Number:${manager.office}</p>
   </div>
      </div>
          </div>
              </div>
    `
}


const addEngineer = function (engineer) {
    return `
    <div class="row small-up-1 medium-up-2 large-up-3">
        <div class="column" style="flex: 0 0 auto;">
            <div class="card">
              <div class="card-section">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><span class="badge success"><i class="fi-wrench"></i></span>
                <div class="card-body">
                  <p class="id">ID:${engineer.id}</p>
                  <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                  <p class="github"><a href="https://github.com/${engineer.github}">${engineer.github}</p>
    </div>
        </div>
            </div>
              </div>
              </div>
   
    `;
}


const addIntern = function (intern) {
    return `
    <div class="row small-up-1 medium-up-2 large-up-3">
        <div class="column" style="flex: 0 0 auto;">
            <div class="card">
              <div class="card-section">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><span class="badge warning"><i class="fi-check"></i></span>
                <div class="card-body">
                  <p class="id">ID: ${intern.id}</p>
                  <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                  <p class="school">School: ${intern.universityl}</p>
    </div>
        </div>
            </div>
              </div> 
              </div>
  
    `;
};

GenerateHTML = (data) => {

 
    page = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const position = employee.getPosition(); 


        if (position === 'Manager') {
            const managerCard = addManager(employee);

            page.push(managerCard);
        }

  
        if (position === 'Engineer') {
            const engineerCard = addEngineer(employee);

            page.push(engineerCard);
        }

       
        if (position === 'Intern') {
            const internCard = addIntern(employee);

            page.push(internCard);
        }
        
    }


    const employeeCards = page.join('')

    const teamwork = generatePage(employeeCards); 
    return teamwork;

}


const generatePage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>

  </html>


`;
}


module.exports = GenerateHTML; 
