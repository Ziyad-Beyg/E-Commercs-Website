// // placing orders in database

// function placing_order(){
//     var full_name = document.getElementById('fname');
//     var email_id = document.getElementById('email');
//     var address = document.getElementById('address');
//     var city = document.getElementById('city');
//     var phone_number = document.getElementById('phone_number');
//     var postal_code = document.getElementById('postal_code');
//     // console.log(full_name.value, email_id.value, address.value, city.value, phone_number.value, postal_code.value);

//     var a = Date();

//     order = {
//         "Full Name" : full_name.value,
//         "Email Id" : email_id.value,
//         "Address" : address.value,
//         "City" : city.value,
//         "Phone Number" : phone_number.value,
//         "Postal Code" : postal_code.value,
//         "Date & Time" : a
//     }
//     console.log(order);
// }
  
//   // end of placing orders in database 

//   var transform = function(obj){
//     var id = obj.id;
//     // var id_value = id
//     // console.log(id) 
//     // alert(parseInt(id));
//     // console.log(id)
//     return id
// }

// var id_value = transform()
// console.log(id_value); 

// // getting product name

//     function getProductname(){

       
        
        // console.log(transform.innerHTML)
        
        // var get_product = document.getElementById("'" + id_value.toString() + "'");
        // console.log(get_product)
        // var product_node = get_product.parentNode.parentNode;
        // var productName = product_node.childNodes[2].nextSibling.childNodes[1];
        // var productValue = productName.innerHTML;
        // console.log(productValue);
        // var productName = get_product.childNodes[2].nextSibling.childNodes[1];
        // var productValue = productName.innerHTML;
        // console.log(productValue)
        // get_product.value = ""
        // console.log(get_product)
// }

// end of getting product name

// console.log(firebase)


// Inserting "value" atttribute in "product" input feild

// var input_feild = document.getElementById('product_name');
// input_feild.setAttribute('value',productValue);
// console.log(input_feild)


// End of Inserting "value" atttribute in "product" input feild

// start of checkout database function

function checkout(){
    var fullName = document.getElementById('fname');
    var emailId = document.getElementById('email');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var phoneNumber = document.getElementById('phone_number');
    var postalCode = document.getElementById('postal_code');
    // var productName = document.getElementById('product_name')
    var date = Date();


    var Order = {
        // "Key" : key,
        "Full Name" : fullName.value,
        "Email Id" : emailId.value,
        "Address" : address.value,
        "City" : city.value,
        "Phone Number" : phoneNumber.value,
        "Postal Code" : postalCode.value,
        "Date & Time" : date
    }
    firebase.database().ref('Order').set(Order)

    // var key = database.push().key ;
    // database.child(key).set(Order)

   
    // console.log(Order);



}

// end of checkout database function