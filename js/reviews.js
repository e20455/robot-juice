// this document is responsible for adding the reviews from an api into the reviews section on product.html //

function load_reviews(list_item) {
    var list = list_item.find('div');
    list.empty();
    $('#status').show();
    var promise = $.ajax('https://cis1110apicw.computing.edgehill.ac.uk/reviews')
    promise.always(function(data) {
        alert(data);
        for(var idx=0; idx < data.length; idx++) {
            list.append('<div>'+ data[idx].nickname + '</div>');
            list.append('<div>'+ data[idx].review + '</div>');
            list.append('<div>'+ data[idx].rating + '</div>');
        }
    });
}

(function() {
    function replaceText(review, content) {
        var element = document.getElementsByClassName(review);    
    }

    function replaceText(rating, content) {
        var element = document.getElementsByClassName(rating);    
    }
});