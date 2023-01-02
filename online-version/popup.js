$(document).ready(function() {
    $('#example').DataTable({
        paging: false,
        ordering: false,
        info: true,
        "language": {
                        "info": "Showing _TOTAL_ from _MAX_ entries",
                        "infoFiltered": "",
                        "infoEmpty": ""
  			},

        dom: 'irtp',

    });

oTable = $('#example').DataTable();
$('#custom_searchbox').keyup(function(){
      oTable.search($(this).val()).draw() ;
})

});

$(document).ready( function () {

  var table = $('#example').DataTable();

 $('input:checkbox').on('change', function () {
   //build a filter string with an or(|) condition
   var keywords = $('input:checkbox[name="key"]:checked').map(function() {
     return this.value;
   }).get().join('&&');


   //now filter in column 2, with no regex, no smart filtering, not case sensitive
   table.column(0).search(keywords, true, false, false).draw(false);

 });

} );
