const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [],
			coordinator: [],
			Event: [],
			Guest: [],
			Permission: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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
				if (!response.ok) throw Error("There was a problem in the login request")
				if (response.status === 401) {
					throw ("Invalid credentials")
				}
				else if (response.status === 400) {
					throw ("Invalid email or password format")
				}
				if (response.status === 200) {
					const payload = await response.json();
					localStorage.setItem("session", payload.token);
					setStore({ session: payload });
					return payload; //this is gonna make the promise resolve
					// return jsonify({ "token": access_token, "user_id": user.id })
				} else {
					return await response.json()
				};


			},
			addGuest: async (name, email) => {
				const options = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: name,
						email: email,

					})
				}
				const response = await fetch(process.env.BACKEND_URL + `/api/guest`);
				if (response.status === 200) {
					const payload = await response.json();
					console.log('guest created successfully!');
					return payload;
				}
			},
			loadGuests: async () => {
				const response = await fetch(
					process.env.BACKEND_URL + `/api/guest`
				);
				if (response.status === 200) {
					const payload = await response.json();
					const myGuestList = payload.map((guest, i) => {
						(guest.email = "/guest/");
						guest.uid = i;
						return guest;
					});
					setStore({ guest: myGuestList });
					console.log(myGuestList);
				}
			},
		}
	};
};

export default getState;
