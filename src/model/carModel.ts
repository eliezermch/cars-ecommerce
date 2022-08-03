export interface CarsType {
  id: number;
  name: string;
  photo: string;
  price: number;
  segment: string;
  thumbnail: string;
  year: number;
}

export interface CarType {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: [
    {
      name: string;
      description: string;
      image: string;
    },
    {
      name: string;
      description: string;
      image: string;
    }
  ];
  model_highlights: [
    {
      title: string;
      content: string;
      image: string;
    },
    {
      title: string;
      content: string;
      image: string;
    }
  ];
}
