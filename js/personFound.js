const personFound = () => {
    const titleContainer = document.getElementById('header-container');
    const title = person.message;
    const h1 = document.createElement('h1');
    h1.innerHTML = `
        <h1 class="text-center text-success-emphasis fw-bold">${title}</h1>
    `;
    titleContainer.appendChild(h1);

    // console.log(title);
}

personFound();

const firstPerson = () => {
    const firstContainer = document.getElementById('first-person-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h1>Person Name: ${person.result[0].name.common}</h1>
            </div>
            <div class="card-body">
                <p>Age: ${person.result[0].age}</p>
                <p>Street: ${person.result[0].address.street}, House No.: ${person.result[0].address.house}</p>
            </div>
        </div>
    `;
    firstContainer.appendChild(div);
}

firstPerson();

const secondPerson = () => {
    const firstContainer = document.getElementById('second-person-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h1>Person Name: ${person.result[1].name.common}</h1>
            </div>
            <div class="card-body">
                <p>Age: ${person.result[1].age}</p>
                <p>Street: ${person.result[1].address.street}, House No.: ${person.result[1].address.house}</p>
            </div>
        </div>
    `;
    firstContainer.appendChild(div);
}

secondPerson();