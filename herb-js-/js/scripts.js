
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
];
 //printing all herbs
for (let i = 0; 
    i < herbList.length; i++) {
    if (herbList[i].height > 19) {
        document.write(herbList[i].name + "is" + herbList[i].height + " inches tall and it is a " + herbList[i].type + "type! It is tall! <br>") 
    }
    else {
        document.write(herbList[i].name + 'is' + herbList[i].height + ' inches tall and it is a ' + herbList[i].type + 'type!<br>')
    }
}
    


 
