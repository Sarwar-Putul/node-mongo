# node-mongo
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h1>My node and mongo db site</h1>
    <p id="userName"></p>

    <div class="container">
        <div class="raw">
            <input type="text" class="form-control" id="user" placeholder="Write name">
            <button class="btn btn-primary" id="addUser">Add User</button>
        </div>
    </div>

    <script>
        fetch('http://localhost:3000/users/2')
        .then(res => res.json())
        .then(data => {
            document.getElementById('userName').innerText = data.name;
        })

        //Post data to the server

        const btnAddUser = document.getElementById('addUser')
        btnAddUser.addEventListener('click', () => {
            const name =document.getElementById('user').value;
            const user = {name};
            

            //Post

            fetch('http://localhost:3000/addUser',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
            })
            .then(res => res.json())
            .then(data => updateUser(data))
        })

        function updateUser (user){
            document.getElementById('userName').innerText = user.name;
        }
    </script>
</body>
</html>