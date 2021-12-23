import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import P5 from "p5";
import { InitialState, Pattern, create, ECA } from "@/ts/ECA";

export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  gen: string;
  ruleType: "random" | "input";
  ruleNumber: string;
  initialState: InitialState;
  pattern: Pattern;
};

export const GetterTypes: {
  Gen: "Gen";
  RuleType: "RuleType";
  RuleNumber: "RuleNumber";
  InitialState: "InitialState";
  Pattern: "Pattern";
} = {
  Gen: "Gen",
  RuleType: "RuleType",
  RuleNumber: "RuleNumber",
  InitialState: "InitialState",
  Pattern: "Pattern",
};

export const MutationTypes: {
  UpdateGen: "UpdateGen";
  UpdateRuleType: "UpdateRuleType";
  InputRuleNumber: "InputRuleNumber";
  UpdateInitialState: "UpdateInitialState";
  UpdatePattern: "UpdatePattern";
} = {
  UpdateGen: "UpdateGen",
  UpdateRuleType: "UpdateRuleType",
  InputRuleNumber: "InputRuleNumber",
  UpdateInitialState: "UpdateInitialState",
  UpdatePattern: "UpdatePattern",
};

export const ActionTypes: {
  Sketch: "Sketch";
} = {
  Sketch: "Sketch",
};

export const store = createStore<State>({
  state: {
    gen: "0",
    ruleType: "random",
    ruleNumber: "30",
    initialState: "single",
    pattern: "periodic",
  },
  getters: {
    [GetterTypes.Gen](state) {
      return state.gen;
    },
    [GetterTypes.RuleType](state) {
      return state.ruleType;
    },
    [GetterTypes.RuleNumber](state) {
      return state.ruleNumber;
    },
    [GetterTypes.InitialState](state) {
      return state.initialState;
    },
    [GetterTypes.Pattern](state) {
      return state.pattern;
    },
  },
  mutations: {
    [MutationTypes.UpdateGen](state, gen: number) {
      state.gen = gen.toString();
    },
    [MutationTypes.UpdateRuleType](state, ruleType: "random" | "input") {
      state.ruleType = ruleType;
    },
    [MutationTypes.InputRuleNumber](state, ruleNumber: string) {
      state.ruleNumber = ruleNumber;
    },
    [MutationTypes.UpdateInitialState](state, initialState: InitialState) {
      state.initialState = initialState;
    },
    [MutationTypes.UpdatePattern](state, pattern: Pattern) {
      state.pattern = pattern;
    },
  },
  actions: {
    [ActionTypes.Sketch]({ commit, state }, node) {
      const cellSize = 4;
      const sketch = (p: P5) => {
        let spaceSize: number;
        let maxGen: number;
        let div: P5.Element;
        let eca: ECA;

        const visualizer = (state: Int8Array, gen: number) => {
          state.forEach((cell, cellIndex) => {
            if (cell !== 1) return;
            p.fill("#58f898");
            p.rect(
              cellIndex * cellSize,
              (gen - 1) * cellSize,
              cellSize,
              cellSize
            );
          });
        };

        const init = () => {
          const { clientWidth: canvasWidth, clientHeight: canvasHeight } = node;
          spaceSize = Math.round(canvasWidth / cellSize);
          maxGen = Math.round(canvasHeight / cellSize);
          return [canvasWidth, canvasHeight];
        };

        const start = () => {
          p.clear();
          if (state.ruleType === "random") {
            commit(
              MutationTypes.InputRuleNumber,
              Math.floor(Math.random() * 256).toString()
            );
          }
          eca = create(
            Number(state.ruleNumber),
            state.pattern,
            spaceSize,
            state.initialState
          );
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
          p.removeElements();
          p.loop();
        };

        p.setup = () => {
          const [canvasWidth, canvasHeight] = init();
          const cv = p.createCanvas(canvasWidth, canvasHeight);
          cv.style("display", "block");
          div = p.createDiv("CLICK/TOUCH HERE TO START!");
          div.style("position", "absolute");
          div.style("font-size", "12px");
          div.style("color", "#fff");
          p.select(`#${node.id}`)?.mouseClicked(start);
        };

        p.draw = () => {
          if (!eca || eca.gen > maxGen) return p.noLoop();
          eca = eca.generate();
          visualizer(eca.state, eca.gen);
          commit(MutationTypes.UpdateGen, eca.gen);
        };

        p.windowResized = () => {
          p.noLoop();
          p.clear();
          p.noCanvas();
          const [canvasWidth, canvasHeight] = init();
          p.createCanvas(canvasWidth, canvasHeight);
          commit(MutationTypes.UpdateGen, 0);
        };
      };
      new P5(sketch, node);
    },
  },
  modules: {},
});