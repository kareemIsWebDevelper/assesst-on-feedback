
const app = Vue.createApp({
    data: function (){
        return {
            image: './images/icon-star.svg',
            description: 'image',
            pa1: 'How did we do?',
            pa20: 'Please let us know how we did with your support',
            pa21: 'request. All feedback is appreciated to help us',
            pa22: 'improve our offering!',
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            btn: 'Submit',
        }
    }
})

const done = Vue.createApp({
    data: function (){
        return {
            img: './images/illustration-thank-you.svg',
            description: 'image',
            pa3: 'You selected 4 out of 5',
            pa4: 'Thank you!',
            pa50: 'We appreciate you taking the time to give a rating',
            pa51: 'If you ever need more support,don\'\t hesitate to',
            pa52: 'get in touch!',
        }
    }
})
.mount('#onSubmit')

