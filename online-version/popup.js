$(document).ready(function () {
    $('#example').DataTable({
        paging: false,
        ordering: false,
        info: true,
  			"language": {
    					"search": "",
                        "searchPlaceholder": "Search...",
                        "info": "Showing _TOTAL_ from _MAX_ entries",
                        "infoFiltered": "",
                        "infoEmpty": ""
  			},
        "sDom": '<"top"<"actions">lfpi<"clear">><"clear">rt<"bottom">'

    });
});
