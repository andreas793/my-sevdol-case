//выбор необходимого элемента
const element = document.querySelector(".pagination__wrapper ul");
let totalPages = + document.querySelector('.pagination__wrapper').getAttribute('data-total-pages');
let page = + document.querySelector('.pagination__wrapper').getAttribute('data-page');

//вызов функции с передачей параметров и добавлением внутри элемента, который является тегом ul
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page){
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if(page > 1){ //показать следующую кнопку, если значение страницы больше 1
        liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Предыдущая</span></li>`;
    }

    if(page > 2){ //если значение страницы меньше 2, добавьте 1 после предыдущей кнопки
        liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    // сколько страниц или li показывают до текущего li
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    // сколько страниц или li отображается после текущего liкор
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage  = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) { //если длина больше, чем общая длина страницы, продолжить
            continue;
        }
        if (plength == 0) { //если длина равна 0, добавьте +1 к значению длины
            plength = plength + 1;
        }
        if(page == plength){ //если страница равна длине, чем назначить активную строку в активной переменной
            active = "active";
        }else{ //иначе оставьте пустым для активной переменной
            active = "";
        }
        liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    if(page < totalPages - 1){ //если значение страницы меньше значения totalPage на -1, то показать последний li или страницу
        if(page < totalPages - 2){ //если значение страницы меньше значения totalPage на -2, добавьте это (...) перед последним li или страницей
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) { //показать следующую кнопку, если значение страницы меньше totalPage (20)
        liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Следующая <i class="fas fa-angle-right"></i></span></li>`;
    }
    element.innerHTML = liTag; //добавить тег li внутри тега ul
    return liTag; //повторно включить тег li
}
