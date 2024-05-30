class CollisionBlock 
{
    constructor({ position }) 
    {
      this.position = position
      this.width = 32
      this.height = 32
    }
  
    draw() 
    {
        context.fillStyle = 'rgba(255, 0, 0, 0.5)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class PlatformBlock 
{
    constructor({ position }) 
    {
      this.position = position
      this.width = 32
      this.height = 32
    }
  
    draw() 
    {
        context.fillStyle = 'rgba(255, 0, 0, 0.5)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}