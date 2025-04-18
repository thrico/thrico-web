export interface eventsPayments {
  eventCost: string;
}

export interface events {
  id: String;
  details: String;
  eventEndTime: String;
  eventStartTime: String;
  eventType: String;
  eventVisibility: String;
  name: String;
  registrationEndDate: String;
  venue: String;
  cover: String;
  slug: String;
  eventsPayments: eventsPayments;
}

export interface AllEvents {
  data: events[];
  loading: boolean;
}
