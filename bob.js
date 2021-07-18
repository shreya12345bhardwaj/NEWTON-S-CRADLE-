class bob
{  
	constructor(x,y,r)
	{   var options = {
        restitution:1,
        density:0.8,
        }
        this.r = r;
        this.body=Bodies.circle(x,y,(this.r-20)/2,options)
		this.x=x;
		this.y=y;
		
		World.add(world,this.body)
	}
    display(){
        push ();
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        pop ();
    }	

}