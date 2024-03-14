import DeleteUser from "./components/DeleteUser";
import PastOrders from "./components/PastOrders";
import AccountDetails from "./components/accountDetails";
import CurrentOrder from "./components/currentOrder";

export const metadata = {
  title: "Profile",
  description: "See and Edit account details",
};

// async function updateUserData(fields) {
// }

export default function ProfilePage() {
  return (
    <main className="mt-28 flex flex-col gap-10 px-3 lg:grid lg:grid-cols-2 lg:justify-between lg:px-20">
      <AccountDetails />
      <PastOrders />
      <CurrentOrder />
      <DeleteUser />
    </main>
  );
}
