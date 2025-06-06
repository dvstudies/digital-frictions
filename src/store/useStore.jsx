import { create } from "zustand";

export let useStore = create((set, get) => ({
    geodb: [],
    landing: true,
    visibleDots: false,
    methodology: false,

    resetClick: (obj) => {
        const geodb = get().geodb;

        geodb.map((e) => {
            if (e.id == obj?.id) e.clicked = true;
            else e.clicked = false;
        });
        set({ geodb });
    },
}));
