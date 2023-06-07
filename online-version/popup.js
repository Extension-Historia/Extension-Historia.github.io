$(document).ready(function() {
  $('#example').DataTable({
    "ajax": 'https://raw.githubusercontent.com/Extension-Historia/Extension-Historia.github.io/main/online-version/data.json',
    columns: [{
        orderable: false,
        className: 'select-checkbox',
        defaultContent: '',
        targets: 0
      },
      {
        orderable: false,
        data: null,
        "render": function(data, type, full, meta) {
          return "<a href=\"" + full.link + "\" target=\"_blank\">" + full.title + " " + full.language + "<br>" + "<p>" + full.description + "</p>" + "</a>";
        }
      },
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'description',
        title: 'Description'
      },
      {
        data: 'language',
        title: 'Language'
      },
      {
        data: 'link',
        title: 'Link'
      }
    ],
    columnDefs: [{
        target: 0,
        visible: true,
      },
      {
        target: 1,
        visible: true,
      },
      {
        target: 2,
        visible: false,
      },
      {
        target: 3,
        visible: false,
      },
      {
        target: 4,
        visible: false,
      },
      {
        target: 5,
        visible: false,
      }
    ],
    paging: false,
    ordering: false,
    info: true,
    "language": {
      "info": "Showing _TOTAL_ of _MAX_ entries",
      "infoFiltered": "",
      "infoEmpty": ""
    },

    dom: 'Birtp',
    buttons: [
    {
                extend: 'pdfHtml5',
                title: 'Historia Quick Launcher Data Export',
                text: 'Export all to PDF',
                messageTop: 'This list was produced using the project "Historia Quick Launcher", developed by Lina Lerch. For more information, please vist the project page under https://extension-historia.github.io/',
                orientation: 'landscape',
                pageSize: 'A4',
                className: 'btn btn-warning',
                exportOptions: {
          columns: [2, 3, 5],
          selected: null
        }
            },
            {
                extend: 'pdfHtml5',
                title: 'Historia Quick Launcher Data Export',
                text: 'Export selected to PDF',
                messageTop: 'This list was produced using the project "Historia Quick Launcher", developed by Lina Lerch. For more information, please vist the project page under https://extension-historia.github.io/',
                orientation: 'landscape',
                pageSize: 'A4',
                className: 'btn btn-warning',
                exportOptions: {
          columns: [2, 3, 5]
        }
            }
    ],
    select: {
      style: 'os',
      selector: 'td:first-child'
    },

  });



});

$(document).ready(function() {

  var table = $('#example').DataTable();


  oTable = $('#example').DataTable();
  $('#custom_searchbox').keyup(function() {
    oTable.search($(this).val()).draw();
  })

});
