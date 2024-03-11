
import useEmployee from "@/app/hooks/useStaff";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";



interface EmployeeForm {
  employeeId: String;
  name: String;
  email: String;
  password: String;
  phone: String;
  designation: String;
  address: String;
  joinDate: String;
  role: String;
  blood: String;
}

const StaffManager = () => {
  const { data, error, loading, addEmployee, deleteEmployee } = useEmployee()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeForm>();

  const onSubmit: SubmitHandler<EmployeeForm> = async ({
    employeeId,
    name,
    email,
    password,
    phone,
    designation,
    address,
    joinDate,
    role,
    blood,
  }) => {
    try {
      await addEmployee({
        employeeId,
        name,
        email,
        password,
        phone,
        designation,
        address,
        joinDate,
        role,
        blood,
      });
      console.log("add event sent from employee manager");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEvent = (id: number) => {
    console.log("from delete event", id);
    deleteEmployee(id);
  };

  return (
    <div>
      {/* form to enter new event  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="name"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        <input
          type="phone"
          {...register("phone", { required: true })}
          placeholder="phone"
        />
        <input
          type="text"
          {...register("designation", { required: true })}
          placeholder="designation"
        />
        <input
          type="text"
          {...register("address", { required: true })}
          placeholder="address"
        />
        <input
          type="text"
          {...register("joinDate", { required: true })}
          placeholder="joinDate"
        />
        <input
          type="text"
          {...register("role", { required: true })}
          placeholder="role"
        />
        <input
          type="text"
          {...register("blood", { required: true })}
          placeholder="blood"
        />
        <input type="submit" />
      </form>

      {/* event list with cross buton to delete event  */}
      {data &&
        data.map((evnt) => (
          <div key={evnt.id} className="">
            <div className=" flex justify-between items-center px-6 mt-6">
              <div className=" flex gap-6">
                <p>{evnt.name}</p>
                <p>{evnt.designation}</p>
                <p>{evnt.email}</p>
              </div>
              <div
                onClick={() => handleDeleteEvent(evnt.id)}
                className=" border-2 border-red-700 w-8 h-8 flex justify-center items-center cursor-pointer"
              >
                <p className=" text-xl font-bold">X</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StaffManager;
