let cards = document.querySelectorAll(".card");
for (let card of cards){
    card.addEventListener('click', function(e){
        let num = this.getAttribute("data-num");
        let textToDisplay = document.getElementById('tab'+ num);
        let textToDisplayCss= textToDisplay.classList;
         
        if (num <=3){
            if(this.classList.contains('active')){
                this.classList.remove('active');
                textToDisplayCss.remove('active')
                let formationDiv = document.querySelector('.formation').classList;
                formationDiv.add('active');

            } else {
                this.classList.add('active');
                textToDisplayCss.add('active');
                let formationDiv = document.querySelector('.formation').classList;
                formationDiv.remove('active');
            }
        } else {
            if(this.classList.contains('active')){
                this.classList.remove('active');
                textToDisplayCss.remove('active')
                let experienceDiv = document.querySelector('.experience').classList;
                experienceDiv.add('active');
            } else {
                this.classList.add('active');
                textToDisplayCss.add('active');
                let experienceDiv = document.querySelector('.experience').classList;
                experienceDiv.remove('active');
            }
        }
        
    })

}
