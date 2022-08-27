export interface Hygraph {
  hero: Hero
  whyHomeroomOne: WhyHomeroomOne
  infoAndGraphic?: {}
  contactAndInfo?: {}
}

export interface Hero {
  titleColorOne?: string
  titleColorTwo?: string
  description?: string
  graphic?: {
    url?: string
  }
}

export interface WhyHomeroomOne {
  title: string
  description: string
  informationCard: InformationCard[]
}

export interface InformationCard {
  title: string
  description: string
  image: {
    url: string
  }
}
