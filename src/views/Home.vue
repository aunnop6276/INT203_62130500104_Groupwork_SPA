<template>
  <div class="home">
  <home :icecreams="icecreams" @add-tofav="addToFav" @confirm-name="editIcecreamName"></home>  
  </div>
</template>


<script>
// @ is an alias to /src
import Home from '../components/MainHome.vue'

export default {
  components: {
    "home": Home
  },
  data(){
    return{
      icecreams:[],
      favList:[],
      homeLink: "http://localhost:5000/icecreams",
      editName: ""
    };
  },
  methods:{
    async fetchIcecreams(){
      const res = await fetch("http://localhost:5000/icecreams")
      const data = await res.json();
      return data
    },
    async fetchFavIcecreams() {
      const res = await fetch("http://localhost:5000/favList");
      const data = await res.json();
      return data;
    },
    async addToFav(menu) {
      var boolean = true;
      if (this.favList!= []) {
        for (var key of this.favList) {
          if (key.id == menu.id) {
            boolean = false;
          }
        }
      }
      try {
        if (boolean) {
          const res = await fetch("http://localhost:5000/favList", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              name: menu.name,
              description: menu.description,
              id: menu.id,
            }),
          });
          const data = await res.json();
          this.favList = [...this.favList, data];
        } else {
          alert("You already have in your FavList");
        }
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    // async showEditInput(ic) {
    //   console.log(ic)
    //   try {
    //     const res = await fetch(`${this.homeLink}/${ic.id}`, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: ic.name,
    //         description: ic.description,
    //         id: ic.id
    //       }),
    //     });
    //     const data = await res.json();
    //     this.favList = this.favList.map((i) =>
    //       i.id === ic.id
    //         ? {
    //             ...ic,
    //             name: data.name,
    //             description: data.description,
    //             edit: data.edit,
    //           }
    //         : i
    //     );
    //     // location.reload();
    //     console.log(this.favList[0]);
    //   } catch (error) {
    //     console.log(`Could not edit! ${error}`);
    //   }
    // }, 
    // async cancelNameChange(c) {
    //   try {
    //     const res = await fetch(`${this.icecreams}/${c.id}`, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: c.name,
    //         description: c.description,
    //         edit: false,
    //         id: c.id,
    //       }),
    //     });
    //     const data = await res.json();
    //     this.icecreams = this.icecreams.map((ice) =>
    //       ice.id === c.id
    //         ? {
    //             ...ice,
    //             name: data.name,
    //             description: data.description,
    //             edit: data.edit,
    //           }
    //         : ice
    //     );
    //     // location.reload();
    //     console.log(this.icecreams[0]);
    //   } catch (error) {
    //     console.log(`Could not edit! ${error}`);
    //   }
    // },
    async editIcecreamName(ice,name) {
      console.log(ice.id)
      console.log(name)
      this.name = name;
      if (this.name != "") {
        try {
          const res = await fetch(`${this.homeLink}/${ice.id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              name: this.name,
              description: ice.description,
              id: ice.id,
            }),
          });
          const data = await res.json();
          this.icecreams = this.icecreams.map((cream) =>
            cream.id === ice.id
              ? {
                  ...cream,
                  name: data.name,
                  description: data.description,
                  edit: data.edit,
                }
              : cream
          );
          // this.editName = "";
          // this.isEdit = false
          // this.editId = ''
          // this.enteredName = ''
          // this.rating = null
        } catch (error) {
          console.log(`Could not edit! ${error}`);
        }
      } else {
        alert("Please Enter Name You want to change");
      }
    }
  },
    async created(){
      this.icecreams =  await this.fetchIcecreams();
    }
  }
</script>