$(document).ready(function () 
{
    
    $("#showtab2").click(function () 
        { 
            $("#tab2").show();
            $("#tab1").removeClass('active');
            $("#tab2").addClass('active');
        }
    );

    $("#showtab3").click(function () 
        { 
            $("#tab3").show(); 
            $("#tab2").removeClass('active');
            $("#tab3").addClass('active');
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

