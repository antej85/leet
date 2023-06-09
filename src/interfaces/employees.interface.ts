export interface Employee {
  name: string,
  email: string,
  phoneNumber: string,
  office: string,
  manager: string,
  orgUnit: string,
  mainText: string,
  gitHub: string,
  twitter: string,
  stackOverflow: string,
  linkedIn: string,
  imagePortraitUrl: string,
  imageWallOfLeetUrl: string,
  highlighted: boolean,
  published: boolean,
  primaryRole: string,
  secondaryRole: null,
  area: string
}

export interface SortOption<T extends keyof Employee> {
  label: string,
  value: T
}