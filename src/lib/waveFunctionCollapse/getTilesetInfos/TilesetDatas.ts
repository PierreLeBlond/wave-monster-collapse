import type { Symmetry } from "./Symmetry"

interface TilesetDatas {
  tiles: {
    name: string,
    frequency: number,
    symmetry: Symmetry
  }[],
  neighbors: {
    leftPattern: {
      name: string,
      index: number
    },
    rightPattern: {
      name: string,
      index: number
    }
  }[]
}

export type { TilesetDatas };