var fs = require('fs');
fs.readFile('\a.txt', function(err, data) {
    if(err) throw err;

    var array = data.toString().split("\n");

    var arr = []
    var data={"data":[]}
    var temp =[]
    var count=1;
    for(i in array) {
        arr[i]=array[i].split(',');
        for(j=0;j<array.length;j++)
        {
            if(count%3==0){
                //.data[i]='['+ arr[i][2]+','+arr[i][3] + '] '
                temp[i] = '['+ arr[i][2]+','+arr[i][3] + ']';
                data.data[i]=temp[i];
                //arr[i] = temp[i].join().trim().replace(/\s+/ig," ").split(" ")
                //console.log(temp[i])
                count+=2;
                }
                else{
                    count++
                    continue;
                }
        }
    }
});


