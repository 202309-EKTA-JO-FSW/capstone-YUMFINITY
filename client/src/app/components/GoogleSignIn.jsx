import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  return (
    <Link
      href={"https://capstone-room-5.onrender.com/v1/google"}
      className="flex w-full items-center justify-center rounded bg-orange-100 px-4 py-2.5 font-semibold text-[#FD7014] transition-all hover:bg-yellow-YUMFINITY hover:text-white-YUMFINITY active:bg-orange-900"
    >
      <FcGoogle size={25} className="mr-3" />
      Continue with Google
    </Link>
  );
}
