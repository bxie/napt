editor = ace.edit("editor");
// editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/java");
document.getElementById('editor').style.fontSize='14px';

highlight(3);

function highlight(line)
{
    editor.gotoLine(line, 0, true);
}

// not tested
function gotoNext(line)
{
    editor.gotoLine(editor.getCursor() + 1, 0, true);
}

function showNextTab()
{

}