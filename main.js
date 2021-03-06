const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})



async function getCountries(){
    const response = await fetch
    ('https://restcountries.eu/rest/v2/all/');

    const data = await response.json();

    return data;
}
document.body.classList = 'loading'
getCountries().then((data)=> {


    
    console.log(data)
        let res = '';
    
    
        for(i in data){
            res += '<tr>';
            res += '<td>' +i+ '</td>';
            res +='<td>' +data[i].name+'</td>';
            res +='<td>' +data[i].capital+'</td>';
            res +='<td>' +data[i].population+'</td>';
            res +='<td><ol>'
            for(j in data[i].borders){
                res+= '<li>' +data[i].borders[j]+'</li>'
            }
                    '</ol></td>';
                    // res +='<td>' +data[i].flag+'</td>';
             res +='<td><img src="'+data[i].flag+'" style="width: 200px; height: 150px; object-fit: contain;" ></td>';
            res += '</tr>'
        }
        document.getElementById('result').innerHTML = res;
    
        document.body.className='';
    }
        
        )
        .catch(error => {
           
            const errorMessage =`There was an error in getting your data: ${error.message} `;

            error.innerHTML = errorMessage;

            alert(errorMessage)
           
        });
