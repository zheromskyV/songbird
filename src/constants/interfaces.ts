export interface IBird {
  id: number | string;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface IBirdGroup {
  name: string;
  birds: IBird[];
}
