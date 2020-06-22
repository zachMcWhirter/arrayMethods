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



// Access to purchasing agent HTML element in DOM
const agentElement = document.getElementById('purchasingAgents')
agentElement.innerHTML = '<h1>Purchasing Agents</h1>'

// Extracting purchasing agent first and last name, company name and phone number and placing in object
const agents = businesses.map(businessObject => {
 
  const agentObject = {}
//  By creating a new object (agentObject) and declaring it as an empty object, you can then customize exactly what you want to return inside of that object
  agentObject.fullName = `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`
  agentObject.company = businessObject.companyName
  agentObject.phoneNumber = businessObject.phoneWork

  return agentObject

})

console.table(agents)

// Iterate through agents array of objects and display in DOM
agents.forEach(agentObject => {

  agentElement.innerHTML += `
  <h2>${agentObject.fullName}</h2>
  <h3>${agentObject.company}</h3>
  <h3>${agentObject.phoneNumber}</h3>
  <hr/>
  `
})

