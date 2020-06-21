import businesses from "./data.js"

// forEach() Method
// So Doris just wants to see all of the business names on a web page. You remember that the forEach() method on an array iterates the array and you can write logic for what to do for each item in it. You just want to build some elements to put in the DOM to look like this.

// list of businesses

// Since each object is identical in its structure (but not its state), you can write some automation logic with forEach().


const renderToDom = document.querySelector("#output")
renderToDom.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  renderToDom.innerHTML += `
    <h2>${business.companyName}</h2>
    <section><font color="white"; font-weight:bold;>Industry:</font><br>
        ${business.companyIndustry}
    </section>
    <section><font color="white"; font-weight:bold;>Address:</font><br>
        ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}, 
        ${business.addressStateCode}, 
        ${business["addressZipCode"]}
    </section>
    <section><font color="white"; font-weight:bold;>Phone:</font><br>
        ${business.phoneWork}
    </section>
    <section><font color="white"; font-weight:bold;>Agent:</font><br>
        ${business.purchasingAgent.nameFirst}
        ${business.purchasingAgent.nameLast}
    </section>
    <section><font color="white"; font-weight:bold;>Orders:</font><br>
        ${business.orders}    
    </section>     
  `
  renderToDom.innerHTML += "<hr/>"  
});
// hr = horizontal rule lines between each section

// *********************************

//   ** Filter Method **

const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
    // console.log("test: IN NY!", inNewYork)
    return inNewYork
  })
  console.log("These are our New York businesses", newYorkBusinesses)

// Access to id="nyBiz" HTML element in DOM
  const nyElement = document.getElementById("nyBiz");
  nyElement.innerHTML = '<h1>New York Businesses</h1>'

// Iterate through newYorkBusinesses array and display in DOM
  newYorkBusinesses.forEach(business => {

    nyElement.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business['addressStateCode']} ${business['addressZipCode']}
    </section>
    <hr>
    `
  })


const mfgBusinesses = businesses.filter(business => {
    let mfg = false

    if (business.companyIndustry === "Manufacturing") {
        mfg = true
    }
    return mfg
    })
    console.log("These are our manufacturing businesses", mfgBusinesses)
  
  // Access to id="mfgBiz" HTML element in DOM
    const mfgElement = document.getElementById("mfgBiz");
    mfgElement.innerHTML = '<h1>Manufacturing Businesses</h1>'

  // Iterate through mfgBusinesses array and display in DOM
    mfgBusinesses.forEach(business => {

    mfgElement.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
        ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
    </section>
    <hr>
    `
})


// ********************************

//     ** Map Method **

renderToDom.innerHTML += "<h1>Purchasing Agents</h1>";

const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
    renderToDom.innerHTML += `
        <section>${agent.nameFirst} ${agent.nameLast}</section>`;

    renderToDom.innerHTML += `<hr/>`;
});

//     const bizCardArray = [
//         const bizCard = (name, company, phone) => {
//             fullName: name,
//             companyName: company,
//             phoneNumber: phone
//     }]
// // const makeAgentBusinessCard = (fullName, company, phoneNumber) => {
//     const agentBusinessCard = businesses.map(business => { 
//         return ([business.purchasingAgent],[business.companyName]);
//        (business.phoneWork)

//     })

// console.table(agentBusinessCard)

// const businessCardInfo = makeAgentBusinessCard.array.forEach(business => {
//     renderToDom.innerHTML += `
//         <h2>Purchasing Agents</h2>
//         <section>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</section>
//         <section>${business.companyName}</section>
//         <section>${business.phoneWork}</section>
//     `;
//     renderToDom.innerHTML += `<hr/>`;
// });
