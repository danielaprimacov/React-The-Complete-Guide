import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const respone = await fetch("http://localhost:8080/events/" + id);

  if (!respone.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { stauts: 500 }
    );
  } else {
    return respone;
  }
}
