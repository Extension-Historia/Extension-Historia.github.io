$(document).ready(function () {
    $('#example').DataTable({
        paging: false,
        ordering: false,
        info: true,
  			"language": {
    					"search": "",
                        "searchPlaceholder": "Search...",
                        "fnInfoCallback": function (Settings, Start, End, Max, Total, Pre) {
          return " Showing " + Total;
      }
  			},
        "sDom": '<"top"<"actions">lfpi<"clear">><"clear">rt<"bottom">'

    });
});
