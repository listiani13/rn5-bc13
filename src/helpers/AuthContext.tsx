import React, { createContext, useContext } from "react";
let AuthContext = createContext<{ token: string | null }>({ token: "" });

function useAuth() {
	return useContext(AuthContext);
}

export { AuthContext as default, useAuth };
