import React from "react";
import Card from "../Card";
import PeopleIcon from "@mui/icons-material/People";
import Avatar from "../Avatar";

export default function StudentInfo({ student }) {
  return (
    <Card>
      <div className="flex items-center gap-4 text-2xl font-bold mb-5">
        <PeopleIcon fontSize="" className="text-[30px]" />
        <h1 className="">Student Information</h1>
      </div>

      <div className="flex gap-4 flex-start">
        <Avatar />
        <div className="flex-1 space-y-3">
          <div className="flex flex-col justify-evenly">
            <h1 className="font-bold text-xl">{student.name}</h1>
            <h1 className="text-gray-500">Student ID: {student.id}</h1>
            <h1 className="text-gray-500">{student.section}</h1>
          </div>

          {student.member ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-evenl gap-2">
                  <h1 className="font-bold text-sm">Membership Status</h1>
                  <div className="badge badge-success font-bold text-green">
                    PSITS Member
                  </div>
                </div>
                <div className="flex flex-col justify-evenl gap-2">
                  <h1 className="font-bold text-sm">Pages Remaining</h1>
                  <div className="badge badge-primary font-bold">
                    {student.pagesRemaining} pages
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-evenl gap-2">
                  <h1 className="font-bold text-sm">Total Pages Used</h1>
                  <p className="text-2xl font-black">{student.totalUsed}</p>
                </div>
                <div className="flex flex-col justify-evenl gap-2">
                  <h1 className="font-bold text-sm">Date Joined</h1>
                  <p className="text-2xl font-black">{student.joinDate}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-evenly gap-2">
              <h1 className="font-bold text-sm">Membership Status</h1>
              <div className="badge badge-neutral font-bold text-green">
                Non-member
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
