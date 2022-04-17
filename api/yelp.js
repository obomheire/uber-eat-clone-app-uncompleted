import axios from "axios";

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer nUXNBpw59KlnPzS50LuDzK9-z_6tPD0jH4iEekEHYHecwjs4FTu73z3JnQw-0fAUcYH6enVV-jQnfI4orL4Hs37JpxrZeaEDVsp2TSCEyVyThP-L2YJhcSEN1d1XYnYx",
  }
});
