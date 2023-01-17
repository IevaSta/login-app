function updateDataInLocalStorage(data) {
    localStorage.setItem('usersData', JSON.stringify(data));
}

export default updateDataInLocalStorage;