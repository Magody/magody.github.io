import { v4 as uuidv4 } from 'uuid';

export enum EnumProjectTypes {
  machineLearning = 'machineLearning',
  videogames = 'videogame',
  applications = 'applications',
  ai = 'ai',
}

const projectTypes: any = {
  machineLearning: {
    colorBadge: 'rgb(14, 151, 133)',
    name: 'Machine Learning',
    bgBox: 'cyan',
  },
  videogames: {
    colorBadge: 'rgb(157, 112, 30)',
    name: 'Videogames',
    bgBox: 'cyan',
  },
  applications: {
    colorBadge: 'purple',
    name: 'Applications',
    bgBox: 'cyan',
  },
  ai: {
    colorBadge: 'green',
    name: 'A.I.',
    bgBox: 'cyan',
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
    this.id = uuidv4();
    this.type = projectTypes[type];
    this.destination = destination;
    this.srcImage = srcImage;
    this.title = title;
    this.tooltip = tooltip;
    console.log(type, this.type);
  }
}
