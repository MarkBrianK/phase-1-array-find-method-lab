const record = [
        {year:"2015", result : "W"},
        {year : "2014", result: "N/A"},
        {year:"2013", result: "N/A"}
    ]
function superbowlWin(output){
    for (const object of output){
        if(object.result ==="W"){
            return object.year

        }
        
    }
}
record.find(superbowlWin);