export function getUser() {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    return user;
}