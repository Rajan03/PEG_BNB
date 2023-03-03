'use client';

export default function Error({error, reset}: { error: Error, reset: ()=>void }) {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>

            <div className="flex flex-col justify-center items-center mt-5">
                <h1 className="text-2xl font-semibold text-gray-900">Something went wrong</h1>
                <p className="text-sm font-light text-gray-900">Please try again later</p>

                <button className="mt-5 px-5 py-2 bg-gray-900 text-white rounded-lg" onClick={reset}>Try again</button>
            </div>
        </div>
    );
}
