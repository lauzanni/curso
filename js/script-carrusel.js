 
 new Glide('.glide',{
        type: 'carrousel',
        startAt:0,
        perView:3,
        gap:30,
        breakpoints:{
            991:{
                perView:2
            },
            768:{
                perView:1
            }
        }
    }
    ).mount();
