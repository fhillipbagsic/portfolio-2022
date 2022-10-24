import { useReducer } from "react";
import Aboutme from "./components/aboutme/aboutme";
import initialState from "./components/app/initialstate.data";
import {
  ActionInterface,
  StateInterface,
  Types,
} from "./components/app/state.interface";
import {
  StateContext,
  StateDispatchContext,
} from "./components/app/StateContext";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        <div className={`${state.darkMode && "dark"}`}>
          <div className="bg-light-slate-90 dark:bg-dark-gray-100 md:py-8 py-4">
            <Nav />
            <div className="container mx-auto lg:px-0 px-6">
              <Hero />
              <Aboutme />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </div>
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

function stateReducer(state: StateInterface, action: ActionInterface) {
  switch (action.type) {
    case Types.SWITCH_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case Types.OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
  }
}

export default App;
