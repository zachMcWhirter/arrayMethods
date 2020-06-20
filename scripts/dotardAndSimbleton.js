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
    <section>
        ${business.companyIndustry}
    </section>
    <section>
        ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}
    </section>
    <section>
        ${business.addressStateCode}
    </section>
    <section>
        ${business["addressZipCode"]}
    </section>
    <section>
        ${business.phoneWork}
    </section>
    <section>
        ${business.purchasingAgent.nameLast},
        ${business.purchasingAgent.nameFirst}
    </section>
    <section>
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
    return inNewYork
  })
  console.log("These are our New York businesses", newYorkBusinesses)


const mfgBusinesses = businesses.filter(business => {
    let mfg = false

    if (business.companyIndustry === "Manufacturing") {
        mfg = true
    }
    return mfg
  })
  console.log("These are our manufacturing businesses", mfgBusinesses)

// ********************************

//     ** Map Method **


