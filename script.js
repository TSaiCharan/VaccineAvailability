function getDetails(){
    var request=new XMLHttpRequest();
    
    var pin=document.getElementById("pin").value;
    var date=document.getElementById("date").value;

    var url=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`

    var div=document.getElementById("details");
    div.innerHTML="";
    
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        data=data.centers;
        for(i=0;i<data.length;i++){
            var str=`${i+1})Name : ${data[i].name}  ||  Address : ${data[i].address}  ||  Price : ${data[i].fee_type}\n`
            div.append(str);

            var table=document.createElement("TABLE");
            table.border="2";

            row=table.insertRow(-1);
            c1=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            c4=row.insertCell(-1);
            c5=row.insertCell(-1);

            c1.innerHTML="Date";
            c2.innerHTML="Stock Available";
            c3.innerHTML="Minimum Age";
            c4.innerHTML="Vaccine Available"
            c5.innerHTML="Slots";

            var sessions=data[i].sessions;
            for(j=0;j<sessions.length;j++){
                row=table.insertRow(-1);
                c1=row.insertCell(-1);
                c2=row.insertCell(-1);
                c3=row.insertCell(-1);
                c4=row.insertCell(-1);
                c5=row.insertCell(-1);

                c1.innerHTML=sessions[j].date;
                c2.innerHTML=sessions[j].available_capacity;
                c3.innerHTML=sessions[j].min_age_limit;
                c4.innerHTML=sessions[j].vaccine;
                c5.innerHTML=sessions[j].slots;
            }
            div.append(table);
        }
    })
}