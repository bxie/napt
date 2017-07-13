NUM_TABS = 3;

$(document).ready(function ()
{
    // listener for each tab
    for(let i=1; i<=NUM_TABS; i++){
        $(`#tab${i}`).click(function ()
            {
                console.log(`Clicked method${i}`);
                showTab(i);
            }
        );
    }

    // listener for "new method/table" button
    $("#showtab2").click(function ()
        {
            showTab(2);
        }
    );
    $("#showtab3").click(function () 
        {
            showTab(3);
        }
    );

    editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
    document.getElementById('editor').style.fontSize = '14px';
    editor.setReadOnly(true);

    highlight(3);
   
});

// Given a tab number, set that tab (and table) to active and all others inactive
function showTab(selectedTab, numTabs = NUM_TABS){
    console.log(`showTab for ${selectedTab}`);
    for(let i=1; i<=numTabs; i++){
        if(i == selectedTab){
            continue;
        }
        else{
            $(`#${i}a`).hide();
            $(`#tab${i}`).removeClass('active');
            $(`#${i}a`).removeClass('active');
        }
    }

    $(`#tab${selectedTab}`).show();
    $(`#${selectedTab}a`).show();
    $(`#tab${selectedTab}`).addClass('active');
    $(`#${selectedTab}a`).addClass('active');

}


function highlight(line)
{
    editor.gotoLine(line, 0, true);
}

// not tested
function gotoNext(line)
{
    editor.gotoLine(editor.getCursor() + 1, 0, true);
}

function tableDone(id)
{
    //
}

