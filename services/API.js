const API = {
  // url: "https://firtman.github.io/coffeemasters/api/menu.json",
  url: "/data/menu.json",
  fetchMenu: async function fetchData(){
      const result = await fetch(this.url);
      return await result.json();
  }
}

export default API;