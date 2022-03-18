const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [],
      coordinator: [],
      Event: [],
      guest: [],
      Permission: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      getCurrentSession: () => {
        const session = JSON.parse(localStorage.getItem("session"));
        setStore({ session });
        return session;
      },
      createNewSession: async (email, password) => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/token`,
          options
        );
        if (!response.ok)
          throw Error("There was a problem in the login request");
        if (response.status === 401) {
          throw "Invalid credentials";
        } else if (response.status === 400) {
          throw "Invalid email or password format";
        }
        if (response.status === 200) {
          const payload = await response.json();
          localStorage.setItem("session", JSON.stringify(payload));
          setStore({ session: payload });
          return payload; //this is gonna make the promise resolve
          // return jsonify({ "token": access_token, "user_id": user.id })
        } else {
          return await response.json();
        }
      },
      addGuest: async (name, email) => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/guest`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ guest: payload });
          return payload;
        }
      },
      loadGuest: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + `/api/guest/${id}`
        );
        if (response.status === 200) {
          const payload = await response.json();
          // setStore({ guest: payload });
          return payload;
        }
      },
      getUserFromToken: async (token) => {
        const response = await fetch(
          process.env.BACKEND_URL + `/api/guest/token/${token}`
        );
        if (response.status === 200) {
          const payload = await response.json();
          // setStore({ guest: payload });
          return payload;
        }
      },
      loadGuests: async () => {
        const response = await fetch(process.env.BACKEND_URL + `/api/guest`);
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ guest: payload });
        }
      },
      addPermissions: async (eventId, guest, vip, valet, dinner) => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_id: eventId,
            guest,
            vip: vip,
            valet: valet,
            dinner: dinner,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/permission`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          console.log("permission created successfully!");
          console.log("payload permission", payload);
          return payload;
        }
      },
      loadPermissions: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + `/api/permission`
        );
        if (response.status === 200) {
          const payload = await response.json();
          const permissions = payload.map((permissions, i) => {
            permissions.email = "/permission";
            permissions.uid = i;
            return permissions;
          });
          setStore({ permissions: permissions });
          console.log(permissions);
        }
      },
    },
  };
};

export default getState;
