<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub User Viewer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>GitHub Users</h1>


        <input type="text" id="searchInput" placeholder="Search Users..." />

        <div id="userList"></div>


        <div id="pagination">
            <button id="prevPage" disabled>Previous</button>
            <button id="nextPage">Next</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
