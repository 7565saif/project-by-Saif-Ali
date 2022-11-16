const url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

let tableBody = document.getElementById('tbody')
let infoContent = document.getElementById('info-content')
let userData = [];
let filteredUserData =[];
let activeUserId = null;

fetch(url )
.then(response => response.json())
.then( users => {
  userData = users;
  renderUsers(users, true);
})

function userRowClicked(clickedRow){
  const prevActiveRow = document.getElementsByClassName('active')[0];
  prevActiveRow.classList.remove('active');
  clickedRow.classList.add('active');
  const clickedUserId = clickedRow.querySelector('.column1').innerHTML;
  activeUserId = +clickedUserId;
  const clickedRowData = userData.find(user => user.id === +clickedUserId)
  renderDetails(clickedRowData);


}

function renderDetails(user){
  infoContent.innerHTML +=`
  <div><b>User selected:</b>${user.firstName} ${user.lastName}</div>
  <div><b>Description: </b><textarea cols="50" rows="5" readonly>${user.description}</textarea></div>
  <div><b>Address:</b> ${user.address.streetAddress}</div>
  <div><b>City:</b> ${user.address.city}</div>
  <div><b>State:</b> ${user.address.state}</div>
  <div><b>Zip:</b> ${user.address.zip}</div>`

}

function renderUsers(users, isFirstTime){
  tableBody.innerHTML = ' ';
  users.map((user, i) => { 
    tableBody.innerHTML += `<tr class="data-row ${isFirstTime && i == 2 || user.id == activeUserId ? 'active' : ''}" onclick ="userRowClicked(this)">
      <td class="column1">${user.id}</td>
      <td class="column2">${user.firstName}</td>
      <td class="column3">${user.lastName}</td>
      <td class="column4">${user.email}</td>
      <td class="column5">${user.phone}</td>
    </tr>`   
    
    if(isFirstTime && i == 2) {
      activeUserId = user.id;
      renderDetails(user)
    }
  })
}

function onSearchInput(searchValue){
  searchValue = searchValue.toLowerCase();

  filteredUserData = userData.filter(user => 
    user.firstName.toLowerCase().includes(searchValue) ||
    user.lastName.toLowerCase().includes(searchValue) ||
    user.email.toLowerCase().includes(searchValue) ||
    user.phone.toLowerCase().includes(searchValue))
    

    renderUsers(filteredUserData, false)
}