import { v4 as uuidv4 } from 'uuid';

export enum EnumProjectTypes {
  machineLearning = 'MachineLearning',
  videogames = 'Videogames',
  applications = 'Applications',
  ai = 'AI',
  dataScience = 'DataScience',
}

const projectTypes: any = {
  MachineLearning: {
    colorBadge: 'rgb(14, 151, 133)',
    name: 'Machine Learning',
    bgBox: 'black',
    enumValue: 'MachineLearning',
  },
  Videogames: {
    colorBadge: 'rgb(157, 112, 30)',
    name: 'Videogames',
    bgBox: 'black',
    enumValue: 'Videogames',
  },
  Applications: {
    colorBadge: 'purple',
    name: 'Applications',
    bgBox: 'black',
    enumValue: 'Applications',
  },
  AI: {
    colorBadge: 'green',
    name: 'A.I.',
    bgBox: 'black',
    enumValue: 'AI',
  },
  DataScience: {
    colorBadge: 'orange',
    name: 'Data Science',
    bgBox: 'black',
    enumValue: 'DataScience',
  },
};

export class Project {
  id: string;
  type: any;
  destination: string;
  srcImage: string;
  title: string;
  tooltip: string;

  constructor(
    type: string,
    destination: string,
    srcImage: string,
    title: string,
    tooltip: string,
  ) {
    console.log(type);
    this.id = uuidv4();
    this.type = projectTypes[type];
    this.destination = destination;
    this.srcImage = srcImage;
    this.title = title;
    this.tooltip = tooltip;
    // console.log(type, this.type);
  }
}
