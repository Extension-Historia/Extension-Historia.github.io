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
          return "<a href=\"" + full.link + "\">" + full.title + " " + full.language + "<br>" + "<p>" + full.description + "<\p>" + "<\a>";
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
      },
      {
        data: 'tag_auxiliary',
        title: 'Auxiliary discipline'
      },
      {
        data: 'tag_genre',
        title: 'Genre'
      },
      {
        data: 'tag_wtype',
        title: 'Website type'
      },
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
      },
      {
        target: 6,
        visible: false,
      },
      {
        target: 7,
        visible: false,
      },
      {
        target: 8,
        visible: false,
      },
    ],
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
                extend: 'pdfHtml5',
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

  $('input:checkbox').on('change', function() {
    //filter content auxiliary discipline
    var checkbox_auxiliary = $('input:checkbox[name="auxiliary"]:checked').map(function() {
      return this.value;
    }).get().join('|');

    table.column(6).search(checkbox_auxiliary, true, false, false).draw(false);

    //filter content genre
    var checkbox_genre = $('input:checkbox[name="genre"]:checked').map(function() {
      return this.value;
    }).get().join('|');

    table.column(7).search(checkbox_genre, true, false, false).draw(false);


    //filter content website type
    var checkbox_wtype = $('input:checkbox[name="wtype"]:checked').map(function() {
      return this.value;
    }).get().join('|');

    table.column(8).search(checkbox_wtype, true, false, false).draw(false);


    //filter content language
    var checkbox_lang = $('input:checkbox[name="lang"]:checked').map(function() {
      return this.value;
    }).get().join('|');

    table.column(4).search(checkbox_lang, true, false, false).draw(false);



  });

  oTable = $('#example').DataTable();
  $('#custom_searchbox').keyup(function() {
    oTable.search($(this).val()).draw();
  })

});
