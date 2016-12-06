$( document ).ready(function(){
    loadApp();
});


/* Entry point of our application */
function loadApp(){
    //This is our navigation and main content.
    //To add a new Category insert '<li class="uk-nav-header">...</li>' +
    //To add a new Request insert the following and replace Category and Request respectively
        //'<li><a href="#" onclick="handleNav-Category-Request-()">..</a></li>' +
        //Remember to add the corresponding function bellow!
    var app = '' +
    '<div id="main" class="uk-container uk-container-center">' +
        '<div class="uk-grid">' +
            '<div id="sidebar" class="uk-panel uk-panel-box uk-width-medium-1-4">' +
                '<h3 class="uk-panel-title">API Navigation</h3>' +
                '<ul class="uk-nav uk-nav-side">' +
                    '<li class="uk-nav-header">Brands</li>' +
                    '<li><a href="#" onclick="handleNavBrandsDetails()">GET Details</a></li>' +
                    '<li><a href="#" onclick="handleNavBrandsDesigns()">GET Can Designs</a></li>' +
                    '<li><a href="#" onclick="handleNavBrandsFlavors()">GET Flavors</a></li>' +
                    '<li class="uk-nav-header">Cans</li>' +
                    '<li><a href="#" onclick="handleNavCansDetails()">GET Details</a></li>' +
                    '<li><a href="#" onclick="handleNavCansReviews()">POST User Review</a></li>' +
                    '<li class="uk-nav-header">Companies</li>' +
                    '<li><a href="#" onclick="handleNavCompaniesDetails()">GET Details</a></li>' +
                    '<li><a href="#" onclick="handleNavCompaniesBrands()">GET Brands</a></li>' +
                    '<li class="uk-nav-header">Flavors</li>' +
                    '<li><a href="#" onclick="handleNavFlavorsDetails()">GET Details</a></li>' +
                    '<li><a href="#" onclick="handleNavFlavorsCans()">GET Cans</a></li>' +
                    '<li><a href="#" onclick="handleNavFlavorsBrands()">GET Brands</a></li>' +
                    '<li><a href="#" onclick="handleNavFlavorsBrands()">GET Companies</a></li>' +
                '</ul>' +
            '</div>' +
            '<div id="content" class="uk-width-medium-3-4">' +
                '<p>Test</p>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '';
    $("#app").html(app);
}

/* Our display links */

//Brands

function handleNavBrandsDetails(){
    var content = '' +
    '<h2>Brands</h2>' +
    '<h4>GET Details</h4>' +
    '';

    $("#content").html(content);
}

function handleNavBrandsDesigns(){
    var content = '' +
    '<h2>Brands</h2>' +
    '<h4>GET Can Designs</h4>' +
    '';

    $("#content").html(content);
}

function handleNavBrandsFlavors(){
    var content = '' +
    '<h2>Brands</h2>' +
    '<h4>GET Flavors</h4>' +
    '';

    $("#content").html(content);
}

//Cans

function handleNavCansDetails(){
    var content = '' +
    '<h2>Cans</h2>' +
    '<h4>GET Details</h4>' +
    '';

    $("#content").html(content);
}

function handleNavCansReviews(){
    var content = '' +
    '<h2>Cans</h2>' +
    '<h4>POST User Review</h4>' +
    '';

    $("#content").html(content);
}

//Companies

function handleNavCompaniesDetails(){
    var content = '' +
    '<h2>Companies</h2>' +
    '<h4>GET Details</h4>' +
    '';

    $("#content").html(content);
}

function handleNavCompaniesBrands(){
    var content = '' +
    '<h2>Companies</h2>' +
    '<h4>GET Brands</h4>' +
    '';

    $("#content").html(content);
}

//Flavors

function handleNavFlavorsDetails(){
    var content = '' +
    '<h2>Flavors</h2>' +
    '<h4>GET Details</h4>' +
    '';

    $("#content").html(content);
}

function handleNavFlavorsCans(){
    var content = '' +
    '<h2>Flavors</h2>' +
    '<h4>GET Cans</h4>' +
    '';

    $("#content").html(content);
}

function handleNavFlavorsBrands(){
    var content = '' +
    '<h2>Flavors</h2>' +
    '<h4>GET Brands</h4>' +
    '';

    $("#content").html(content);
}

function handleNavFlavorsCompanies(){
    var content = '' +
    '<h2>Flavors</h2>' +
    '<h4>GET Companies</h4>' +
    '';

    $("#content").html(content);
}