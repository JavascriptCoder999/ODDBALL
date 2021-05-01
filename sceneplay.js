if($this.scene.state()=="PLAY"){
$this.ninjaCostume1=[];
$this.ninjaCostume2=[];
$this.ninjaCostume3=[];
$this.ninjaCostume4=[];
$this.ninjaCostume5=[];
var randomPart;
for(var part=0; part<3; part++){
    randomPart=Math.round(random(3,0));
    $this.ninjaCostume1.push(randomPart);
        randomPart=Math.round(random(3,0));
    $this.ninjaCostume2.push(randomPart);
        randomPart=Math.round(random(3,0));
    $this.ninjaCostume3.push(randomPart);
        randomPart=Math.round(random(3,0));
    $this.ninjaCostume4.push(randomPart);
        randomPart=Math.round(random(3,0));
    $this.ninjaCostume5.push(randomPart);
}
