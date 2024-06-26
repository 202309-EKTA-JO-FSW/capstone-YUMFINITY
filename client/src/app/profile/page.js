import { cookies } from "next/headers";
import { main_url_BACKEND } from "../utils/URLs";
import DeleteUser from "./components/DeleteUser";
import PastOrders from "./components/PastOrders";
import AccountDetails from "./components/accountDetails";
import CurrentOrder from "./components/currentOrder";
import { refreshAccessToken } from "../utils/refreshAccessToken";

export const metadata = {
  title: "Profile",
  description: "Show and Edit account details",
};

async function fetchUserData() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/account-details`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const user = await res.json();

  if (user?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await fetchUserData(); // Recursively call the function with the new token
  }

  if (user) return user;
}

async function updateUserData(fields) {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/account-details`, {
    method: "POST",
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await updateUserData(fields); // Recursively call the function with the new token
  }

  return data;
}

async function getPastOrders() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/orders`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await getPastOrders(); // Recursively call the function with the new token
  }

  return data;
}

async function fetchCUrrentOrder() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/current-order`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await fetchCUrrentOrder(); // Recursively call the function with the new token
  }

  return data;
}

async function cancelCurrentOrder() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/cancel-order`, {
    method: "PATCH",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await cancelCurrentOrder(); // Recursively call the function with the new token
  }

  return data;
}

async function deleteAccount() {
  "use server";

  const res = await fetch(`${main_url_BACKEND}/delete-account`, {
    method: "DELETE",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await deleteAccount(); // Recursively call the function with the new token
  }

  if (data.message.includes("successfully")) {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
    cookies().delete("user");
    return data;
  }
}

export default function ProfilePage() {
  return (
    <main className="mt-28 flex flex-col gap-10 px-3 lg:grid lg:grid-cols-2 lg:justify-between lg:px-20">
      <AccountDetails
        fetchUserData={fetchUserData}
        updateUserData={updateUserData}
      />
      <PastOrders getPastOrders={getPastOrders} />
      <CurrentOrder
        fetchCUrrentOrder={fetchCUrrentOrder}
        cancelCurrentOrder={cancelCurrentOrder}
      />
      <DeleteUser
        deleteAccount={deleteAccount}
        fetchCUrrentOrder={fetchCUrrentOrder}
      />
    </main>
  );
}
