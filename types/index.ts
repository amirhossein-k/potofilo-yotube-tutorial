export interface NavItem {
  path: string;
  icon: React.ReactElement;
}

export interface AboutItem {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
}

export interface Item {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
}

export interface Contact extends Item {
  path: string;
}

export type FooterItem = Omit<Contact, "icon" | "subtitle">;

export interface ExperienceItem {
  titleItem: string;
  frontItem?: Item[];
  backItem?: Item[];
}

export interface portfolioItem {
  _id: string;
  title: string;
  pic: string;
  __v: any;
}

export interface swiperItem {
  _id: string;
  name: string;
  pic: string;
  text: string;
  __v: any;
}
