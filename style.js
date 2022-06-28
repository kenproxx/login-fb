function findAll() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/students',
        success: function (data) {
            display(data);
        }
        ,
        error: function (error) {
            console.log(error);
        }

    });
}


function showCreateForm() {
    let show = document.getElementById('display');
    let str = "<input type=\"text\" name=\"name\"> tên \n" +
        "    <input type=\"text\" name=\"age\">tuổi \n" +
        "    <input type=\"text\" name=\"class\">class \n" +
        "    <button onclick=\"save()\">tạo mới</button>";
    show.innerHTML = str;

}

function sortProduct() {
    let show = document.getElementById('display');
    let str = "<input type=\"number\" name=\"from\">từ\n" +
        "    <input type=\"number\" name=\"to\">đến\n +" +
        "    <button onclick=\"sort()\">sắp xếp</button>\n";
    show.innerHTML = str;

}

function sort() {
    let from = document.getElementsByName('from')[0].value;
    let to = document.getElementsByName('to')[0].value;
    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/product/sort?from=' + from + '&to=' + to,
        success: function (data) {
            display(data);
        }
        ,
        error: function (error) {
            console.log(error);
        }

    });

}

function save() {

    let name = document.getElementsByName('name')[0].value;
    let age = document.getElementsByName('age')[0].value;
    let clazz = document.getElementsByName('class')[0].value;
    let student = {
        name: name,
        age: age,
        clazz_id: {
            id: clazz
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: 'http://localhost:8080/students',
        data: JSON.stringify(student),
        success: function () {
            console.log("success");
            findAll();

        }
        ,
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        }

    });
}

function display(data) {
    let show = document.getElementById('table');
    console.log(data);
    let str = "";
    for (let i = 0; i < data.length; i++) {

         str += "<tr><td>" + data[i].name+ "</td>\n" +
            "                <td>" + data[i].age + "</td>\n" +
            "                <td>" + data[i].clazz.name + "</td></tr>"
        show.innerHTML = str;
    }

}


    window.fbAsyncInit = function() {
    FB.init({
        appId      : '{your-app-id}',
        cookie     : true,
        xfbml      : true,
        version    : '{api-version}'
    });

    FB.AppEvents.logPageView();

};

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}


