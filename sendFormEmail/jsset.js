"use strict"

/*function cals(a, b) {
    console.log("input a", a)
    console.log("a + b = ", a * b)
}

cals(2,5)*/
/*function cals(a, b, c) {
    console.log("value", c)
    console.log(c+b*a)
}
cals(3,2,4)*/


  const a = [0, 4, 5, 8, 10];
  const b = [1, 2, 3, 6, 7,];
  const c = [9];
  

console.log(a, b, c);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {    
        e.preventDefault();

        let error = formValidate(form);
        console.log(form)

        let formData = new FormData(form);
        formData.append('imge', formImage.files[0]);

        if (error === 0) {
            form.classList.add('_sending');
            let responce = await fetch('sendmail.php', {
                method: 'POST',
                body: formDate
            });
            if (responce.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
        } else {
            alert('error');
            form.classList.remove('_sending');
        }
    } else {
            alert('fill app the fillds');
        }

    }


    function formValidate(form) {
        let error = 0;
        let fomReq = document.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.getAttribute("type") ==="checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
      return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error')
    }
    //test email
function emailTest(input) {
    regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/
    return !regexp.test(input.value);
}
//keep file in let
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
uploadFile(formImage.files[0]);
});

function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('only pictures');
    formImage.value = '';
    return;
    }
    //check

    if(file.size > 2 *1024*1024) {
        alert('file should be less than to 2mb.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="foto">`;
    };
    reader.onerror = function (e) {
       alert('error'); 
    };
    reader.readAsDataURL(file);
}
});
