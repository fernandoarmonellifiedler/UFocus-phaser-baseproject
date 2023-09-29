import Image from "next/image";
import React from "react";

const ModalGeneral = ({ children, state, setState }) => {
  return (
    <>
      {state && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm z-10">
          <main className="mx-4 min-h-fit min-w-fit w-1/2 h-auto relative rounded-3xl shadow bg-green-100 py-4">
            <button
              className="absolute top-0 pt-3 pr-3 right-0 cursor-pointer"
              onClick={() => setState(!state)}
            >
              <Image
                src="/closeIcon.png"
                width={25}
                height={25}
                alt="cerrar"
              />
            </button>
            <div className="h-full w-full p-4">{children}</div>
          </main>
        </div>
      )}
    </>
  );
};

export default ModalGeneral;
