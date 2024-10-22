export interface Region {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       RegionElement;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   RegionElement[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum RegionElement {
  Africa = "Africa",
  Asia = "Asia",
}

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  eng?: EngEnum;
  sot?: string;
  fra?: Fra;
  sag?: string;
  ara?: Ara;
  ber?: string;
  tir?: string;
  swa?: string;
  mey?: string;
  spa?: string;
  por?: string;
  tsn?: string;
  run?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  ssw?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  crs?: string;
  mlg?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  som?: string;
  kin?: string;
  deu?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  zdj?: string;
  pov?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  nya?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  amh?: string;
  mfe?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export enum Fra {
  French = "French",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  EasternAfrica = "Eastern Africa",
  MiddleAfrica = "Middle Africa",
  NorthernAfrica = "Northern Africa",
  SouthernAfrica = "Southern Africa",
  WesternAfrica = "Western Africa",
}
