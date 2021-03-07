const constraints = {
    username: {
        presence: true,

    },
    firstname: {
        presence: true,
        format: {
            pattern: "[a-z]+",
            flags: "i",
            message: "can only contain a-z "
        }
    },
    lastname: {
        presence: true,
    },
    email: {
        presence: true,
    },
    ages: {
        presence: true,
        numericality: {
            lessThan: 150,
            greaterThan: 0,
            onlyInteger: true

        }
    },
    tel: {
        presence: true,
        format: {
            pattern: "[0-9]+",
            flags: "i",
            message: "can only contain 0-9 "
        }
    },
    day: {
        presence: true
    },
    month: {
        presence: true
    },
    year: {
        presence: true
    }

}

const app = {
    data() {
        return {
            img: "./images/2.jpg",
            username: null,
            firstname: null,
            lastname: null,
            email: null,
            age: null,
            tel: null,
            errors: null,
            day: null,
            month: null,
            year: null
        }
    },
    methods: {
        checkSummit() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                username: this.username,
                email: this.email,
                ages: this.age,
                tel: this.tel,
                day: this.day,
                month: this.month,
                year: this.year
            }, constraints);
            console.log(this.errors)
            if (!this.errors) {
                console.log(this.day + ' ' + this.month + '  ' + this.year)

                alert("Registered successfully.")
            }
        }
    }

}
Vue.createApp(app).mount('#app')

function count(x, y, z) {
    var m = 0
    var y = []
    console.log(z + ' ' + x)

    for (var m = 0; z < x; m++) {
        z++
        y[m] = z
    }
    return y



}