const baseUrl = 'https://api.github.com/users';
let currentPage = 1;
const usersPerPage = 10;
let allUsers = [];

const token = 'g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';
const headers = {
    'Authorization': `token ${token}`
};

async function fetchUsers(page = 1) {
    try {
        const response = await fetch(`${baseUrl}?page=${page}&per_page=${usersPerPage}`, { headers });
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        allUsers = data;
        renderUsers(data);
        updatePagination();
    } catch (error) {
        console.error(error);
        alert('Error fetching data.');
    }
}

function renderUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login}" style="width: 100px; height: 100px; border-radius: 50%;">
            <h3>${user.login}</h3>
            <p><a href="${user.html_url}" target="_blank">View Profile</a></p>
        `;
        userList.appendChild(userCard);
    });
}

function updatePagination() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = allUsers.length < usersPerPage;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchUsers(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    console.log("hi")
    currentPage++;
    fetchUsers(currentPage);
});

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredUsers = allUsers.filter(user =>
        user.login.toLowerCase().includes(query)
    );
    renderUsers(filteredUsers);
});

fetchUsers(currentPage);
