let herbRepository = (function() {
    let herbList = [
        {
            name: 'lavender',
            latin: 'Lavandula spp',
            type: 'antibacterial',
            color: 'purple',
            height: 20
        },
        {
            name: 'rosemary',
            latin: 'Rosmarinus officinalis',
            type: 'antimicrobial',
            color: 'green',
            height: 6
        },
    
        {
            name:  'peppermint',
            latin:  'Mentha x piperita',
            type:  'antimicrobial' , 
            color:  'green',
            height:  18
        
     },
       {
        name: 'chamomile',
        latin: 'Matricaria chamomilla',
        type: 'calmative',
        color: 'white',
        height: 3
    }
    ]
    function getAll () {
        return herbList;
    }
    function add (herb) {
        herbList.push(herbs);
    }

    return{
        getAll: getAll,
        add: add
    }
})()                                                                                  


console. log(herbRepository.getAll())
 //printing all herbs

    
 herbRepository.getAll().forEach(function(herb) {
    console.log(herb.name + ' is  a ' + herb.type + '  of herb. ');
  });
  herbRepository.getAll().forEach(function(herb) {
    if(herb.height <= 10) {
        document.write(herb.name + "(height: " + herb.height + ")" + "<br>");
    } else {
        document.write(herb.name + " (height: " + herb.height + ") - Woah, that's HUGE ! " + " <br>")
    }
    
  });

 
