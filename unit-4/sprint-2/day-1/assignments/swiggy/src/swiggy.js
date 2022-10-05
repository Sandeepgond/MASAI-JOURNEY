function UserInfo(name,location) {
    this.name= name
    this.location= location
}

function serveFood(food) {
   return(` Serving ${food} to ${this.name} in ${this.location}`)
}
// serveFood("samoasa")
function serveIn() {}
function billNote() {}
function generateInVoice() {}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
