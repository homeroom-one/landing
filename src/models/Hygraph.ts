export interface Hygraph {
  Hero: Hero
  WhyHomeroomOne: WhyHomeroomOne
  InformationAndGraphic8020: InformationAndGraphic8020
  ReportsInformationAndGraphic: ReportsInformationAndGraphic
  ContactBanner: ContactBanner
}

export interface Hero {
  titleColorOne: string
  titleColorTwo: string
  description: string
  graphic: Graphic
}

export interface WhyHomeroomOne {
  title: string
  description: string
  informationCard: InformationCard[]
}

export interface InformationAndGraphic8020 {
  titleColorOne: string
  description: string
  graphic: Graphic
}

export interface ReportsInformationAndGraphic {
  titleColorOne: string
  description: string
  graphic: Graphic
}

export interface ContactBanner {
  titleColorOne: string
  description: string
}

//#region Helper Interfaces
export interface InformationCard {
  title: string
  description: string
  image: Graphic
}

export interface Graphic {
  url: string
}
//#endregion