function createContent(htmlTemplate, element, objData) {
    var elementInsert = document.querySelector(element),
        elementHTML = document.querySelector(htmlTemplate).innerHTML,
        template = Handlebars.compile(elementHTML);

    elementInsert.innerHTML = template(objData);
}

(function () {
    $.ajax({
        url: '/js/data.json'
    }).done(function (data) {
        createContent('#vip_listing-template', '.allEntries', data);
    })
})();