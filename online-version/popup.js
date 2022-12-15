$(document).ready(function () {
    $('#example').DataTable({
        paging: false,
        ordering: false,
        info: true,
  			"language": {
    					"search": "",
                        "searchPlaceholder": "Search...",
                        "info": "Showing _TOTAL_ entries"
  			},
        "sDom": '<"top"<"actions">lfpi<"clear">><"clear">rt<"bottom">'

    });
});
