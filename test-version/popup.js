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
        
        dom: 'Birtp',
        buttons: [
            {
                extend: 'copy',
                messageTop: 'DUMMY MESSAGE',
                exportOptions: {
                    columns: [1, 2]
            }
            },
            {
                extend: 'csv',
                messageTop: 'DUMMY MESSAGE',
                exportOptions: {
                    columns: [1, 2]
            }
            },
            {
                extend: 'excel',
                messageTop: 'DUMMY MESSAGE',
                exportOptions: {
                    columns: [1, 2]
            }
            },
            
            {
                extend: 'print',
                messageTop: 'DUMMY MESSAGE',
                exportOptions: {
                    columns: [1, 2]
                }
            },
        ],

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
   }).get().join('|');


   //now filter in column 2, with no regex, no smart filtering, not case sensitive
   table.column(0).search(keywords, true, false, false).draw(false);

 });

} );
