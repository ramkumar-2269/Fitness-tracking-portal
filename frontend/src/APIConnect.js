var api;
function change(i){
    api=i.replace('3000', '8080');
    localStorage.setItem('api',api)
}
api=localStorage.getItem('api')
export { api,change};