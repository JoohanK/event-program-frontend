export interface Event {
  _id: string
  title: string
  nameOrOrganisation: string
  location: {
    physical: string
    virtual?: string
  }
  registration: {
    requiresRegistration?: boolean
    approvalRequired?: boolean
    invitationRequired?: boolean
    payment?: {
      required?: boolean
      paid?: boolean
    }
  }
  startDate: string
  endDate?: string
  startTime: string
  endTime?: string
  timeZone?: string
  description?: string
  extraInfoAfterRegistration?: string
  maxParticipants?: number
  images?: string[]
}

export interface Location {
  physicalLocation: string
  online?: string
}

export interface Organisation {
  name: string
  email: string
}

export interface User {
  name: string
  email: string
}
