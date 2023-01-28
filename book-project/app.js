// We need to get the values from the input fields

const form = document.querySelector('#form')

function add(x,y){
  return x + y;
}
form.addEventListener('submit',function(event){
  event.preventDefault();
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value
  const tbody = document.querySelector('#t-body');
  tbody.innerHTML += `<tr>
                        <td>${title}</td>
                        <td>${author}</td>
                        <td>${isbn}</td>
                       </tr>`

})
