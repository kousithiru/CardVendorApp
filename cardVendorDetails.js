var cardVendorDetails = {};
cardVendorDetails.launch = function(nv, id){
  var detailsPage = new tabris.Page().appendTo(nv);
  nv.toolbarVisible = true;
  detailsPage.title = id;
}
module.exports = cardVendorDetails;
