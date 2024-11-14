import React from 'react';

type ErrorField = {
    path: string[];
    message: string;
};

type ErrorModalProps = {
    toggleModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    errors: {
        fields: {
            [key: string]: ErrorField[];
        };
    };
};

export default function ErrorModal({ toggleModal, errors }: ErrorModalProps) {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
            <div className="relative w-1/3 min-w-[260px] max-w-[350px] p-4">
                <div className="relative rounded-lg border border-b-4 border-r-2 border-white bg-slate-700 shadow-lg">
                    <div className="space-y-4 p-4 md:p-5">
                        <h2 className="text-center text-lg font-medium text-white">
                            Please correct the following errors:
                        </h2>
                        <ul className="list-inside list-disc space-y-2">
                            {Object.entries(errors.fields).map(
                                ([, errorArray]) =>
                                    errorArray.map((error, index) => (
                                        <li
                                            key={index}
                                            className="text-red-500"
                                        >
                                            {error.message}
                                        </li>
                                    ))
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-center rounded-b border-t border-gray-200 p-4 md:p-5">
                        <button
                            onClick={toggleModal}
                            type="button"
                            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium
                                text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
