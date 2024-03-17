function search() {
    let text = $('#searchText').val();
    let find = 0;
    let towns = $('#towns li').toArray();
    for(let town of towns){
        if(town.textContent.indexOf(text) != -1){
            find++;
            $(town).css('font-weight', 'bold');
        } else{
            $(town).css('font-weight', '');
        }
    }
    $('#result').text(find + 'matches found.')
}