fetch('./data.json') .then(response => response.json()) .then(
    obj => {
        let highestNumber = 0;
        let globalDiv = document.getElementById('chart');
        let ul = document.getElementsByClassName('bars')[0];
        let amount = document.getElementById('amount');
        let sum = 0;





        for (let i = 0; i < obj.length; i++) {
            if (obj[i].amount > highestNumber) {
                highestNumber = obj[i].amount;
            }
            sum = sum + obj[i].amount

            
        }
        
        for (let i = 0; i < obj.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = `<div class="bar"><span class="tooltip-text" >$${obj[i].amount}</span></div><span>${obj[i].day}</span>` 
            let percent = (obj[i].amount / highestNumber) * 100
            let bar = li.children[0];
            bar.style.height = percent + '%';
            if (percent == 100) {
                bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
            }
        }

        amount.innerText = '$' + sum














    })



