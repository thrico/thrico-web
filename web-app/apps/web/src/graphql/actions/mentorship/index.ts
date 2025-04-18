import { useMutation, useQuery } from "@apollo/client";
import {
  ACCEPT_BOOKING_REQUEST,
  ADD_MENTORSHIP_SERVICES,
  ADD_MENTORSHIP_TESTIMONIALS,
  ALL_MENTORSHIP_SERVICES,
  BOOK_FREE_WEBINAR,
  BOOK_PAID_WEBINAR,
  CANCEL_BOOKING,
  CHECK_MENTORSHIP,
  CHECK_MENTORSHIP_URL,
  CHECK_WEBINAR,
  DUPLICATE_MENTORSHIP_SERVICES,
  DUPLICATE_MENTORSHIP_TESTIMONIALS,
  GET_ALL_APPROVED_MENTOR,
  GET_ALL_MENTOR_CATEGORY,
  GET_ALL_MENTOR_SERVICES_BY_ID,
  GET_ALL_MENTOR_SKILLS,
  GET_BOOKING_REQUEST,
  GET_BOOKING_UPCOMING,
  GET_CANCEL_BOOKING,
  GET_COMPLETED_BOOKING,
  GET_MENTOR_BY_SLUG,
  GET_MENTORSHIP_SERVICES,
  GET_SERVICES_DETAILS,
  MARK_AS_BOOKING_COMPLETED,
  REGISTER_MENTORSHIP,
} from "../../queries/mentorship";

export const getMediaByGroup = (options: any) =>
  useQuery(CHECK_MENTORSHIP_URL, options);

export const registerMentorShip = (options: any) =>
  useMutation(REGISTER_MENTORSHIP, options);

export const checkMentorShip = () => useQuery(CHECK_MENTORSHIP);

export const getAllMentorCategory = () => useQuery(GET_ALL_MENTOR_CATEGORY);

export const getAllMentorSkills = () => useQuery(GET_ALL_MENTOR_SKILLS);

export const addMentorShipServices = (options: any) =>
  useMutation(ADD_MENTORSHIP_SERVICES, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addMentorShipServices } }) {
      console.log(addMentorShipServices);
      try {
        const { getAllMentorServices }: any = cache.readQuery({
          query: ALL_MENTORSHIP_SERVICES,
        });
        cache.writeQuery({
          query: ALL_MENTORSHIP_SERVICES,
          data: {
            getAllMentorServices: [
              ...addMentorShipServices,
              ...getAllMentorServices,
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllMentorServices = (options: any) =>
  useQuery(ALL_MENTORSHIP_SERVICES, options);

export const duplicateMentorShipServices = (options: any) =>
  useMutation(DUPLICATE_MENTORSHIP_SERVICES, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { duplicateMentorShipServices } }) {
      try {
        const { getAllMentorServices }: any = cache.readQuery({
          query: ALL_MENTORSHIP_SERVICES,
        });
        cache.writeQuery({
          query: ALL_MENTORSHIP_SERVICES,
          data: {
            getAllMentorServices: [
              ...duplicateMentorShipServices,
              ...getAllMentorServices,
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllMentorTestimonial = (options: any) =>
  useQuery(GET_MENTORSHIP_SERVICES, options);

export const addMentorShipTestimonials = (options: any) =>
  useMutation(ADD_MENTORSHIP_TESTIMONIALS, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { addMentorShipTestimonials } }) {
      try {
        const { getAllMentorTestimonial }: any = cache.readQuery({
          query: GET_MENTORSHIP_SERVICES,
        });
        cache.writeQuery({
          query: GET_MENTORSHIP_SERVICES,
          data: {
            getAllMentorTestimonial: [
              ...addMentorShipTestimonials,
              ...getAllMentorTestimonial,
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const duplicateMentorShipTestimonials = (options: any) =>
  useMutation(DUPLICATE_MENTORSHIP_TESTIMONIALS, {
    onCompleted() {
      options.onCompleted();
    },
    update(cache, { data: { duplicateMentorShipTestimonials } }) {
      try {
        const { getAllMentorTestimonial }: any = cache.readQuery({
          query: GET_MENTORSHIP_SERVICES,
        });
        cache.writeQuery({
          query: GET_MENTORSHIP_SERVICES,
          data: {
            getAllMentorTestimonial: [
              ...duplicateMentorShipTestimonials,
              ...getAllMentorTestimonial,
            ],
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

export const getAllApprovedMentor = () => useQuery(GET_ALL_APPROVED_MENTOR);

export const getMentorProfileBySlug = (options: any) =>
  useQuery(GET_MENTOR_BY_SLUG, options);

export const getAllMentorServicesByID = (options: any) =>
  useQuery(GET_ALL_MENTOR_SERVICES_BY_ID, options);

export const checkWebinarPaymentResponse = (options: any) =>
  useQuery(CHECK_WEBINAR, options);

export const bookPaidWebinar = (options: any) =>
  useMutation(BOOK_PAID_WEBINAR, {});

export const getServicesDetails = (options: any) =>
  useQuery(GET_SERVICES_DETAILS, options);

export const bookFreeWebinar = (options: any) =>
  useMutation(BOOK_FREE_WEBINAR, {
    onCompleted: options.onCompleted,
  });

export const getBookingRequest = (options: any) =>
  useQuery(GET_BOOKING_REQUEST, options);

export const getUpcomingBooking = (options: any) =>
  useQuery(GET_BOOKING_UPCOMING, options);

export const acceptBookingRequest = (options: any) =>
  useMutation(ACCEPT_BOOKING_REQUEST, {});

export const cancelBooking = (options: any) => useMutation(CANCEL_BOOKING, {});

export const getCancelledBooking = (options: any) =>
  useQuery(GET_CANCEL_BOOKING, options);

export const getCompletedBooking = (options: any) =>
  useQuery(GET_COMPLETED_BOOKING, {});

export const markBookingAsCompleted = (options: any) =>
  useMutation(MARK_AS_BOOKING_COMPLETED, {});
