import type { TilesetDatas } from "./TilesetDatas";

const tilesetDatasObject: TilesetDatas = {
  tiles: [
    {
      name: "bridge",
      frequency: 1,
      symmetry: "I"
    },
    {
      name: "component",
      frequency: 20,
      symmetry: "X"
    },
    {
      name: "connection",
      frequency: 10,
      symmetry: "T"
    },
    {
      name: "corner",
      frequency: 10,
      symmetry: "L"
    },
    {
      name: "substrate",
      frequency: 2,
      symmetry: "X"
    },
    {
      name: "t",
      frequency: 0.1,
      symmetry: "T"
    },
    {
      name: "track",
      frequency: 2,
      symmetry: "I"
    },
    {
      name: "transition",
      frequency: 0.4,
      symmetry: "T"
    },
    {
      name: "turn",
      frequency: 1,
      symmetry: "L"
    },
    {
      name: "viad",
      frequency: 0.1,
      symmetry: "I"
    },
    {
      name: "vias",
      frequency: 0.3,
      symmetry: "T"
    },
    {
      name: "wire",
      frequency: 0.5,
      symmetry: "I"
    },
    {
      name: "skew",
      frequency: 2,
      symmetry: "L"
    },
    {
      name: "dskew",
      frequency: 2,
      symmetry: "\\"
    }
  ],
  neighbors: [
    {
      leftPattern: {
        name: "bridge",
        index: 0
      },
      rightPattern: {
        name: "bridge",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "bridge",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "track",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 0
      },
      rightPattern: {
        name: "transition",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "viad",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 0
      },
      rightPattern: {
        name: "wire",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "component",
        index: 0
      },
      rightPattern: {
        name: "component",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "connection",
        index: 1
      },
      rightPattern: {
        name: "component",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "connection",
        index: 0
      },
      rightPattern: {
        name: "connection",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "connection",
        index: 0
      },
      rightPattern: {
        name: "corner",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 0
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 0
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 2
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 1
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 0
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 1
      },
      rightPattern: {
        name: "corner",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "substrate",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "t",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "track",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "transition",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "t",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "t",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "t",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "track",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "track",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "track",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "transition",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "transition",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "transition",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "turn",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "viad",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "viad",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "t",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 1
      },
      rightPattern: {
        name: "t",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "track",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "track",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "transition",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "transition",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "viad",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 0
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 1
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 0
      },
      rightPattern: {
        name: "transition",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 2
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 2
      },
      rightPattern: {
        name: "turn",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 0
      },
      rightPattern: {
        name: "turn",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 0
      },
      rightPattern: {
        name: "turn",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 0
      },
      rightPattern: {
        name: "viad",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 0
      },
      rightPattern: {
        name: "vias",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "viad",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 1
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 1
      },
      rightPattern: {
        name: "vias",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "vias",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 0
      },
      rightPattern: {
        name: "wire",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 1
      },
      rightPattern: {
        name: "wire",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "bridge",
        index: 1
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "connection",
        index: 3
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "dskew",
        index: 0
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 0
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 0
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 1
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 3
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 0
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 3
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 0
      },
      rightPattern: {
        name: "bridge",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 0
      },
      rightPattern: {
        name: "connection",
        index: 1
      }
    },
    {
      leftPattern: {
        name: "corner",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "corner",
        index: 3
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 0
      },
      rightPattern: {
        name: "dskew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "skew",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 3
      }
    },
    {
      leftPattern: {
        name: "substrate",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 3
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 2
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "t",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "track",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "transition",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 2
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "turn",
        index: 3
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "viad",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 0
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 2
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    },
    {
      leftPattern: {
        name: "vias",
        index: 3
      },
      rightPattern: {
        name: "skew",
        index: 2
      }
    },
    {
      leftPattern: {
        name: "wire",
        index: 1
      },
      rightPattern: {
        name: "skew",
        index: 0
      }
    }
  ]
}

export { tilesetDatasObject };