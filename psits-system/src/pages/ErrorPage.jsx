import React, { Children } from "react";
import { useParams } from "react-router-dom";

export default function ErrorPage() {
  const { error } = useParams();
  return (
    <>
      {error ? (
        <div className="h-32 flex justify-center items-center text-white text-5xl font-bold pt-40">
          {error}
        </div>
      ) : (
        <div className="h-32 flex justify-center items-center text-white text-5xl font-bold pt-40">
          404 Page Not Found.
        </div>
      )}
      ;
    </>
  );
}
