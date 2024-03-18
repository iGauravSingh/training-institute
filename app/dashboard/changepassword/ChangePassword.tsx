"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import useAuth from '../../hooks/useAuth'
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";

const cookie = new Cookie();

interface PasswordCahnge {
  password: String;
}

const ChangePassword = () => {
    const router = useRouter()
    const sessionToken = cookie.get("session_token");
    const {updatePassword } = useAuth()
  const [btndisableStatus, setbtndisableStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordCahnge>();

  const onSubmit: SubmitHandler<PasswordCahnge> = async ({ password }) => {
    try {
      await updatePassword({
        password,
      });

      //console.log("add event sent from event manager");
      setbtndisableStatus(true);
      try {
        // Assuming successful form submission
        cookie.remove("session_token")
     router.push("/")
        // redirect to home page
      } catch (error) {
        console.error(error);
        // Handle form submission errors (optional)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Change Password</p>

      <form
        className=" flex flex-col gap-6 px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className=" w-[60%]"
          {...register("password", {
            required: "this is required and should be minimum of 3 length",
            minLength: 3,
          })}
          placeholder="newe password min 3 length eg- asdf"
        />
        <p className=" text-red-500 text-sm">{errors.password?.message}</p>

        <input
          disabled={btndisableStatus}
          className=" font-bold hover:border-2 hover:border-newblue cursor-pointer bg-newblue text-white hover:bg-white hover:text-newblue px-4 py-6 w-28 h-20 rounded-2xl"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
