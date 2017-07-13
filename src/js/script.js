NUM_TABS = 3;

$(document).ready(function ()
{
    // listener for each tab
    for(let i=1; i<=NUM_TABS; i++){
        $(`#tab${i}`).click(function ()
        {
            console.log(`Clicked method${i}`);
            showTab(i);
        });
    }

    // listener for "new method/table" button
    for(let i=1; i<=NUM_TABS-1; i++){
        $(`#new${i}`).click(function ()
        {
            console.log(`Clicked #new${i}`);
            showTab(i+1);
            $(`#new${i}`).hide();
        });
    }

    //listener for done w/ table buttons
    for(let i=1; i<=NUM_TABS; i++){
        $(`#done${i}`).click(function () {
            console.log(`Clicked done${i}`);
            tableDone(i);
            if(i>1){
                showTab(i-1);
            }
        });
    }

    editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
    document.getElementById('editor').style.fontSize = '14px';
    editor.setReadOnly(true);

    //initial state
    highlight(2);
    for(var i=2; i<=NUM_TABS; i++){
        $(`#tab${i}`).hide();
    }
   
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
    $(`#tab${id}`).hide();
    $(`#${id}a`).hide();
    $(`#tab${id}`).removeClass('active');
    $(`#${id}a`).removeClass('active');
}

