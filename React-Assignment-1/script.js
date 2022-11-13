// var url =
//   "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

// DYNAMIC TABLE CODE START

$(document).ready(() => {
  $.ajax({
    method: "GET",
    url: "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",

    success: function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        var list = data[i];

        $("tbody").append(`<tr class="row" data-href='url://'>
                    <td >${list.id}</td>
                    <td >${list.firstName}</td>
                    <td >${list.lastName}</td>
                    <td >${list.email}</td>
                    <td >${list.phone}</td>
                  </tr>`);
      }
      // INFO
      $(".row").on("click", () => {
        console.log("clicked");
      });
// DYNAMIC TABLE CODE END


//SEARCH ENGEEN START
      $("search-box").on("keyup", function(){
          let value= $(this).val()
          console.log("value:", value)
      })
//SEARCH ENGEEN END

//DYNAMIC DETAILS SECTION START
    
      $.ajax({
        url: "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
        method: "GET",
        success: function (data) {
          console.log(data);

          for (let i = 0; i < data.length; i++) {
            let list = data[i];

            $("#info-content").append(`

        
        <div><b>User selected:</b>${list.firstName} ${list.lastName}</div>
                  <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                    ${list.description}
                            </textarea
                    >
                  </div>
                  <div><b>Address:</b>${list.address.streetAddress}</div>
                  <div><b>City:</b>${list.address.city}</div>
                  <div><b>State:</b> ${list.address.state}</div>
                  <div><b>Zip:</b> ${list.address.zip}</div>
        
                `);
          }
        },
      });
    },
  });
});
//DYNAMIC DETAILS SECTION END


