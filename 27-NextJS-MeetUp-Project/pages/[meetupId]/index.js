import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.prod.website-files.com/6295a06686070f851ef36b13/62bf4153b49088326e04693e_GettyImages-966266912.jpeg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://cdn.prod.website-files.com/6295a06686070f851ef36b13/62bf4153b49088326e04693e_GettyImages-966266912.jpeg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is first meetup",
      },
    },
  };
}

export default MeetupDetails;
