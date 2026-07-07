const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
const button = document.querySelector('button');
// input.focus;

button.addEventListener('click', function(){
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        deleteButton.addEventListener('click',function(){
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteButton);
        list.append(li);
        }
        input.value = '';
        input.focus;
    }
);

// man, javascript is not clicking for me yet... then again, neither is csharp, and im positive ill get that, so ill probably also get this