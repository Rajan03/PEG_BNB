import React from "react";

export default function Loading(): React.ReactNode {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-400"></div>
        </div>
    );
}
