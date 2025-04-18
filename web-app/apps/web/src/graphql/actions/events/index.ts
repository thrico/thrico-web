import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_AGENDA,
  ADD_EVENT_GALLERY,
  ADD_EVENT_SPONSOR,
  ADD_HOST,
  ADD_SPEAKER,
  ADD_SPONSORSHIP,
  ADD_VENUE,
  CREATE_EVENTS,
  CREATE_EVENT_FOR_GROUP,
  DELETE_SPONSORSHIP,
  EVENT_BY_SLUG,
  GET_ALL_AGENDA,
  GET_ALL_EVENT,
  GET_ALL_EVENT_GALLERY,
  GET_ALL_HOST,
  GET_ALL_SPEAKERS,
  GET_ALL_VENUE,
  GET_EVENTS_TYPE,
  GET_EVENT_AS_HOST,
  GET_EVENT_COST_TYPE,
  GET_EVENT_SPONSOR,
  GET_PAID_EVENTS_DETAILS,
  GET_SPONSORSHIP,
  GET_SPONSORSHIP_EVENTS,
  GET_SPONSORSHIP_SPEAKERS,
  REMOVE_HOST,
} from "../../queries/events";
import { GROUP_EVENTS } from "../../queries/communities";

export const createEventForGroup = (options: any) =>
  useMutation(CREATE_EVENT_FOR_GROUP, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { createEventForGroup } }) {
      console.log(options.id);
      try {
        const { getAllGroupEvents }: any = cache.readQuery({
          query: GROUP_EVENTS,
          variables: {
            input: {
              id: options.id,
            },
          },
        });

        cache.writeQuery({
          query: GROUP_EVENTS,
          variables: {
            input: {
              id: options.id,
            },
          },
          data: {
            getAllGroupEvents: [createEventForGroup, ...getAllGroupEvents],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getEvents = (options: any) => useQuery(GET_ALL_EVENT, options);

export const createEvent = (options: any) =>
  useMutation(CREATE_EVENTS, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { createEvent } }) {
      try {
        const { getAllEvents }: any = cache.readQuery({
          query: GET_ALL_EVENT,
        });

        cache.writeQuery({
          query: GET_ALL_EVENT,
          data: {
            getAllEvents: [createEvent, ...getAllEvents],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getEventBySlug = (options: any) =>
  useQuery(EVENT_BY_SLUG, options);

export const getEventAsHost = (options: any) =>
  useQuery(GET_EVENT_AS_HOST, options);

export const getEventSponsorship = (options: any) =>
  useQuery(GET_SPONSORSHIP, options);

export const addSponsorShip = (options: any) =>
  useMutation(ADD_SPONSORSHIP, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addSponsorShip } }) {
      try {
        const { getEventSponsorship }: any = cache.readQuery({
          query: GET_SPONSORSHIP,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });

        cache.writeQuery({
          query: GET_SPONSORSHIP,
          data: {
            getEventSponsorship: [addSponsorShip, ...getEventSponsorship],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
      // console.log(likeFeed);
      // console.log(data);
    },
  });

export const useDeleteSponsorShip = (options: any) =>
  useMutation(DELETE_SPONSORSHIP, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { deleteSponsorShip } }) {
      try {
        const { getEventSponsorship }: any = cache.readQuery({
          query: GET_SPONSORSHIP,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });

        cache.writeQuery({
          query: GET_SPONSORSHIP,
          data: {
            getEventSponsorship: [
              ...getEventSponsorship.filter(
                (set: any) => set.id !== deleteSponsorShip.id
              ),
            ],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllHost = (options: any) => useQuery(GET_ALL_HOST, options);

export const addHost = (options: any) => useMutation(ADD_HOST, options);

export const removeHost = (options: any) => useMutation(REMOVE_HOST, options);

export const getAllVenue = (options: any) => useQuery(GET_ALL_VENUE, options);
export const getEventSponsors = (options: any) =>
  useQuery(GET_EVENT_SPONSOR, options);
export const getEventGallery = (options: any) =>
  useQuery(GET_ALL_EVENT_GALLERY, options);
export const getAllSpeakers = (options: any) =>
  useQuery(GET_ALL_SPEAKERS, options);
export const addVenue = (options: any) =>
  useMutation(ADD_VENUE, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addVenue } }) {
      try {
        const { getAllVenue }: any = cache.readQuery({
          query: GET_ALL_VENUE,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
        cache.writeQuery({
          query: GET_ALL_VENUE,
          data: {
            getAllVenue: [addVenue, ...getAllVenue],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const addSpeaker = (options: any) =>
  useMutation(ADD_SPEAKER, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addEventSpeaker } }) {
      try {
        const { getAllSpeakers }: any = cache.readQuery({
          query: GET_ALL_SPEAKERS,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
        cache.writeQuery({
          query: GET_ALL_SPEAKERS,
          data: {
            getAllSpeakers: [addEventSpeaker, ...getAllSpeakers],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const addAgenda = (options: any) =>
  useMutation(ADD_AGENDA, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addEventAgenda } }) {
      try {
        const { getAllAgenda }: any = cache.readQuery({
          query: GET_ALL_AGENDA,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });

        cache.writeQuery({
          query: GET_ALL_AGENDA,
          data: {
            getAllAgenda: [addEventAgenda, ...getAllAgenda],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const addEventMedia = (options: any) =>
  useMutation(ADD_EVENT_GALLERY, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addEventMedia } }) {
      try {
        const { getEventGallery }: any = cache.readQuery({
          query: GET_ALL_EVENT_GALLERY,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });

        cache.writeQuery({
          query: GET_ALL_EVENT_GALLERY,
          data: {
            getEventGallery: [...addEventMedia, ...getEventGallery],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const addEventSponsors = (options: any) =>
  useMutation(ADD_EVENT_SPONSOR, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addEventSponsors } }) {
      try {
        const { getEventSponsors }: any = cache.readQuery({
          query: GET_EVENT_SPONSOR,
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });

        cache.writeQuery({
          query: GET_EVENT_SPONSOR,
          data: {
            getEventSponsors: [addEventSponsors, ...getEventSponsors],
          },
          variables: {
            input: {
              slug: options.slug,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getSponsorshipEvents = (options: any) =>
  useQuery(GET_SPONSORSHIP_EVENTS, options);

export const getSpeakersEvents = (options: any) =>
  useQuery(GET_SPONSORSHIP_SPEAKERS, options);

export const getPaidEventsDetails = (options: any) =>
  useQuery(GET_PAID_EVENTS_DETAILS, options);

export const getEventsType = () => useQuery(GET_EVENTS_TYPE);

export const getEventCostType = () => useQuery(GET_EVENT_COST_TYPE);
