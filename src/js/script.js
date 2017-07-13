$(document).ready(function () 
{
    
    $("#showtab2").click(function () 
        { 
            $("#tab2").show();
            $("#2a").show();

            $("#tab1").removeClass('active');
            $("#1a").removeClass('active');
            $("#tab2").addClass('active');
            $("#2a").addClass('active');
        }
    );

    $("#showtab3").click(function () 
        {
            $("#tab3").show();
            $("#3a").show();

            $("#2a").hide();

            $("#tab2").removeClass('active');
            $("#2a").removeClass('active');
            $("#tab3").addClass('active');
            $("#3a").addClass('active');
        }
    );

    editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
    document.getElementById('editor').style.fontSize = '14px';
    editor.setReadOnly(true);

    highlight(3);
   
});


function highlight(line)
{
    editor.gotoLine(line, 0, true);
}

// not tested
function gotoNext(line)
{
    editor.gotoLine(editor.getCursor() + 1, 0, true);
}

