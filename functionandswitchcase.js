function wearCostume(ninjaClone){
    var cloneIndex=cloneNumber+1;
    var hand=ninjaClone.findName("hands_"+cloneIndex);
    var shirt=ninjaClone.findName("shirt_"+cloneIndex);
    var head=ninjaClone.findName("head_"+cloneIndex);
    
    var costume;
    switch(pairsShuffle[cloneNumber]){
        case 1:
            costume=$this.ninjaCostume1;
            break;
                    case 2:
            costume=$this.ninjaCostume2;
            break;
                    case 3:
            costume=$this.ninjaCostume3;
            break;
                    case 4:
            costume=$this.ninjaCostume4;
            break;
                    case 5:
            costume=$this.ninjaCostume5;
            break;
    }
