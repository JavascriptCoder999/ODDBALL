    var pairs=[1,1,2,2,3,3,4,4,5,5];
    var pairsShuffle=[];
    while(pairs.length>0){
        var randomN=Math.round(random(pairs.length-1));
        pairsShuffle.push(pairs[randomN]);
        pairs.splice(randomN,1);
    }
    oddBallGroup.visible(false);
    var cloneNumber=0;
    for(var y=0; y<3; y++){
        for(var x=0; x<3; x++){
            var ninjaClone=oddBallGroup.clone();
            ninjaClone.x(150+x*175);
            ninjaClone.y(20+y*195);
            ninjaClone.visible(true);
            wearCostume(ninjaClone);
        }
    }
}
