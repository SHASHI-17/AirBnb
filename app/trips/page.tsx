import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";

export const dynamic = 'force-dynamic'
const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <ClientOnly><EmptyState title="Unauthorized" subtitle="Please Login" />;</ClientOnly>
  }

  const reservations = await getReservations({ userId: currentUser.id });
  if (reservations.length === 0) {
    return (
     <ClientOnly>
       <EmptyState
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
     </ClientOnly>
    );
  }
  return (
    <ClientOnly>

      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>

  );
};

export default page;
